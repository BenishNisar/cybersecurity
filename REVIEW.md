# Version 2 validation

The redesigned homepage was tested in Chromium 155 with Playwright. The desktop and mobile opening screens were visually inspected, followed by full page captures. Browser testing used the compiled Tailwind stylesheet, local fonts and local icon assets.

## Responsive layouts

| Width | Horizontal overflow | Missing loaded images | H1 count | Main sections |
| :--- | :--- | :--- | :--- | :--- |
| 1536 px | None | None | 1 | 14 |
| 1440 px | None | None | 1 | 14 |
| 1280 px | None | None | 1 | 14 |
| 1024 px | None | None | 1 | 14 |
| 768 px | None | None | 1 | 14 |
| 430 px | None | None | 1 | 14 |
| 390 px | None | None | 1 | 14 |
| 360 px | None | None | 1 | 14 |

The security control strip is now integrated directly beneath the dark workflow, accounting for the change from 15 sections to 14. No required content section was removed.

Images were explicitly loaded before image checks and full page screenshots. The final gallery preserves the embedded text in supplied banners. Insight images use the network crop without embedded banner copy.

## Navigation and interactions

| Check | Result |
| :--- | :--- |
| Desktop Solutions, Services and Industries open on hover | Passed |
| Clicking an automatically opened desktop menu keeps it open | Passed |
| ArrowDown moves focus into a desktop dropdown | Passed |
| Escape closes dropdowns and mobile navigation | Passed |
| Mobile panel, backdrop and accordions | Passed |
| Mobile background content becomes inert while navigation is open | Passed |
| Closing mobile navigation restores page interaction | Passed |
| Mobile focus loops within the active header and menu | Passed |
| Cookie notice yields visually to the mobile menu without saving a choice | Passed |
| Expanded mobile panel stays inside the viewport at 1024, 768, 390 and 360 px | Passed |
| Expanded menu can scroll at those widths | Passed |
| Desktop navigation text at 1280 px | 15 px |
| FAQ interaction | Passed |
| Main content and native FAQ with JavaScript disabled | Passed |
| Accept and Reject choices persist after reload | Passed |
| Individual optional preferences can be saved and withdrawn | Passed |
| Preferences expire and prompt again | Passed |
| Footer reopens cookie and privacy dialogs | Passed |
| Native dialog Escape, focus containment and focus restoration | Passed |

## Source and security checks

There are 42 unique IDs and 61 validated internal navigation or ARIA target references. All 23 checked local HTML asset references, including responsive image candidates, exist. Referenced CSS fonts and images also exist.

The production stylesheet identifies Tailwind CSS 4.1.18. Bootstrap is absent from the markup and vendor files. The Organisation and WebSite structured data parses successfully. Production JavaScript passed the Node syntax check. No browser script errors or failed resource responses were observed during the layout checks.

The included Content Security Policy was applied as an actual HTTP response header during an additional local browser test. Desktop menus and the cookie dialog remained functional. No Content Security Policy violations or browser script errors were recorded in that session. The final host still needs to apply its own response header configuration.

No optional analytics, marketing scripts, external font requests, secret keys, untrusted HTML injection or backend submissions are present. The conceptual security diagrams are labelled and contain no fabricated customer incident records or live performance measurements.

## Performance and limits

Production CSS is minified. JavaScript is compact and uses no runtime framework. Manrope and the selected Font Awesome icons load locally with font display swap. Supplied imagery uses WebP and responsive sizes where useful. Images below the opening screen are lazy loaded. Reduced motion disables network route animation and transitions.

This is a targeted frontend review, not a formal accessibility certification, penetration test or production infrastructure audit. Safari, Firefox and screen reader testing remain launch checks. No production Lighthouse score or field Core Web Vitals outcome is claimed. Those should be measured on the actual host with its final compression and caching.

The site was not published, connected to a live domain or used to send email. Contact links open the supplied address in the visitor's email application. Hosting privacy terms and legal text require review against the actual deployment.
