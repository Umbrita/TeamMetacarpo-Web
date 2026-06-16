# Research: Team Metacarpo Static Website

## Static Site Generator

**Decision**: Use Hugo Extended static output for v1.

**Rationale**: Hugo supports fast static generation, built-in multilingual sites, markdown/frontmatter content, layout partials, taxonomies for blog categories, sitemap generation, and asset processing without introducing a client-side framework or npm dependency chain. This fits the constitution's simplicity and performance constraints while keeping bilingual pages and blog posts maintainable.

**Alternatives considered**: Astro was rejected by project preference. Plain HTML/CSS/JS was simpler at first but would duplicate layouts, metadata, hreflang tags, and blog indexes. A custom generator was rejected because markdown/frontmatter parsing and route generation are already solved by Hugo.

## Deployment and Contact Forms

**Decision**: Deploy to static hosting and use Web3Forms for contact submission.

**Rationale**: Web3Forms accepts standard HTML form submissions via POST to `https://api.web3forms.com/submit`, so the contact page can work without a backend, database, or custom JavaScript. The form will include the required hidden `access_key`, a hidden `subject`, visible `name`, `email`, and `message` fields, and a hidden `botcheck` honeypot.

**Alternatives considered**: Netlify Forms was rejected by project direction. Formspree is workable but not the selected provider. A mailto link is secure and simple but does not satisfy the success-message and validation requirements as reliably.

## Internationalization

**Decision**: Use URL-based manual translations under `/en/` and `/es/`, with a root language-choice page plus progressive enhancement redirect based on browser language or a first-party language cookie.

**Rationale**: URL routing matches the spec, is SEO-friendly, supports `hreflang`, and keeps translations independently editable. The site remains usable without JavaScript because `/` can show direct language links.

**Alternatives considered**: Subdomains violate the requirement. Automatic translation is out of scope. A single-page language toggle would weaken SEO and page-level metadata.

## Blog Content

**Decision**: Store blog posts as markdown files under `content/en/blog/` and `content/es/blog/` with YAML/TOML frontmatter and one file per language.

**Rationale**: Markdown is version-controlled, reviewable, portable, and directly matches the spec. Hugo can generate language-specific indexes, category pages, post pages, metadata, and alternate-language links from this content structure.

**Alternatives considered**: A CMS or database is out of scope. Hard-coded HTML posts would make filtering and metadata validation brittle.

## Presskit Integration

**Decision**: Implement the Presskit page with local page copy plus a dopresskit-provided static/no-script template or external asset links. Do not add dopresskit third-party scripts unless explicitly reviewed later.

**Rationale**: The constitution approves dopresskit as the press asset platform but only GA4 as an approved third-party script. A static template or outbound asset/download links preserve security and performance while satisfying press access needs.

**Alternatives considered**: An iframe or third-party widget may be acceptable only after review because it changes CSP and third-party execution behavior. Hosting all press assets locally would duplicate dopresskit as the source of truth.

## Analytics and Consent

**Decision**: Load GA4 asynchronously from a small first-party `analytics.js` module, gated by consent when required. Store the GA measurement ID in environment/config, never directly in HTML source templates.

**Rationale**: Async loading protects render performance, config separation avoids hardcoded IDs in templates, and consent gating is appropriate for a Barcelona-based studio serving EU visitors.

**Alternatives considered**: No analytics would fail the spec. Additional analytics tools are out of scope. Inline GA snippets violate the no-inline-script direction.

## Styling and Interaction

**Decision**: Use global CSS custom properties, system fonts, semantic HTML, and minimal vanilla JS for navigation, language preference, consent, and form feedback.

**Rationale**: This satisfies mobile-first performance, identity, and accessibility requirements without adding a UI framework.

**Alternatives considered**: Tailwind, Bootstrap, icon libraries, and React add unnecessary dependency and style-system weight for this informational site.

## Validation Tooling

**Decision**: Validate with `hugo --minify`, Lighthouse, Axe/WAVE, an HTML validator, a link checker, and manual device/browser testing.

**Rationale**: The acceptance criteria include performance, accessibility, SEO, broken-link, security, and mobile usability checks that require both automated and manual coverage.

**Alternatives considered**: Unit tests alone would not cover static page quality, accessibility, or responsive layout. Manual-only validation would be too easy to miss regressions.
