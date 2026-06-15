# TeamMetacarpo-Web Constitution

**Version:** 1.0  
**Last Updated:** June 15, 2026  
**Project:** Static informational website for Team Metacarpo

---

## Mission
Create a focused, identity-driven static website that presents Team Metacarpo and Monster Alchemy to players, press, and publishers. Every element must earn its place through content value or clear functionality. This is a informational site, not a web application.

---

## Core Principles

### I. Content-First
Every section must have real defined content before any visual or technical implementation. No Lorem ipsum, no empty sections. If content doesn't exist yet, the section is out of scope for this iteration.

### II. Identity Over Effects
Visual decisions must reinforce the studio identity: dark backgrounds, warm light text with slightly yellowish tone, atmospheric indie game aesthetic. Decorative elements like blobs, glowing orbs, gradient backgrounds and icons inside colored circles are forbidden. Effects must serve meaning, not fill space.

### III. One Primary Action Per View
Every page or major section has one clear primary CTA. Two equally weighted actions cancel each other. If a section has no clear action, it justifies its presence through content value alone.

### IV. Mobile-First (NON-NEGOTIABLE)
All layouts designed starting at 375px and expanded upward. Every interactive element meets minimum 44x44px touch target. No hover-only interactions.

### V. Simplicity and Scope Control
YAGNI strictly enforced. No feature enters the project without a spec entry. If it's not in the spec, it doesn't get built. Complexity must be justified.

### VI. Security by Default
- No inline JS event handlers (no onclick, onload in HTML attributes)
- No injection of external content into the DOM without sanitization
- All external links must include rel="noopener noreferrer"
- No third-party scripts unless explicitly reviewed and approved
- No API keys or credentials anywhere in the codebase
- CSP headers defined via meta tag
- No eval(), no innerHTML with dynamic content, no document.write()
- All dependencies pinned to specific versions

---

## Technology Stack

### Architecture
- **Static Site**: Plain HTML/CSS/JS or Astro (to be decided in plan phase)
- **NO backend**, NO traditional database, NO CMS, NO login systems
- **NO React, NO TypeScript required**
- **Blog**: Static-generated from markdown or frontmatter (Astro, Hugo, or similar)
- **Internationalization (i18n)**: Multi-language support via URL structure (`/es/`, `/en/`, etc.) or configuration
- **Analytics**: Google Analytics 4 for non-PII user behavior tracking

### Frontend
- **Markup**: Semantic HTML5 only
- **Styling**: Plain CSS with CSS custom properties for all design tokens (colors, spacing, typography)
- **JavaScript**: Vanilla JS only; no heavy frameworks or jQuery
- **Images**: All images include alt text, width, height, and loading="lazy"
- **No localStorage or sessionStorage**

### Build & Tooling (if needed)
- Static site generator or build tool to be decided
- No bundler complexity unless justified
- Version control: Git with meaningful commit messages
- Deployment: Static hosting (GitHub Pages, Netlify, or similar)

### Third-Party Services (Approved)
- **dopresskit.com**: Official press kit platform for distributing media assets and press information
  - Presskit page integrates dopresskit template (SMTP/contact handling TBD)
  - Dopresskit provides the template; Team Metacarpo hosts it on Presskit page
  - All press assets managed via dopresskit backend
  - Template integration details to be finalized in planning phase

### Third-Party Scripts (Approved)
- **Google Analytics**: Allowed for user analytics and behavior tracking
  - Must use Google Analytics 4 (GA4)
  - Script loaded asynchronously (async attribute)
  - No custom events that expose PII (Personally Identifiable Information)
  - Consent management via cookie banner if required by law
  - Configuration in separate config file, not hardcoded

### Forbidden Dependencies
- No Bootstrap, Tailwind, or heavy CSS frameworks
- No jQuery, jQuery plugins, or similar
- No npm packages without explicit review (beyond approved analytics)
- No third-party icon libraries with decorative purposes
- No tracking pixels beyond Google Analytics

---

## Coding Standards

