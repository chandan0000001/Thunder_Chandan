# Day 09 — First Steps with MongoDB & Mongoose (Connection, insertMany, Schema Basics)

## Overview

Day 09 is the jump from the fake file-database to a real **MongoDB Atlas** cluster. The root project uses the official **`mongodb` driver** to run `insertMany` into a collection. The `MongooseLearning/` subproject introduces **Mongoose**: defining a `userSchema` with validators (required, minLength/maxLength, trim, min/max) and compiling it into a `Customer` model. This is the "hello world" of schema-based MongoDB access in Node.

## File-by-file explanation

| File | Purpose |
|---|---|
| `index.js` (root) | Pure **mongodb driver** example (`runGetStarted`): creates a `MongoClient` from a connection string (credentials redacted), gets database `chandan_1`, collection `ghost`, and inserts three inventory documents (`journal`, `mat`, `mousepad` — each with `qty`, `tags` array and a nested `size` object) via `insertMany`. Closes the client in a `finally` block. Demonstrates: connection string, `client.db()`, `collection()`, async/await, and graceful close. |
| `MongooseLearning/index.js` | Empty placeholder (schema file is the lesson; routes come in Day 10). |
| `MongooseLearning/buildSchema.js` | Defines `userSchema = new mongoose.Schema({...})` for a bank customer: `name` (String, required, minLength 3, maxLength 20, `trim: true`), `accountNumber` (Number, required), `city` (String, trimmed, length limits), `age` (Number, min 18, max 100), `balance` (Number, min 0, required), `accountType` (String, required). Schema option `{ timestamps: true }` adds `createdAt`/`updatedAt`. Compiles it with `mongoose.model("Customer", userSchema)` and exports the model. |
| `MongooseLearning/package.json` | Depends on `express ^5.2.1` and `mongoose ^9.9.2`, ES modules. |
| `package.json` (root) | Depends on `mongodb ^7.5.0` — the raw driver, no Mongoose. |

## Code flow

```mermaid
flowchart TD
    A[Node script starts] --> B[MongoClient with connection string]
    B --> C[client.db 'chandan_1']
    C --> D[collection 'ghost']
    D --> E[insertMany 3 documents]
    E --> F[(MongoDB Atlas cluster)]
    F --> G[console.log result]
    G --> H[finally: client.close]

    subgraph Mongoose side
        S[userSchema with validators] --> M[mongoose.model Customer]
        M --> App[(ready for Express routes - Day 10)]
    end
```

## Key concepts learned

- **MongoDB hierarchy**: deployment/cluster → database → collection → document (BSON), and how that maps to `client.db('db').collection('coll')`.
- **Connection string / MongoClient** lifecycle: create client → operate → `await client.close()` in `finally`.
- **Documents are JSON-like**: supports nested objects (`size: {h, w, uom}`) and arrays (`tags`), unlike a flat SQL row.
- **Mongoose Schema**: field types plus declarative validators — `required`, `minLength`/`maxLength`, `min`/`max`, `trim`.
- **`{ timestamps: true }`** auto-manages `createdAt` and `updatedAt` on every document.
- **Model = compiled schema**: `mongoose.model("Customer", userSchema)` gives a class-like object (conventionally capitalized, singular) that maps to a `customers` collection in MongoDB and exposes CRUD methods (`create`, `find`, `findOne`, … used in Day 10).
- Difference between the raw `mongodb` driver (schema-less, direct queries) and **Mongoose** (schemas, validation, model API).

## Notes

- The MongoDB Atlas connection string in `index.js` contains a username/password pair (user `chandanzx1`, cluster `cluster0.bpfqkoy.mongodb.net`). **These are dummy/expired credentials and have been redacted here — treat any committed URI as leaked and rotate it.** Safe form: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/`.
- Run with `node index.js` (root) after `npm install`; MongooseLearning is a separate npm project with its own install.
