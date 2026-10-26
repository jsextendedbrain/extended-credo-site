# Project rules

- Keep content fully static and preserve the semantic no-JavaScript fallback; hosting must not require a server.
- Serve pre-optimized responsive WebP assets with explicit intrinsic dimensions, retaining original source images for future conversion; this avoids oversized downloads and decoding overhead without adding a runtime service.
- Self-host DM Sans as licensed WOFF2 files with swap rendering; this removes render-critical third-party font requests.
- Keep the home page eager and secondary pages lazy-loaded, with no unused global notification providers; this reduces initial JavaScript without delaying home content.