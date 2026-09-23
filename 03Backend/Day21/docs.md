# Day 21 — Chat App Backend: Auth, Chats, Messages (MVC + JWT + Mongoose)

## Overview

Day 21 builds the foundation of an AI-chat-app backend (a ChatGPT-style API) **without any AI yet**:

- Full **JWT cookie-based authentication** (signup / login / logout / profile / delete account)
- **Chat** resources (create, list recent, get single, delete)
- **Messages** inside a chat (get messages, send message — with a placeholder AI reply)
- Data model split into `User`, `Chat`, `Message` collections
- Zod request validation, bcrypt password hashing, role of `authUserMiddleware` on protected routes

The folder has two complete implementations of the same app:

| Variant | Location | Notes |
|---|---|---|
| Live-class version | `Day21/class/` | Cleanest version, extra comments with the target API design (`/user`, `/chat`, `/msg` routes), `deleteAccount` endpoint |
| After-class practice | `Day21/afterClass/` | Same app re-typed by hand — slightly different naming (`middleware/` singular dir, `userValidator.js` singular, `chatcontroller.js` lowercase) and minor typos; useful as a second pass on the same concepts |

Both are Express 5 + Mongoose apps in ESM (`"type": "module"`) with `bcrypt`, `cookie-parser`, `dotenv`, `jsonwebtoken`, `mongoose`, `zod`.

## Folder structure (class/ variant)

```
Day21/
├── class/                     # in-class implementation
│   ├── index.js               # entry point: express app, middleware, routers, startServer()
│   ├── config/database.js     # mongoose.connect(process.env.MONGO_URL)
│   ├── controllers/
│   │   ├── userController.js     # signup, login, logout, profile, deleteAccount
│   │   ├── chatController.js     # getRecentChat, getSingleChat, createChat, deleteChat
│   │   └── messageController.js  # getMessage, sendMessage (dummy AI reply)
│   ├── middlewares/
│   │   └── authUserMiddleware.js # JWT cookie verify -> req.user = existingUser
│   ├── model/
│   │   ├── userSchema.js      # name, age, email(unique), password(hash), usage{tokenUsed, tokenLimit=10000, resetAt(+5h), totalTokenUsed}
│   │   ├── chatSchema.js      # userId(ref User), topic, model, summary fields, messageCount, usage{prompt/completion/totalTokens}, timestamps, index(userId, updatedAt)
│   │   └── messageSchema.js   # userId, chatId(ref Chat), role("user"|"assistant"), content, tokens, usage, timestamps, indexes(chatId+createdAt, userId+createdAt)
│   ├── routes/
│   │   ├── userRouter.js      # /login /logout /signup POST, /profile GET + auth, /delete DELETE + auth
│   │   ├── chatRouter.js      # router-level authUserMiddleware; /createChat POST, /getRecentChat GET, /:chatId GET|DELETE
│   │   └── messageRouter.js   # router-level auth; POST "/" or "/:chatId" -> sendMessage, GET /:chatId -> getMessage
│   ├── validators/userValidators.js  # zod signupSchema / loginSchema
│   └── package.json
├── afterClass/                # same app, re-typed practice copy (see differences above)
└── .gitignore
```

**Environment variables needed** (`.env`, present in `afterClass/`): `MONGO_URI`, `PORT`, `JWT_SECRET`.

## Key code flow

### 1. Server bootstrap (`index.js`)
`dotenv.config()` → express app → `express.json()` + `cookieParser()` → mount routers at `/user`, `/msg`, `/chat` → `startServer()` awaits `connectDB()` then `app.listen(process.env.PORT)`.

### 2. Signup / login (userController)
- `signup`: `signupSchema.safeParse(req.body)` (zod: name 3–30, optional age 10–100, email preprocessed/trimmed/lowercased, password ≥8 with upper+lower+digit+special) → 409 if email exists → `bcrypt.hash(password, 12)` → `User.create` → `createToken(id, email)` via `jwt.sign(..., {expiresIn:"1h"})` → set `httpOnly` cookie `token`.
- `login`: `loginSchema.safeParse` → find user → `bcrypt.compare` → same token cookie → returns profile + `usage`.
- `logout`: `res.clearCookie("token")`.
- `profile`: reads from `req.user` (set by auth middleware) — no DB hit needed.
- `deleteAccount`: cascading delete — `Message.deleteMany({userId})` → `Chat.deleteMany({userId})` → `User.deleteOne({_id})` → clear cookie.

