# Day 08 — Building a "Database" from a Text File (fs-based CRUD API)

## Overview

Day 08 answers the question "what does a database actually do for us?" by building a bank-account API where the "database" is a plain **`database.txt` file** read/written with Node's `fs` module. The Express server (`index.js`) implements full CRUD (get by account number, create, delete, update balance) over a JSON array persisted to disk — showing why manual file reads/writes on every request are clunky and setting up the motivation for MongoDB in Day 09+.

## Files

| File | Purpose |
|---|---|
| `index.js` | Express server on port 3000. Defines two helper functions: `readDB()` (reads `./database.txt` as UTF-8 and `JSON.parse`s it into an array) and `writeDB(data)` (`JSON.stringify(data, null, 2)` back to the file). Routes: `GET /` welcome, `GET /user/:accountNumber` (find one account), `POST /user` (push and persist a new account), `DELETE /user` (filter out the matching account by `req.body.accountNumber`), `PATCH /user` (add `req.body.balance` to the found account's balance and persist). The bottom of the file contains commented Postman test payloads (create/update/delete bodies). |
| `database.txt` | The fake database: a JSON array of 4 bank accounts (`name`, `accountNumber`, `city`, `age`, `balance`) — e.g. Chandan Kumar Dalai (Bhubaneswar), Danda Panigrahi (Delhi), Ankita Biswal (Puri), Dipsa Biswal (Cuttack). Mutated by the API on every POST/PATCH/DELETE. |
| `package.json` | ES-module project (`"type": "module"`) with `express ^5.2.1`. No DB driver yet. |

## How the code flows

Every route follows the same read-modify-write cycle because there is no database process holding state: `readDB()` parses the whole file into an array, the handler mutates that array in memory, and `writeDB()` serializes the entire array back to disk. `GET` only reads; `POST`/`DELETE`/`PATCH` must write before responding, otherwise the change is lost the moment the request ends.

## How it works — first principles

- **What a database really is**: durable storage plus a set of read/write operations. Strip away the branding and Day 08 builds one: `database.txt` is the storage engine, `readDB`/`writeDB` are the query layer, HTTP routes are the client API.
- **Bytes → string → data.** A file is just bytes. `fs.readFileSync(path, "utf-8")` decodes them into a string; `JSON.parse` turns that string into a real array of objects you can `find`/`filter`/`push`; `JSON.stringify(data, null, 2)` reverses the trip (the `2` is indentation so the file stays human-readable). Forget `"utf-8"` and you get a Buffer instead of a string.
- **Synchronous I/O in a request handler**: `readFileSync`/`writeFileSync` block the single Node event loop until the disk finishes. With one user it's instant; with ten concurrent requests they queue behind each other. Real databases are separate processes with internal buffering, caching and concurrency control for exactly this reason.
- **Persistence changes everything**: unlike Day 06's in-memory array, restarting the server no longer wipes the data — the file survives. This is the one property that makes something a "database".
- **Why this still isn't a database**: every change rewrites the whole file; two simultaneous writes can clobber each other (no atomicity/locking); scanning the array per request is O(n) (no indexes); nothing validates shape (no schemas). Those five gaps — atomicity, concurrency, indexing, validation, query language — are precisely what MongoDB is built to fill, which is Day 09's starting point.

## Flow

```mermaid
flowchart TD
    C[Client Postman] -->|HTTP| E[Express app port 3000]
    E -->|express.json| P[req.body parsed]
    P --> R{Route}
    R -->|GET /user/:accountNumber| G[readDB -> find by accountNumber] --> J[JSON response]
    R -->|POST /user| CR[readDB -> push new user -> writeDB] --> J
    R -->|DELETE /user| D[readDB -> filter out account -> writeDB] --> J
    R -->|PATCH /user| U[readDB -> user.balance += amount -> writeDB] --> J
    G & CR & D & U --> FS[fs.readFileSync / fs.writeFileSync on database.txt]
    FS --> DISK[(database.txt on disk = the 'database')]
```

## Key concepts learned

- A database is fundamentally **persistent storage + read/write operations** — here simulated with `fs.readFileSync` / `fs.writeFileSync` on every request.
- **Encoding matters**: `fs.readFileSync(path, "utf-8")` returns a string; `JSON.parse` turns it into data; `JSON.stringify(data, null, 2)` pretty-prints it back.
- **Full CRUD over HTTP**: GET (read), POST (create), PATCH (partial update — here a balance deposit), DELETE.
- `express.json()` middleware is required to read `req.body`.
- Route param (`:accountNumber`) for one-resource reads vs body payload for update/delete in this design (the delete/update take the account number in the body, unlike Day 06's param style — both patterns are valid).
- Pain points that motivate real databases: the whole file is rewritten for every change, no indexing/validators/atomicity, and no concurrent-write safety — hence MongoDB/Mongoose next.

## Notes

- No credentials used; the only "connection string" is the local file path `./database.txt`.
- Postman examples in code: POST body `{ "name": "Ankita Biswal", "accountNumber": "39852", "city": "Puri", "age": 20, "balance": 20000 }`; PATCH body `{ "accountNumber": "3445", "balance": 10000 }` (this *adds* to balance, it does not replace it); DELETE body `{ "accountNumber": "3445" }`.
- Minor bug to notice: `DELETE /user/` has a trailing slash and takes the id from the body, and `PATCH /user` crashes if the account doesn't exist (`user.balance` of undefined).