### HTML
- Semantic HTML5 elements only (header, nav, main, article, section, footer, etc.)
- Valid HTML; run through validator
- Meaningful alt text on all images
- No inline event handlers (onclick, onload, etc.)
- Form validation happens server-side or through native HTML5 attributes
- All links to external sites include `rel="noopener noreferrer"`

### CSS
- Mobile-first approach: base styles for 375px, then media queries for larger screens
- CSS custom properties for all design tokens: colors, spacing, font sizes, etc.
- No !important unless absolutely unavoidable with clear comment
- Meaningful class names that describe content, not appearance (content-* over color-* or size-*)
- No inline styles in HTML
- Performance: minimal repaints, no heavy animations

### JavaScript (if needed)
- Vanilla JavaScript only (no frameworks)
- No eval() or dynamic code execution
- No innerHTML with user-generated or external content (use textContent instead)
- No document.write()
- Event listeners added in script, not HTML attributes
- Progressive enhancement: site works without JS (except analytics)
- Minimal bundle size; lazy-load non-critical scripts if needed
- Google Analytics snippet loaded asynchronously with `async` attribute

### Images & Media
- All images include: alt text, width, height, loading="lazy"
- Optimize image formats (WebP with fallback)
- Responsive images with srcset where appropriate
- Maximum file sizes defined per image type
- No auto-playing video/audio without user control

### Accessibility
- WCAG 2.1 Level AA compliance minimum
- Keyboard navigation fully supported
- Color contrast ratios: 4.5:1 for text, 3:1 for UI components
- Focus visible on all interactive elements
- Screen reader compatible (test with NVDA or similar)
- No color-only differentiation of information

---

## Content Requirements

### Before Implementation
All content sections must have:
- Finalized, real copy (no Lorem ipsum)
- Defined images or asset requirements
- Clear call-to-action (or clear content-only purpose)
- Owner assigned if content needs updates

### Content Structure
- Clear hierarchy: H1, H2, H3 in logical order
- Concise paragraphs (2-3 sentences max)
- Scannable layouts with descriptive subheadings
- Links clear in context (no "click here")

---

## Design Tokens

### Color Palette
- **Primary**: Dark backgrounds (define hex value in spec)
- **Text**: Warm light text, slightly yellowish tone (define hex value in spec)
- **Accent**: TBD in design phase
- **All colors defined as CSS custom properties in stylesheet**

### Typography
- **Font stack**: TBD; no custom fonts without performance justification
- **Body text**: 16px minimum on mobile, 18px recommended
- **Line height**: 1.5 minimum for readability
- **Letter spacing**: Defaults unless design explicitly requires changes

### Spacing
- **Base unit**: 8px or 4px (define in CSS custom properties)
- **Consistent scale**: use multiples for all margins/padding
- **Safe area padding**: 16px minimum on mobile, 24px on desktop

---

## Performance Standards

- **First Contentful Paint (FCP)**: <1.5 seconds
- **Largest Contentful Paint (LCP)**: <2.5 seconds
- **Page size**: <500KB total (HTML + CSS + JS, uncompressed)
- **Image optimization**: No image >200KB without justification
- **No third-party scripts** that block rendering

---

## Development Workflow

### Branching
- `main`: Production-ready code only
- Feature branches: `feature/section-name` or `feature/functionality`
- Bugfix branches: `fix/issue-description`

### Commits
- Clear, descriptive messages: `Add about page` or `Fix mobile nav spacing`
- Atomic commits: one logical change per commit
- Reference spec.md sections when relevant

### Code Review
- Every change reviewed before merge
- Review checklist:
  - [ ] Content matches spec.md
  - [ ] Mobile layout works at 375px
  - [ ] No accessibility regressions
  - [ ] No new security issues
  - [ ] Commit message is clear
  - [ ] No hardcoded content or secrets

---

## In Scope

The following are part of this project:

