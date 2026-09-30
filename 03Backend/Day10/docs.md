# Day 10 — Mongoose CRUD REST API: Customer Bank App + Product Homework (Queries, Operators, Aggregation)

## Overview

Day 10 is full-stack Mongoose practice with two subprojects:

1. **`MongooseLearning/`** — an Express + Mongoose **Customer (bank) API**: connects to MongoDB Atlas at startup, defines a `Customer` schema/model with an **indexed, unique** `accountNumber` and an `enum`-validated `accountType`, then exposes complete CRUD plus bulk insert, query filtering, deposits and withdrawals.
2. **`HomeworkAss/`** — the homework: a **Product catalog API** over a richer schema (slug, brand, category enum, price, discount, stock, rating, tags, nested `reviews`), seeded from **100 products** in `products100.json`, with advanced queries: `$gt/$lt/$gte/$lte`, `$or`, `$in`, `$ne`, `$regex`, `$addToSet`/`$pull`, `$inc`, `.sort()`, `.limit()`, `.skip()` pagination, `.select()`, `findById`, and an **aggregation pipeline** (`$group`/`$project`/`$sort`) for category counts.

## Files

### MongooseLearning/

| File | Purpose |
|---|---|
| `index.js` | Express app (port 3000). Connects with `await mongoose.connect("<Atlas URI>/chandan_thunder")` (credentials redacted) before routes are registered. Routes: `POST /customer` (`Customer.create(req.body)`), `GET /customer` (`find()` all), `POST /customer/bulk` (`insertMany(Users)` — seeds the 100 users from `data.js`), `GET /customer/filter?city=&accountType=` (`find(req.query)` — passes query params straight through as the Mongo filter), `GET /customer/:accountNumber` (`findOne` with null check), `DELETE /customer/:accountNumber` (`findOneAndDelete`), `PATCH /customer/:accountNumber` (`findOneAndUpdate` with `$set {city, age}` and `{new: true}` to return the updated doc), `PATCH /customer/deposite/:accountNumber` (find → `user.balance += amount` → `user.save()`), `PATCH /customer/withdraw/:accountNumber` (same but with an insufficient-balance check). |
| `buildSchema.js` | `Customer` model schema: `name` (String, required, 3–20 chars, trimmed), `accountNumber` (Number, **required, unique, index: true** — the comment notes the index creates a B+ tree for fast search, linking back to Day 07), `city` (trimmed, 3–20), `age` (18–100), `balance` (min 0, required), `accountType` (String, **enum: ["current","saving"]**, default "saving"), `{timestamps: true}`. |
| `data.js` | `Users` array — 100 realistic bank customers (account numbers 1001–1100) with name, city, age, balance (₹3,000–₹99,000) and accountType, used for bulk seeding. |
| `package.json` | express + mongoose, ES modules. |

### HomeworkAss/

