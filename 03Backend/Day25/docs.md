# Day 25 — Lecture Diagram: DNS Resolution and Domain/Database Blocking

## Overview

Day 25 is another **hand-drawn Excalidraw lecture whiteboard** ("Lecture 23.excalidraw"), exported as SVG + PNG, with no code. It continues Day 24's systems topic, this time covering **how a domain name becomes an IP address** — the full DNS resolution path — plus two practical asides: ISP-level DNS blocking and TLS certificate validation.

## Files

| File | What it is |
|---|---|
| `Lecture 23.excalidraw.svg` | The Excalidraw drawing as vector SVG (~92 KB) — contains the real text of the sketch |
| `Lecture 23.excalidraw.png` | Raster export (~3.6 MB) of the same diagram |

(Unlike Day 24 there is no `link.txt` in this folder.)

## The diagram

![Lecture 23 excalidraw — DNS resolution and blocking](Lecture%2023.excalidraw.png)

(SVG version of the same image: [Lecture%2023.excalidraw.svg](Lecture%2023.excalidraw.svg))

### What it shows, section by section (transcribed from the SVG text)

**1. Title & setup — "DNS AND DATABASE".** `ISP → Frontend → DNS` pipeline for resolving a domain like `coderarmy.in`.

**2. The resolver chain.** When the browser asks "coderarmy.in ?":
- **Device cache** is checked first: if the IP is stored locally with a **TTL** ("remember IP for 1 hour"), no network round trip is needed.
- If the cache misses ("for some how cache does not store"), the request goes to the **DNS resolver** — with examples like Google DNS `8.8.8.8` and Cloudflare `1.1.1.1`.

**3. ISP blocking aside.** "Sometimes DNS is blocked by ISP (jio/airtel/vi) — supabase and mongoes [MongoDB Atlas?] are blocked; changing ISP DNS to Google or Cloudflare makes it work fine." (Practical tip: switching your resolver to 8.8.8.8 / 1.1.1.1 bypasses ISP DNS blocks.)

**4. Hierarchy of DNS servers** ("Architecture"):
- **Root server** — if the resolver has no IP, the request moves on.
- **TLD server** — handles the top-level domain (`.in`, `.com`, `.en`, `.edu`); for `coderarmy.in` the `.in` TLD is consulted.
- **Authority (authoritative) server** — if the TLD does not store the IP for `coderarmy.in`, it forwards to the authority server, which returns the actual IP; the answer travels back: authority → DNS resolver → device.

**5. DNS records table.** Example mappings shown: `strikes.in → 12.3.4.5`, `chandan.com → 12.3.4.5` (domain name → IP rows in a DNS table).

**6. Certificate / TLS aside.** "Certified TLS — blocked because chandan.com is not valid certificate": the resolver table can return an IP, but the browser still validates the **TLS certificate** for the domain; a mismatched/invalid cert gets the site blocked even though DNS worked. ("but it does not show on your UI" — the block happens below the visible layer.)

## Key concepts

- **DNS resolution order**: device cache (with TTL) → recursive resolver (Google/Cloudflare) → root server → TLD server → authoritative server → IP returned to the client.
- **TTL caching**: cached IPs expire so changes propagate within the TTL window; here sketched as "remember IP for 1 hour".
- **ISP DNS blocking**: ISPs can filter answers at their resolver; using a public resolver (8.8.8.8 / 1.1.1.1) is the standard workaround.
- **DNS is only step one**: after the IP is known, the **TLS certificate** must match the domain or the connection is blocked — DNS success ≠ usable site.
- **Relation to the backend course**: this explains why in development `localhost` works without DNS and why deploying (custom domain + DNS records + TLS certs, e.g. on Vercel/Atlas/Supabase) involves the whole chain sketched here.

## Notes

- No code and no credentials in this folder — only the two diagram files. Nothing to redact.
- Sketch spellings ("mongoes", "TLD servr") are transcribed as drawn; the standard names are root / TLD / authoritative name servers.
- Pair with Day 24: Day 24 covered what happens *behind* the backend (database scaling), Day 25 covers what happens *before* it (getting from a domain name to the server in the first place).
