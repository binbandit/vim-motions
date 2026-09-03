# Vim Motions

A dark, searchable reference for Vim motions, operators, and text objects — built with [Fumadocs](https://fumadocs.dev) and published on GitHub Pages.

**Live:** https://binbandit.github.io/vim-motions/

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Docs live in `content/docs`.

## Build (static)

```bash
pnpm build
pnpm start   # serves ./out
```

Production builds use `basePath` `/vim-motions` for GitHub Pages.

## Deploy

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Enable **Settings → Pages → Source: GitHub Actions** on the repo if it is not already set.

## Stack

- Next.js (static export)
- Fumadocs UI + MDX
- Orama static search
- Dark theme only
