# OryvantAI homepage · Version 2

A complete enterprise cybersecurity homepage, redesigned around the supplied second brief while retaining the original information architecture and approved business positioning.

## Run the finished page

The production files are already compiled. Open `index.html`, or use a local static server:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. A local server is recommended for testing preference storage. No Node runtime or external CDN is needed to serve the finished website.

## Edit and build

Tailwind CSS 4.1.18 is the primary styling system. It is compiled locally using the pinned CLI. Layout utilities in the HTML and reusable components built with Tailwind `@apply` share the same design tokens. Custom CSS adds the network diagram, floating navigation, architecture connectors and responsive refinements.

With Node 20 or newer:

```sh
npm ci
npm run build
```

For live CSS rebuilding:

```sh
npm run dev
```

There is no Bootstrap, Alpine runtime, React, slider or external JavaScript dependency. Vanilla JavaScript handles menus, dialogs, FAQs and local consent settings. SCSS was omitted because the Tailwind component layer already provides the reusable architecture.

## Files

| Path | Purpose |
| :--- | :--- |
| `index.html` | Complete semantic homepage, metadata and structured data |
| `assets/css/input.css` | Tailwind entry, design tokens and component source |
| `assets/css/main.min.css` | Compiled production CSS |
| `assets/js/main.js` | Readable interaction source |
| `assets/js/main.min.js` | Compact production JavaScript |
| `assets/vendor/fontawesome.min.css` | Selected icons from Font Awesome 6.7.2 |
| `assets/fonts/` | Local Manrope weights and the solid icon font |
| `assets/images/` | Optimised supplied brand artwork and responsive sizes |
| `scripts/build-js.cjs` | Dependency free JavaScript compaction |
| `package.json` and `package-lock.json` | Pinned development toolchain |
| `licenses/` | Font and styling dependency licences |
| `_headers` | Suggested static host security headers |
| `SECURITY.md` | Security, consent and future form guidance |
| `REVIEW.md` | Actual browser validation and remaining launch checks |

## Design system

Brand tokens are declared in both the Tailwind theme and CSS custom properties. The palette follows the redesign brief: deep navy, electric cyan, blue, controlled violet, cool light surfaces and white. Manrope is the only downloaded text family. Technical labels use the visitor's system monospace font, avoiding another font request.

The floating white navigation shell contains readable, icon based Solutions, Services and Industries menus. Desktop supports hover, click and keyboard access. Mobile uses a scrollable panel, accordion submenus, a backdrop, focus management and a visible CTA. The cookie notice temporarily yields to the menu without recording a consent decision.

The hero diagram, operations illustration and SOC status panel are explicitly conceptual. They do not depict a released platform, real customer environment, measured security status or live incident data. Human approval and reviewable evidence remain central throughout the page.

The process becomes a vertical timeline on mobile. The controls that previously formed a separate strip now sit directly beneath the dark SOC workflow. All other major sections remain in their original order. The supplied artwork is presented without cropping its embedded text in the gallery. Editorial cards use a network crop so banner words do not compete with article headings.

## Content and contact

Copy follows the supplied customer and business materials. The optional Security Workflow Engineering card reflects the documented custom workflow scope. No certifications, customers, vendor partnerships, autonomous containment, production integrations or performance results have been invented. Confidential financial planning information remains absent.

The three solution labels describe tailored engagement scopes. Upcoming insights are labelled and have no fabricated article destinations. Internal navigation links stay on the homepage. Contact CTAs open email to `bilal@oryvantai.tech`; no message is submitted by the page.

## Consent and privacy

Existing preferences remain compatible with `oryvantai.consent.v1`. They expire after 180 days. Necessary local preference storage is always enabled; Analytics and Marketing remain optional choices. There are no optional tracking scripts in this version. The footer reopens the accessible preferences and privacy dialogs.

The privacy text describes this static homepage. Confirm the chosen host's actual logging, retention and business privacy terms before public launch.

## Launch

The package is ready for static hosting but has not been published or connected to a domain. Confirm canonical and social URLs, the final privacy terms and the actual response headers. The supplied CyberX screenshot was used as visual inspiration for the floating shell and page rhythm; the original reference preview URL was unavailable during the first build. The implementation, business content and brand remain OryvantAI.
"# cybersecurity" 
