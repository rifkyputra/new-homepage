Cloudflare Worker deployment notes

## Initial Setup

1. Set your `account_id` in `wrangler.toml`
2. Create D1 database: `wrangler d1 create rifky-contacts`
3. Copy the `database_id` from output to `wrangler.toml` under `[[d1_databases]]`
4. Initialize database schema: `wrangler d1 execute rifky-contacts --file=schema.sql`
5. Set Resend API key: `wrangler secret put RESEND_API_KEY` (get from https://resend.com/api-keys)
6. Update the `from` email in `worker.ts` to use your verified Resend domain

## Development

- Run locally: `cd packages/backend && bun run dev:worker`
- Local D1: Use `.dev.vars` for secrets and wrangler creates local DB automatically

## Deployment

- Build: `cd packages/backend && bun run build:worker`
- Deploy: `cd packages/backend && bun run deploy:worker`

## D1 Database Commands

- List tables: `wrangler d1 execute rifky-contacts --command "SELECT name FROM sqlite_master WHERE type='table'"`
- View contacts: `wrangler d1 execute rifky-contacts --command "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10"`
- Query specific: `wrangler d1 execute rifky-contacts --command "SELECT * FROM contacts WHERE email = 'user@example.com'"`

Tips:
- For route/zone deployments, add `zone_id` and `route` configuration in `wrangler.toml`.
- D1 free tier: 5 GB storage, 5 million reads/day, 100k writes/day