### 3. Auth middleware
Reads `req.cookies.token` → `jwt.verify(token, JWT_SECRET)` → `User.findById(payload.id)` → attaches `req.user = existingUser` → `next()`. This guarantees **ownership scoping**: every chat/message query also filters by `userId: req.user._id`.

### 4. Chat ownership + cascading delete
`getSingleChat`/`deleteChat`/`getMessage` all do `Chat.findOne({ _id, userId: req.user._id })` first; a missing match returns 404/403, so users can never touch each other's chats. `deleteChat` removes all messages of the chat before deleting the chat.

### 5. sendMessage (placeholder for Day 22)
Validates content → validates ObjectId → finds/creates chat (new chat gets `topic = first 40 chars` of message, `model` from body) → saves the **user** message → saves a **dummy** assistant message (`"AI reply will come here later."`) → `chat.messageCount += 2` → saves chat. Day 22 replaces step 5 with a real OpenRouter call.

### 6. Schemas built for AI usage from day one
Both `Chat` and `Message` already carry token accounting fields (`usage.promptTokens/completionTokens/totalTokens`), and `Chat` carries summarization fields (`summary`, `summaryUpdatedAt`, `summarizedTillMessageNumber`) — these stay unused until Day 22. `User.usage` has `tokenUsed`, `tokenLimit` (10 000) and `resetAt` (now + 5 h) for rate limiting.

## Mermaid flow — login then send message

```mermaid
sequenceDiagram
    participant C as Client
    participant R as Express Router
    participant UC as userController
    participant M as authUserMiddleware
    participant MC as messageController
    participant DB as MongoDB

    C->>R: POST /user/login {email, password}
    R->>UC: login()
    UC->>DB: User.findOne({email})
    UC->>UC: bcrypt.compare + jwt.sign({id,email}, 1h)
    UC-->>C: 200 + httpOnly cookie "token"

    C->>R: POST /msg/:chatId {content}
    R->>M: authUserMiddleware
    M->>M: jwt.verify(cookie) + User.findById
    M->>MC: req.user = user; next()
    MC->>DB: Chat.findOne({_id, userId: req.user._id})
    MC->>DB: Message.create(role:"user")
    MC->>DB: Message.create(role:"assistant", dummy reply)
    MC->>DB: chat.messageCount += 2; chat.save()
    MC-->>C: 201 {userMessage, assistantMessage}
```

## Key concepts

- **MVC layering**: `routes → middlewares → controllers → models`; routers know nothing about business logic.
- **JWT in httpOnly cookies**: token is not readable by JS in the browser; 1 h expiry; secret from env (server throws at token-creation time if `JWT_SECRET` is missing).
- **Ownership scoping**: every DB query is double-filtered (`_id` + `userId`), which is the backend's real authorization check — not just "is logged in".
- **Zod validation with `safeParse`** and `z.preprocess` to trim/lowercase emails before validating; first issue message returned to client.
- **bcrypt hashing** with cost 12; never store or log plain passwords.
- **Indexing for access patterns**: `{userId, updatedAt:-1}` for the recent-chats list, `{chatId, createdAt:1}` for chronological message fetch.
- **Cascading deletes** (account → chats → messages) to avoid orphan documents.
- **Pre-built schema fields** (`usage`, `summary*`) anticipating Day 22's AI + token-billing features.

## Notes

- Credentials: the checked-in `.env` (`afterClass/.env`) contains `MONGO_URI`, `PORT`, and `JWT_SECRET` values — **treat them as dummy/expired; do not copy them.** Create your own `.env`:
  ```
  MONGO_URI=<your own local or Atlas URI>
  PORT=3000
  JWT_SECRET=<your own random string>
  ```
- Minor inconsistencies (learning-repo artifacts): `afterClass` uses `MONGO_URI` while `class/config/database.js` reads `process.env.MONGO_URL` — one of them must be aligned for the class variant to connect. Typos like "Interna server error" exist in a few responses.
- There is no real AI in this day: the assistant message is hardcoded, and the `usage`/`summary` schema fields are scaffolding for Day 22.
