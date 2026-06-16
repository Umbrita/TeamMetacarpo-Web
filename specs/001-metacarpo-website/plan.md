# Implementation Plan: Team Metacarpo Static Website

**Branch**: `main` | **Date**: June 16, 2026 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-metacarpo-website/spec.md`

## Summary

Build the official Team Metacarpo website as a static, bilingual Hugo site for players, press, publishers, and community readers. The implementation will use URL-based English and Spanish routes, Hugo markdown content files for the blog, Web3Forms POST handling for contact submissions, a self-hosted or no-script dopresskit presskit integration, and asynchronous GA4 loading gated by consent where required.

## Technical Context

**Language/Version**: HTML5, CSS3, vanilla JavaScript, Hugo Extended stable release at implementation time

**Primary Dependencies**: Hugo Extended, Hugo multilingual routing, Hugo markdown/frontmatter processing, Web3Forms contact endpoint, Google Analytics 4

**Storage**: Version-controlled files only: Hugo templates/layouts, markdown blog posts, TOML/YAML/JSON content data, committed image assets

**Testing**: Hugo production build, HTML validation, Lighthouse, Axe/WAVE accessibility scans, link checking, manual browser/device testing at 375px, 768px, and 1920px

**Target Platform**: Static hosting on Netlify with generated HTML/CSS/JS and no backend server

**Project Type**: Static marketing/content website

**Performance Goals**: FCP under 1.5s, LCP under 2.5s on typical 3G, uncompressed page payload under 500KB, no image over 200KB without documented justification

**Constraints**: Mobile-first from 375px, WCAG 2.1 AA, no React or heavy framework, no inline event handlers/styles, no decorative blobs/orbs/gradients, no third-party scripts except GA4, no exposed secrets or email addresses, no localStorage/sessionStorage

**Scale/Scope**: Six primary page types in two languages: home, about, Monster Alchemy, presskit, blog index/posts, contact; 2-3 initial blog posts per language; static assets committed to the repository

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Content-First**: PASS. Implementation is gated on real page copy, images, social links, game platform links, and initial blog posts listed in the spec content checklist.
- **Identity Over Effects**: PASS. The plan uses a restrained dark/warm palette, real game/studio imagery, CSS tokens, and forbids blobs, glowing orbs, gradients, decorative icon badges, and heavy animation.
- **One Primary Action Per View**: PASS. Each major page will define one dominant CTA in content configuration or page frontmatter.
- **Mobile-First**: PASS. Layouts start at 375px, all controls target at least 44x44px, and no workflow relies on hover-only interaction.
- **Simplicity and Scope Control**: PASS. Static output, Hugo content files, Web3Forms, and GA4 are sufficient; no backend, CMS, database, React, TypeScript requirement, ecommerce, auth, or search.
- **Security by Default**: PASS. No inline handlers/styles, CSP meta tag, async/deferred scripts, safe DOM APIs, `rel="noopener noreferrer"` for external links, no credentials in the repo, and a documented Hugo Extended version for reproducible builds.

## Project Structure

### Documentation (this feature)

```text
specs/001-metacarpo-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── routes.md
│   ├── content.md
│   └── forms.md
├── checklists/
│   └── requirements.md
└── spec.md
```

### Source Code (repository root)

```text
config/
└── _default/
    ├── hugo.toml
    ├── languages.toml
    └── menus.toml

content/
├── en/
│   ├── _index.md
│   ├── about.md
│   ├── contact.md
│   ├── presskit.md
│   ├── games/
│   │   └── monster-alchemy.md
│   └── blog/
└── es/
    ├── _index.md
    ├── about.md
    ├── contact.md
    ├── presskit.md
    ├── games/
    │   └── monster-alchemy.md
    └── blog/

layouts/
├── _default/
├── partials/
└── shortcodes/

assets/
├── css/
│   └── global.css
└── js/
    ├── analytics.js
    ├── consent.js
    └── language.js

static/
├── favicon.svg
├── images/
├── robots.txt
└── sitemap.xml
```

**Structure Decision**: Use a single Hugo static site. Localized markdown files own page and blog content, Hugo layouts/partials own repeated structure, configuration files own languages and menus, and small vanilla scripts provide progressive enhancement for analytics consent, language routing, and form status handling.

## Phase 0: Research Summary

See [research.md](./research.md). Decisions resolved: Hugo static output, static deployment with Web3Forms contact handling, markdown content files, URL-based i18n, no-script/self-hosted dopresskit integration, consent-gated GA4, and validation tooling.

## Phase 1: Design Summary

See [data-model.md](./data-model.md), [quickstart.md](./quickstart.md), and the contracts in [contracts/](./contracts/).

## Post-Design Constitution Check

- **Content-First**: PASS. Data model marks page sections, blog posts, images, CTAs, and owners as required before implementation.
- **Identity Over Effects**: PASS. Contracts require actual imagery and token-based colors; prohibited decorative elements remain out of scope.
- **One Primary Action Per View**: PASS. Page content contract allows one primary CTA per page/major section.
- **Mobile-First**: PASS. Quickstart includes required 375px validation and touch target checks.
- **Simplicity and Scope Control**: PASS. Contracts cover only static routes, content files, and forms needed by the spec.
- **Security by Default**: PASS. Form, route, and analytics contracts include CSP, external link, async script, and no-secret requirements.

## Complexity Tracking

No constitution violations require justification.