| File | Purpose |
|---|---|
| `index.js` | Express app (port 3000) connected to database `assignmentHomework`. Imports the 100-product JSON with a JSON import attribute (`import Products from "./products100.json" with {type:"json"}`). ~35 routes, nearly all wrapped in try/catch with proper status codes (400 validation, 404 not found, 500 server error): create (`POST /product`), bulk seed (`POST /product/bulk`), all products, search by brand / category / availability / out-of-stock / brand+category (`find({brand, category})` — an implicit AND) / brand **OR** category (`$or`), price ranges (`$gt`, `$lt`, `$gte`+`$lte` between), rating `>=`, multiple categories (`$in`), category exclusion (`$ne`), case-insensitive name search (`$regex` + `$options: "i"`), sorting (`sort({price: 1/-1})`, rating desc), top-5 expensive (`sort + limit(5)`), pagination (`skip((page-1)*limit).limit(limit)`), stock increase (`$inc` + `$set isAvailable`), stock decrease (find → check → `save()`, flips `isAvailable` at 0), add/remove tags (`$addToSet` / `$pull`), add review (push into subdocument array + `save()`), list reviews (`select("name slug reviews")`), remove last review (`pop()` + save), set discount (validated 0–90, `$set`), discounted products (`discount: {$gt: 0}`), **category counts via aggregation** (`$group` → `$project` → `$sort`), `findById`, and get/update/delete by `slug` (`findOne` / `findOneAndUpdate` / `findOneAndDelete`). |
| `productScheema.js` | `Product` schema: `name` (required, trimmed), `slug` (required, **unique**, lowercase — used as the human-friendly URL id), `brand` (required, lowercase), `category` (required, lowercase, **enum: ["electronics","fashion","grocery","furniture","books"]**), `price` (min 1, required), `discount` (default 0, 0–90), `stock` (min 0, required), `rating` (default 0, 0–5), `isAvailable` (default true), `tags: [String]`, and a **nested `reviews` subdocument array** (`user`, `comment`, `rating` 1–5, `date` default `Date.now`), with `{timestamps: true}`. |
| `products100.json` | Seed data: a JSON array of **100 products** across the five categories, each with slug (e.g. `apple-smartphone-pro-1`), brand, price/discount/stock/rating, tags and 2+ reviews. Bulk-inserted via `POST /product/bulk`. |
| `package.json` | express + mongoose, ES modules (Node 20+ for JSON import attributes). |

## How the code flows

Both subprojects share the same shape: at module load, `await mongoose.connect(...)` (top-level await) blocks until MongoDB is reachable, *then* the schema is imported, the model compiled and `app.listen(3000)` runs — so no request can ever hit a disconnected app. Each request then flows through the body parser into one async route handler, where every Mongoose call is awaited inside a try/catch (HomeworkAss) or a null-check (MongooseLearning), and the resulting document(s) come back as JSON.

## How it works — first principles

- **An ODM turns a schema into a gatekeeper.** Day 08 proved you can persist JSON with a text file; MongoDB proved you can store rich documents; but nothing yet stops bad data. Mongoose sits between your routes and the database: `Product.create(req.body)` flows through the Schema's validators (`required`, `min`/`max`, `enum`, `trim`, `lowercase`) before a single byte is written. Failing validation throws — which is exactly why every route is wrapped in try/catch.
- **Connection before listen.** `await mongoose.connect(uri)` at module top-level (with the URI pointing at Atlas and the database name in the path) means the event loop doesn't reach `app.listen` until connected. Databases/collections are created lazily on first insert.
- **Indexes are Day 07's B-trees in practice.** `unique: true` on `accountNumber`/`slug` (plus `index: true`) builds a B+ tree over those fields, so `findOne({accountNumber})` is a few disk reads instead of scanning every document. `unique` is also enforced *by the index* — MongoDB rejects a duplicate insert with an error.
- **Two ways to update, two trade-offs.** `findOne` → mutate the JS object → `save()` runs full validation and lets you add business logic (the withdraw endpoint checks `user.balance >= balance` first); it costs two round trips. `findOneAndUpdate(filter, { $set/$inc/$addToSet/$pull }, { new: true, runValidators: true })` is one atomic round trip — but you must opt into `{new: true}` to get the updated doc back (and `runValidators` to validate, which the update-by-slug route forgets on both counts).
- **Update operators encode intent**: `$inc` increments atomically (no read-modify-write race on stock), `$set` sets fields, `$addToSet` adds to an array without duplicates, `$pull` removes matching array elements. Passing `req.query` straight into `find()` shows that a Mongo filter is just a plain object — query params become the query.
- **Cursors chain like array methods.** `find(...).sort({price: -1}).skip((page-1)*limit).limit(limit)` mirrors JavaScript's sort/slice/filter mental model, but executes inside MongoDB (with the index doing the sorting where possible).
- **Aggregation is a pipeline.** `aggregate([$group, $project, $sort])` streams every document through stages — group by category and sum counts, reshape (`_id: 0, category: "$_id"`), then sort. It's the "reduce" step that plain `find` can't do.
- **Subdocuments live inside the parent.** Reviews are an embedded array: push/pop on the array plus `save()` (or `$pull` on the query) updates the whole product document. Embedding is right when children are always fetched with their parent — the trade-off versus separate collections.

