# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Backend (Cloudflare Worker)

This repository includes a small `@rifky/backend` package (Hono) ready to run on Cloudflare Workers.

- Install workspace deps: `bun install`
- Run the worker locally: `cd packages/backend && bun run dev:worker` (requires `wrangler`)
- Build worker: `cd packages/backend && bun run build:worker`
- Publish: `cd packages/backend && bun run deploy:worker` (set `account_id` in `packages/backend/wrangler.toml` first)

See `packages/backend/CF_DEPLOY.md` for more notes.

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Resume PDF Generation

This project includes automatic LaTeX-to-PDF conversion for the resume. The PDF is generated at build time from `static/resume.tex`.

### Prerequisites

Install LaTeX on your system:

**macOS:**
```sh
brew install basictex
```

**Install required LaTeX packages:**
```sh
sudo /Library/TeX/texbin/tlmgr update --self
sudo /Library/TeX/texbin/tlmgr install preprint collection-fontsrecommended marvosym fancyhdr babel enumitem titlesec hyperref geometry
```

**Ubuntu/Debian:**
```sh
sudo apt-get install texlive-latex-base texlive-latex-extra
```

### Generate PDF

Manually generate the PDF:
```sh
bun generate:pdf
```

The PDF is automatically generated during deployment:
```sh
bun build:deploy  # Generates PDF, builds site, and deploys
```

The generated PDF will be available at `/Rifky_Putra_Resume.pdf`.
