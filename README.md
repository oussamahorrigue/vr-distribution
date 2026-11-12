# VR Distribution

Consumer electronics and international distribution website, adapted from `oussamahorrigue/vr`. The source repository is unchanged.

## Local development

Use Node.js 22 or later, then run `npm ci` and `npm run dev`.

## Production build

Run `NEXT_PUBLIC_BASE_PATH=/vr-distribution npm run build`. The static site is generated in `out/`; all public images use the same path prefix. The export includes trailing slashes for GitHub Pages routes.

## GitHub Pages

Live website: https://oussamahorrigue.github.io/vr-distribution/

Pages is configured to serve `main` at `/`. The generated `index.html`, `.nojekyll`, assets and page directories are committed at the repository root so this source serves the website instead of rendering this README.

The workflow validates and builds the site, runs `node scripts/publish-static.mjs` to keep the branch export up to date, then deploys the same export with GitHub Actions. `.pages-files.json` records the generated files so obsolete build assets can be removed safely. Source files remain in `src/` and `public/`.

For a local production update: `NEXT_PUBLIC_BASE_PATH=/vr-distribution npm run build`, `touch out/.nojekyll`, then `node scripts/publish-static.mjs`.

## Contact

The existing contact form submits directly to Web3Forms. Its existing public access key is retained; delivery depends on the configured Web3Forms account. No server API route is needed on Pages. The sole public contact email is `sales@vr-international.ae`.

## Presentation changes

Clear, unobscured hero photographs; uncropped brand logos at sensible display sizes; scalable category icons; responsive layouts; accessible navigation and form names; consistent VR Distribution branding; and corrected Pages asset paths and metadata. Original raster images are preserved without artificial upscaling.
