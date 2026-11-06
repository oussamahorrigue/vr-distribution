# VR Distribution

Consumer electronics and international distribution website, adapted from `oussamahorrigue/vr`. The source repository is unchanged.

## Local development

Use Node.js 22 or later, then run `npm ci` and `npm run dev`.

## Production build

Run `NEXT_PUBLIC_BASE_PATH=/vr-distribution npm run build`. The static site is generated in `out/`; all public images use the same path prefix. The export includes trailing slashes for GitHub Pages routes.

## GitHub Pages

In repository **Settings → Pages**, select **GitHub Actions** as the build source. Pushes to `main` run TypeScript validation, build the static site, upload it, and deploy it using `.github/workflows/pages.yml`.

Expected URL: https://oussamahorrigue.github.io/vr-distribution/

This repository is private. GitHub Pages availability depends on the account plan. If GitHub does not allow Pages for this repository, the owner must choose a supported plan or explicitly choose to make the repository public.

## Contact

The existing contact form submits directly to Web3Forms. Its existing public access key is retained; delivery depends on the configured Web3Forms account. No server API route is needed on Pages. Contact email links use the existing `vrdistribution.ae` addresses.

## Presentation changes

Clear, unobscured hero photographs; uncropped brand logos at sensible display sizes; scalable category icons; responsive layouts; accessible navigation and form names; consistent VR Distribution branding; and corrected Pages asset paths and metadata. Original raster images are preserved without artificial upscaling.