### Core Pages & Sections
- **Home/Landing**: Hero section, studio highlights, main CTA, featured content
- **About Studio**: Team Metacarpo story, mission, values, team information
- **Monster Alchemy**: Game presentation (description, features, visuals, gameplay highlights)
- **Presskit**: Page with integrated dopresskit.com template (TBD implementation), media resources for journalists and publishers
- **Contact**: Contact form for inquiries from players, press, and publishers
- **Blog**: Static blog with markdown posts, organized by date and category, searchable
- **Navigation**: Main menu, footer with links, language switcher (EN/ES)

### Content Requirements
- All text content defined and real before implementation (no Lorem ipsum)
- All images, screenshots, and media assets prepared before layout development
- One primary CTA per major section
- Consistent identity reinforcement across all pages (dark backgrounds, warm yellowish text)

### Features & Functionality
- **Responsive Design**: Mobile-first from 375px, fully functional on all screen sizes
- **Multilingual Support**: Full English and Spanish versions, URL-based routing (`/en/`, `/es/`)
- **Blog with Metadata**: Posts with date, author, category, language; simple filtering by date/category
- **Google Analytics**: Tracking user behavior, page views, traffic sources (GA4)
- **Contact Form**: Simple form for inquiries, validation on client and server (TBD in spec)
- **Presskit Page**: Dedicated page with integrated dopresskit.com template for media assets, press information, and press contacts (implementation details TBD during planning phase)
- **Social Links**: Links to social media channels (footer and/or about page)

### Technical Scope
- All content stored in version control (markdown, HTML, images)
- Blog posts as markdown files with frontmatter
- Static generation (no server-side processing required)
- Images optimized with alt text, lazy loading, and responsive srcset
- CSS custom properties for all design tokens
- Press kit hosted externally on dopresskit.com; site links to it with proper security attributes

## Out of Scope for V1

The following are explicitly NOT part of v1 release:
- Comments system or user feedback forms beyond contact
- E-commerce functionality
- Heavy animations or transitions
- Backend database (blog posts are version-controlled markdown)
- Login/authentication systems
- Third-party analytics beyond Google Analytics
- Form submission beyond contact form (if applicable)

---

## Governance

**This constitution supersedes all other decisions.**

The **spec.md** is the single source of truth for what features the project must deliver.

This constitution defines **how** those features must be built—the principles, technology choices, and non-negotiable standards.

### Amendment Process
1. Document the proposed change with clear reasoning
2. Update version number (e.g., 1.0 → 1.1)
3. Add amendment date
4. Reference this document in future decisions

---

## Analytics & Privacy

### Google Analytics Configuration
- **Purpose**: Track user behavior, engagement, and traffic sources
- **Implementation**: Google Analytics 4 (GA4) only
- **Data Collection**: 
  - Page views, session duration, user source
  - Device type, browser, language, location (country-level)
  - NO personally identifiable information (PII)
- **Configuration**: GA tracking ID in environment variable or config file, never hardcoded
- **Consent**: Implement cookie consent banner if required by local regulations (GDPR, CCPA, etc.)
- **Compliance**: All Google Analytics policies followed; no PII, no sensitive data

### Blog Content & Updates
- Blog posts stored as markdown files in version control
- Frontmatter includes: title, date, author, language, category
- One language per file: `post-title-en.md`, `post-title-es.md`
- All blog content follows same visual/content standards as main site

### Multilingual Structure
- URL-based routing: `/en/about`, `/es/about`, `/en/blog`, `/es/blog`
- Content duplicated per language (no automatic translation)
- Language switcher on every page
- Hreflang tags for search engine optimization (SEO)
- Default language determined by browser settings or user preference

---

## Quality Checklist (Before Merge)

- [ ] Content is real, not placeholder
- [ ] Mobile layout tested at 375px
- [ ] Passes WCAG 2.1 Level AA accessibility check
- [ ] All external links include rel="noopener noreferrer"
- [ ] No inline event handlers in HTML
- [ ] No console errors or warnings
- [ ] No hardcoded credentials or secrets (including GA tracking ID)
- [ ] Analytics script loads asynchronously
- [ ] Blog frontmatter is valid
- [ ] All language versions match in structure
- [ ] Commit message clearly describes change
- [ ] Spec.md was consulted and followed
- [ ] No unnecessary dependencies added
