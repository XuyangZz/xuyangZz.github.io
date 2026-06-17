# xuyangZz.github.io

Personal blog of Xuyang Zhou.

Built with [Astro](https://astro.build/) + MDX. Hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build to ./dist
```

## Deployment

Push to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml` which builds the site and deploys
it to GitHub Pages.

## Authoring

Posts live in `src/content/blog/` as `.mdx` files. Frontmatter
keys: `title`, `description`, `pubDatetime`, `tags`.

About page: `src/content/about/about.md`.
