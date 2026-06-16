# Content Contract

## Page Content Frontmatter

```yaml
---
title: "Page title"
description: "Search result summary and metadata description."
language: "en"
slug: "en/about"
template: "content-page"
primaryCta:
  label: "Learn about Monster Alchemy"
  href: "/en/games/monster-alchemy"
ogImage: "/images/og/team-metacarpo.webp"
owner: "Team Metacarpo"
---
```

## Blog Post Frontmatter

```yaml
---
title: "Monster Alchemy Early Access Available"
date: 2026-06-15
author: "Team Metacarpo"
category: "Announcements"
language: "en"
slug: "monster-alchemy-early-access"
translationKey: "monster-alchemy-early-access"
excerpt: "Monster Alchemy is now available for early access testing."
coverImage: "/images/blog/monster-alchemy-early-access.webp"
---
```

## Required Content Rules

- No Lorem ipsum or placeholder copy.
- English and Spanish content are maintained in separate files.
- Each page and blog post has localized metadata.
- Each major page has no more than one primary CTA.
- External links include descriptive text and `rel="noopener noreferrer"`.
- Page content must not require JavaScript to be readable.

## Image Rules

Each content image must provide:

```yaml
src: "/images/game/monster-alchemy-screenshot.webp"
alt: "Monster Alchemy gameplay showing a potion crafting table"
width: 1280
height: 720
loading: "lazy"
sizeBytes: 184000
```

- Hero/LCP images may use eager loading only when documented.
- Use WebP with JPG/PNG fallback where appropriate.
- Provide responsive variants for screenshots and large media.
- Do not commit image files over 200KB without documented justification.
