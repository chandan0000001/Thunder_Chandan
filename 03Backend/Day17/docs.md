# Day 17 — JWT Authentication: Signup / Login / Logout / Profile with Cookie-based Tokens

## Overview
Building on Day 16's skeleton, Day 17 makes the user APIs real:
- `signup` — validate input, check duplicate email, hash password with **bcrypt**, create user, issue a **JWT** in an httpOnly cookie.
- `login` — find user, `bcrypt.compare` password, issue JWT cookie.
- `logout` — clear the cookie.
- `profile` — now protected by a new **`authUserMiddleware`** that verifies the JWT from the cookie, loads the user from MongoDB, and attaches it to `req.user`.

Two variants: `clss` (instructor version, folder `middlewares/`) and `afterclassx` (student practice, folder `middleware/`).

## Folder Structure
```
Day17/
├── clss/                            # instructor version
│   ├── index.js                     # + cookieParser()
│   ├── config/database.js           # unchanged from Day16
│   ├── middlewares/
│   │   └── authUserMiddleware.js    # NEW: JWT verify middleware
│   ├── model/                       # userSchema / chatSchema / messageSchema (unchanged)
│   ├── controllers/
│   │   └── userController.js        # NEW: real signup/login/logout/profile
│   ├── routes/
│   │   ├── userRouter.js            # profile now guarded by authUserMiddleware
│   │   ├── chatRouter.js            # still empty
│   │   └── messageRouter.js         # still empty
│   └── package.json                 # + bcrypt, jsonwebtoken, cookie-parser
└── afterclassx/                     # student practice (same layout, `middleware/` folder)
```

## File-by-File Explanation

### index.js
Same as Day 16 plus `app.use(cookieParser())` — required so `req.cookies.token` is available to the auth middleware and controllers. Mounts `/user` → userRouter, `/msg` → messageRouter; connects to DB before listening.

### middlewares/authUserMiddleware.js
```js
const {token} = req.cookies;
const payload = jwt.verify(token, process.env.JWT_SECRET);
const existingUser = await User.findById(payload.id);
if (!existingUser) return res.status(404).json({message: "User Doesnt Exist"});
req.user = existingUser;
next();
```
Reads the JWT cookie, verifies signature/expiry against `JWT_SECRET`, looks the user up (so deleted users are rejected even with a valid token), attaches the doc to `req.user`, calls `next()`. Any failure (missing/invalid token, DB error) falls into the catch → 500. This is **authentication + minimal state**: the token proves identity; the DB lookup gives fresh data.

