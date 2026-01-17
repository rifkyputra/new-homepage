# @rifky/backend

Simple Hono backend for the project.

## Scripts

- `cd packages/backend && bun run dev:worker` — run Cloudflare Workers locally with `wrangler`
- `cd packages/backend && bun run build:worker` — build worker entry into `dist/worker.js`
- `cd packages/backend && bun run deploy:worker` — publish the worker with `wrangler`

## Endpoints

- `GET /` — basic hello
- `GET /health` — health check
- `POST /contact` — accepts JSON body and logs it to console
