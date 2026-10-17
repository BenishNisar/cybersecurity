# Deployment security

The page has no backend, secret keys, authentication, untrusted HTML injection, eval, external executable scripts or analytics. Contact uses email links. The cookie form updates local preferences only.

## Content Security Policy

The `_headers` file contains a restrictive policy for this build. It allows local CSS, fonts, images and JavaScript and includes the exact hash for the inline Organisation and WebSite JSON data. Recalculate that hash after changing the structured data. The Python below prints a replacement hash:

```python
from pathlib import Path
import base64, hashlib, re
page = Path('index.html').read_text()
value = re.search(r'<script type="application/ld\+json">(.*?)</script>', page).group(1)
print('sha256-' + base64.b64encode(hashlib.sha256(value.encode()).digest()).decode())
```

Set `frame-ancestors` using an HTTP response header, not a meta element. The included `_headers` syntax is supported by some static hosts. Other servers require equivalent configuration. Confirm the actual response headers on the final host.

HTTPS is required for production. Enable HSTS after confirming HTTPS on the intended domain. Add includeSubDomains or preload only after reviewing every affected subdomain. Enable Brotli or gzip and appropriate caching for static assets. Use short caching for HTML and version asset filenames before enabling immutable asset caching.

All assets are served locally. Subresource Integrity for third party CDN requests is therefore unnecessary in this build. If replacing local dependencies with CDN assets, pin versions and set the correct integrity hashes and crossorigin attribute.

## Future forms

There is no network form in the current page. For a future backend, validate and normalise inputs on the server, constrain length and accepted fields, encode output, enforce a CSRF token and origin checks, rate limit submissions and avoid retaining security evidence unnecessarily. Client validation complements server validation and does not replace it. Keep credentials and email provider tokens on the server.

## Optional tracking

No optional script loads today. The consent state is exposed through `window.OryvantConsent.get()` and the `oryvantai:consent` event. A future integration must check for explicit category consent before requesting a script, pixel or network endpoint. Revocation must remove optional cookies, stop collection and provide any vendor specific opt out steps. The current controls do not claim to clear cookies from tracking software that has not been integrated.

## Operational review

Confirm hosting logs, retention, processing locations and the final privacy policy with the site owner. No hosting provider, regulatory compliance result or security certification is implied by this frontend package.
