# Dragon Dance Company — Versions 1 and 2

Static HTML, CSS and JavaScript website.

- Version 1: `dist/index.html`, served at `/`
- Version 2: `dist/v2/index.html`, served at `/v2/`
- Shared photos, logo and service data: `dist/assets/` and `dist/app.js`

Run locally with `python3 -m http.server 8080 --directory dist`.

Deploy the `dist` directory. No dependency installation or build command is required. For Vercel select Other and set Output Directory to `dist`.

V2 provides searchable service cards, compact detail views, swipeable photos, expandable descriptions and videos, and fixed booking/navigation controls.