### controllers/userController.js
- `createToken(id, email)` — helper that throws if `JWT_SECRET` is missing and signs `{id, email}` with `expiresIn: "1h"`.
- `cookiesOption` — `{ httpOnly: true, secure: false, maxAge: 60*60*1000 }` (httpOnly so client-side JS can't read the token; secure:false because the class runs on plain http).
- `signup` — destructures body, manual presence check (400), `User.findOne({email})` duplicate check (409), `bcrypt.hash(password, 12)`, `User.create`, issues token cookie, responds 201 without the password hash.
- `login` — presence check (400), `findOne` + `bcrypt.compare` (401 "Invalide Credentials" on either miss), issues token cookie, returns profile + usage (200).
- `logout` — `res.clearCookie("token", ...)` (200).
- `profie` — protected handler; simply returns `req.user` fields (name, age, usage, email). The old email-based (insecure) version is left as a comment — the point being: identity now comes from the verified token, **not** from the request body.

### routes/userRouter.js
Same four routes; the only change is `userRouter.get("/profile", authUserMiddleware, profile)` — route-level middleware so only profile is protected.

### model/ (unchanged)
userSchema / chatSchema / messageSchema same as Day 16.

### package.json
Adds `bcrypt@^6`, `jsonwebtoken@^9`, `cookie-parser@^1.4` (afterclassx also lists `validator`, unused yet).

## Class vs After-Class (`clss` vs `afterclassx`)
Same architecture and flow. Practice-version differences (good bug-finding exercises):
- `afterclassx` folder named `middleware/` (singular) vs `middlewares/`.
- `createToken`: inverted check `if (process.env.JWT_SECRET) throw` — throws when the secret **exists**, a real logic bug.
- `logout` clears a cookie named `"tok"` instead of `"token"`.
- Middleware's catch block uses `response.status(...)` (the express import) instead of `res`, so errors never respond.
- `bcrypt` imported as `bycrpt`; minor naming (`signUpSchema` naming appears in Day 18). `clss` is the corrected reference.

## Code Flow
```mermaid
flowchart TD
    A[HTTP Request] --> B[Express + cookieParser]
    B --> C[userRouter]
    C --> D{Route}
    D -->|/signup| E[signup: validate -> findOne email -> bcrypt.hash -> User.create]
    D -->|/login| F[login: findOne email -> bcrypt.compare -> issue token]
    D -->|/logout| G[logout: clearCookie token]
    D -->|/profile| H[authUserMiddleware]
    H --> I[jwt.verify cookie token]
    I --> J[User.findById payload.id]
    J --> K[(MongoDB)]
    K --> L[req.user = user, next]
    L --> M[profile handler]
    E --> N[JWT cookie + JSON response]
    F --> N
    G --> O[200 logged out]
    M --> P[200 profile from req.user]
    N --> Q[Response]
    O --> Q
    P --> Q
```

## API Endpoints
| Method | Path | Controller | Auth | Status |
|---|---|---|---|---|
| POST | /user/signup | signup | No | 201 / 400 / 409 |
| POST | /user/login | login | No | 200 / 400 / 401 |
| POST | /user/logout | logout | No | 200 (clears cookie) |
| GET  | /user/profile | profile | **authUserMiddleware** | 200 / 404 / 500 |

## How it works — first principles
- **Why hash passwords?** If the DB leaks, plaintext passwords leak with it. `bcrypt.hash(password, 12)` stores a one-way, salted hash; the cost factor 12 makes brute force slow by design. Verification uses `bcrypt.compare`, which hashes the candidate with the stored salt — never "decrypt" anything. Basic→advanced: plaintext → custom "encryption" (broken) → fast hashes like SHA-256 (too fast for GPUs) → purpose-built slow salts like bcrypt/argon2.
- **Why tokens instead of server-side sessions?** Sessions need a server-side store (memory/Redis) shared across instances. A JWT is self-contained: the server signs `{id, email}` with `JWT_SECRET`, and any later request can be authenticated by verifying the signature alone. The cost: you can't trivially revoke it, which is why expiry (`expiresIn: "1h"`) matters.
- **Why httpOnly cookies?** If the token lived in `localStorage`, any injected script (XSS) could steal it. An `httpOnly` cookie is invisible to JS and auto-sent by the browser on same-site requests — the browser does the token handling so client code never can.
- **Why an auth *middleware* instead of checking the token inside each controller?** The verify-then-load-user sequence is identical for every protected route; copy-pasting it into each controller means each is one forgotten check away from a data leak. Express middleware is exactly this abstraction: a function `(req, res, next)` that runs *before* the handler, either short-circuits with a response (401/404/500) or enriches `req` (`req.user = existingUser`) and calls `next()`. Basic→advanced: check in handler → helper function → per-route middleware (`router.get("/profile", authUserMiddleware, profile)`) → router-wide `router.use(auth)` (Day 18).
- **Why re-fetch the user from DB after verifying the token?** The signature proves "this token was issued by us for user X", not "user X still exists" — revocation/deletion needs the `User.findById(payload.id)` check. It also gives the handler a *fresh* document (name, usage) rather than stale claims.
- **Why different status codes (400/401/409/201)?** They're the API's contract: 400 client sent bad input, 401 who-you-are failed, 409 conflict with existing state (duplicate email), 201 new resource created. Clients (and later, frontend error handling) branch on these rather than parsing messages.
- **JWT in httpOnly cookies** vs localStorage — XSS-safer, automatically sent by the browser.
- **Password hashing** with bcrypt (cost 12) and constant-time `bcrypt.compare`; never store or return plaintext.
- **Auth middleware pattern**: verify token → load fresh user → `req.user` → `next()`. Reused across future routers.
- **Route-level middleware** (`router.get(path, middleware, handler)`) to protect only some routes.
- **Status-code semantics**: 400 missing fields, 401 bad credentials, 404 user gone, 409 duplicate email, 201 created.
- Token payload = `{id, email}`, 1h expiry, signed with `process.env.JWT_SECRET`.

## Notes
- `JWT_SECRET`, `MONGO_URL`, `PORT` in any `.env`/code here are **dummy class values, likely expired — do NOT copy them**; generate your own secret and DB URI.
- Known typos in the code (`res.staus`, `paasowrd` in signup's hash line, "Invalide") are as-written in the repo — worth fixing as an exercise; don't treat them as correct patterns.