## Flow

```mermaid
flowchart TD
    C[Client / Postman] -->|HTTP| EX[Express app port 3000]
    EX --> J[express.json body parser]
    J --> R{Route handler}
    R -->|await| MO[Mongoose Model: Customer / Product]
    MO -->|Schema validators: required, min/max, enum, trim, unique index| V{Validation passes?}
    V -->|no| ERR[error thrown -> catch -> error.status JSON]
    V -->|yes| Q[Query builder: find / findOne / insertMany / update / delete + $gt $or $in $regex $inc ...]
    Q --> DRV[Mongoose ODM / MongoDB driver]
    DRV --> DB[(MongoDB Atlas: chandan_thunder / assignmentHomework)]
    DB --> DOC[Document result]
    DOC --> RES[JSON response, {new: true} returns updated doc]
    RES --> C
```

Startup flow: `mongoose.connect(URI)` (top-level await) → schema → `mongoose.model()` → `app.listen(3000)`.

## Key concepts learned

- **`await mongoose.connect(uri/dbName)`** at module top-level — the app only starts serving once connected; the database name in the URI is created on first insert.
- **Schema validators vs database**: `required`, `min/max`, `minLength/maxLength`, `trim`, `enum`, `default`, `unique` (unique also creates an index) — enforced by Mongoose on `create`/`save`, and with `runValidators: true` on updates.
- **Indexes**: `index: true` + `unique: true` on `accountNumber`/`slug` create a B+ tree index — the practical payoff of Day 07's B-tree theory (fast lookups).
- **Create/read patterns**: `create`, `insertMany` (bulk seed from JSON/JS array), `find`, `findOne`, `findById`; passing `req.query` directly as a Mongo filter.
- **Update operators**: `$set` (update fields), `$inc` (atomic increment for stock/balance), `$addToSet` (unique array push), `$pull` (array remove); option `{new: true}` to get the updated document back, `runValidators` to re-validate on update.
- **Document vs query updates**: `findOne` + mutate + `save()` (runs full validation, allows business logic like withdraw balance checks) vs `findOneAndUpdate` (single DB round trip).
- **Comparison/logic operators**: `$gt`, `$lt`, `$gte`, `$lte`, `$or`, `$in`, `$ne`, `$regex` with case-insensitive option.
- **Cursor chaining**: `.sort()`, `.limit()`, `.skip()` for sorting, top-N and `page/limit` pagination; `.select()` for field projection.
- **Aggregation pipeline**: `$group` (count per category) → `$project` (reshape fields) → `$sort`.
- **Nested subdocuments**: reviews as an embedded array inside a product, manipulated with `push`/`pop` + `save()`.
- **Error handling convention**: try/catch per route with meaningful status codes (400 validation, 404 not found, 500 server error).

## Notes

- **Credentials**: both subprojects hard-code an Atlas URI `mongodb+srv://<user>:<password>@cluster0.bpfqkoy.mongodb.net/<dbname>` (databases `chandan_thunder` and `assignmentHomework`). The username/password are **dummy/expired and redacted here** — never commit real URIs; move them to environment variables.
- Run each subproject separately: `cd MongooseLearning && npm i && node index.js` and `cd HomeworkAss && npm i && node index.js` (HomeworkAss's JSON import attribute needs Node ≥ 20.10).
- Known quirks worth noting: `GET /customer/filter` passes raw `req.query` into `find` (any field can be filtered — handy but unvalidated); `POST /product/bulk` uses `Product.create(Products)` on an array (works like `insertMany`); withdraw/deposit endpoints would crash on a missing account (`user.balance` of null); `PATCH /products/slug/:slug` uses `findOneAndUpdate({slug}, req.body)` without `{new: true}` (it returns the pre-update doc) or `runValidators`, and accepts arbitrary body fields.
