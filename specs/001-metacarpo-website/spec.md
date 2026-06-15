# Feature Specification: Team Metacarpo Static Website

**Feature Branch**: `001-metacarpo-website`

**Created**: June 15, 2026

**Status**: Draft

**Input**: Build a static informational website for Team Metacarpo indie game studio from Barcelona, targeting players, press, and publishers. Support English and Spanish, include blog, contact form, and Google Analytics. Align with CONSTITUTION.md principles: Content-First, Identity Over Effects, One Primary Action Per View, Mobile-First, Simplicity and Scope Control, and Security by Default.

---

## User Scenarios & Testing

### User Story 1 - Player Discovers Monster Alchemy (Priority: P1)

A player finds Team Metacarpo via search or social media, lands on the home page, and learns about the studio and its flagship game Monster Alchemy. They need to quickly understand what the game is and where to find it.

**Why this priority**: This is the core value proposition. The site must immediately communicate the studio identity and game concept. Core audience entry point.

**Independent Test**: Can be fully tested by visiting the homepage in both English and Spanish, reading the hero section and featured game content, and verifying the primary CTA (link to Monster Alchemy page or external game link) is visible and functional.

**Acceptance Scenarios**:

1. **Given** a new visitor lands on the homepage, **When** they load the page at `/en/` or `/es/`, **Then** they see the studio hero section with clear game imagery, studio name, and a primary CTA directing them to learn more about Monster Alchemy
2. **Given** a player is on the Monster Alchemy page, **When** they view the page, **Then** they see game description, features, visual highlights, and a clear CTA (link to game store/download page or wishlist)
3. **Given** a visitor is viewing from a mobile device (375px), **When** they load any page, **Then** all content is readable and CTAs are easily tappable (44x44px minimum)

---

### User Story 2 - Publisher/Journalist Finds Presskit (Priority: P1)

A journalist or publisher needs to write about Team Metacarpo and Monster Alchemy. They visit the Presskit page expecting to find screenshots, logos, and media kits.

**Why this priority**: Revenue and visibility depend on press coverage. Press professionals must be able to find what they need quickly.

**Independent Test**: Can be fully tested by visiting the Presskit page and confirming the integrated dopresskit template displays correctly and is functional.

**Acceptance Scenarios**:

1. **Given** a press contact visits `/en/presskit` or `/es/presskit`, **When** they load the page, **Then** they see the integrated dopresskit template with all media assets available
2. **Given** a user is on the Presskit page, **When** they interact with the dopresskit template, **Then** they can access and download media assets
3. **Given** a user is on any page, **When** they look at the footer, **Then** they see social media links and copyright information

---

### User Story 3 - Reader Explores Studio Story (Priority: P1)

A new visitor wants to learn about Team Metacarpo as a studio—the team, mission, values, and history. They navigate to the About page.

**Why this priority**: Building brand identity and community trust requires authentic storytelling. About page is key trust-building content.

**Independent Test**: Can be fully tested by viewing the About page, reading the studio narrative, and confirming all team/content images load with proper alt text and lazy loading.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the About page, **When** they load `/en/about` or `/es/about`, **Then** they see the studio story, mission statement, team information, and any relevant imagery
2. **Given** the visitor is reading the about content, **When** they view team photos or logos, **Then** all images include descriptive alt text and are properly optimized with lazy loading

---

### User Story 4 - Visitor Contacts Studio (Priority: P2)

A potential collaborator (publisher, media partner, fan) wants to reach out to Team Metacarpo. They use the Contact page to send a message.

**Why this priority**: Contact form enables business inquiries and community engagement. Important but secondary to discovery and press kit access.

**Independent Test**: Can be fully tested by filling out the contact form with valid data, submitting it, and confirming either a success message or email delivery mechanism works.

**Acceptance Scenarios**:

1. **Given** a visitor is on the Contact page (`/en/contact` or `/es/contact`), **When** they load the page, **Then** they see a contact form with fields for name, email, subject, and message
2. **Given** the visitor fills in all required fields with valid data, **When** they submit the form, **Then** the form validates client-side (required fields, valid email format) and either submits successfully or shows clear validation errors
3. **Given** the form is submitted with valid data, **When** the submission completes, **Then** the user sees a success message confirming their message was received

---

### User Story 5 - Blog Reader Finds Latest News (Priority: P2)

A fan or community member wants to read the latest news and updates from Team Metacarpo. They visit the Blog section and browse posts by date or category.

**Why this priority**: Blog drives engagement and SEO, but is secondary to core business goals (game discovery, press outreach).

**Independent Test**: Can be fully tested by visiting the blog index, viewing a post, and confirming posts display with date, author, category, and content correctly.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/en/blog` or `/es/blog`, **When** they load the page, **Then** they see a list of blog posts ordered by date (newest first), with title, date, author, category, and excerpt visible
2. **Given** a user clicks on a blog post, **When** they view the post, **Then** they see the full content with proper formatting, date, author, category, and any embedded images with alt text
3. **Given** the blog has multiple categories, **When** a user filters by category, **Then** they see only posts matching that category

---

### User Story 6 - Language Switching (Priority: P2)

A Spanish speaker visits the site in English but wants to switch to their native language. They need an obvious way to change languages.

**Why this priority**: Language support is critical for a Spanish studio but doesn't block core functionality if temporarily unavailable.

**Independent Test**: Can be fully tested by visiting any page, locating the language switcher, clicking to switch languages, and confirming the page and all navigation update to the target language.

**Acceptance Scenarios**:

1. **Given** a user is viewing the site in English, **When** they look for language options, **Then** they see a language switcher (clearly labeled, e.g., "EN / ES" or a language dropdown)
2. **Given** the user clicks to switch languages, **When** the action completes, **Then** the entire page and navigation update to Spanish, and they remain on the equivalent page in that language
3. **Given** the user sets a language preference, **When** they navigate to other pages, **Then** the site remembers their language choice for the session

---

### Edge Cases

- What happens if an image fails to load? → Alt text displays; page remains readable; layout does not break
- How does the site handle form submission errors (network failure, server issue)? → User sees a clear error message with instructions to retry
- What if a blog post image is missing? → Alt text is displayed; post content is still readable
- How does the site behave when JavaScript is disabled? → Core navigation and content are still accessible; analytics may not track (acceptable per spec)
- What if a user visits `/en/blog` with a URL parameter from an external blog platform? → Site gracefully ignores unknown parameters and displays the blog index

---

## Requirements

### Functional Requirements - Core Pages

**FR-001**: System MUST display a homepage (`/en/` and `/es/`) that includes a hero section with studio branding, game imagery, and a primary CTA directing users to Monster Alchemy or game platforms

**FR-002**: System MUST display an About page (`/en/about` and `/es/about`) with studio story, mission, values, team information, and imagery

**FR-003**: System MUST display a Monster Alchemy game page (`/en/games/monster-alchemy`, `/es/games/monster-alchemy`) with game description, features, visual highlights, and a primary CTA to learn more or purchase

**FR-004**: System MUST display a Presskit page (`/en/presskit`, `/es/presskit`) with integrated dopresskit.com template for media assets and press inquiries (integration method TBD in planning phase)

**FR-005**: System MUST display a Contact page (`/en/contact`, `/es/contact`) with a contact form that includes fields for name, email, subject, and message

**FR-006**: System MUST display a Blog index (`/en/blog`, `/es/blog`) listing all blog posts by date (newest first) with title, date, author, category, and excerpt

**FR-007**: System MUST display individual blog posts with full content, proper formatting, date, author, category, and associated imagery

---

### Functional Requirements - Contact Form

**FR-008**: Contact form MUST validate required fields (name, email, subject, message) on the client side before submission

**FR-009**: Contact form MUST validate email format (basic RFC 5322 validation) and show clear error messages for invalid input

**FR-010**: Contact form MUST have a primary submit button with label "Send Message" or equivalent

**FR-011**: Upon successful submission, the form MUST display a success message confirming the message was received (e.g., "Thank you! Your message has been sent.")

**FR-012**: Contact form submission MUST NOT expose email addresses or API keys in client-side code (no hardcoded endpoints, use progressive enhancement or static form submission)

---

### Functional Requirements - Blog

**FR-013**: Blog posts MUST be stored as markdown files in version control with YAML frontmatter containing: title, date (ISO 8601), author, category, language (en/es), and excerpt

**FR-014**: Blog MUST support filtering by category (e.g., "News", "Development Updates", "Announcements")

**FR-015**: Blog MUST display posts in chronological order (newest first) by default

**FR-016**: Blog posts in different languages MUST be stored in separate files (e.g., `post-title-en.md` and `post-title-es.md`) to allow independent updates and translations

**FR-017**: Blog index MUST show only posts for the current language (e.g., `/en/blog` shows only English posts, `/es/blog` shows only Spanish posts)

---

### Functional Requirements - Multilingual Support

**FR-018**: System MUST support English (`/en/`) and Spanish (`/es/`) as complete language versions

**FR-019**: System MUST use URL-based routing for language selection (e.g., `/en/about`, `/es/about`) rather than subdomains

**FR-020**: Every page MUST include a language switcher that allows switching between English and Spanish while remaining on the equivalent page

**FR-021**: System MUST include hreflang tags in the `<head>` of each page to signal alternate language versions to search engines

**FR-022**: Default language MUST be determined by browser language preference or user selection

---

### Functional Requirements - Analytics

**FR-023**: System MUST include Google Analytics 4 (GA4) tracking on all pages

**FR-024**: GA4 script MUST load asynchronously (async attribute) to avoid blocking page rendering

**FR-025**: GA4 configuration (tracking ID) MUST be stored in an environment variable or config file, never hardcoded in HTML

**FR-026**: GA4 MUST NOT track personally identifiable information (PII) such as email addresses, names, or contact information

**FR-027**: System MUST track page views, user sessions, traffic sources, device types, browser, language, and country-level location

---

### Functional Requirements - Navigation & Structure

**FR-028**: System MUST include a main navigation menu accessible on all pages with links to Home, About, Monster Alchemy, Presskit, Blog, and Contact

**FR-029**: System MUST include a footer on all pages with copyright information, language switcher, social media links (if available), and legal links (if applicable)

**FR-030**: System MUST include breadcrumb navigation or clear page title on pages other than the homepage to help users understand their location

**FR-031**: Navigation MUST be fully keyboard accessible; all links and buttons must be reachable via Tab key

**FR-032**: System MUST have no broken internal or external links; all external links MUST include rel="noopener noreferrer"

---

### Functional Requirements - Design & Visual Identity

**FR-033**: System MUST use dark backgrounds with warm, light, slightly yellowish text (#E8D5B7 or similar warm tone) to reinforce indie game studio aesthetic

**FR-034**: System MUST NOT include decorative blobs, glowing orbs, gradient backgrounds, or icons inside colored circles (per CONSTITUTION.md Identity Over Effects principle)

**FR-035**: All imagery MUST include descriptive alt text and load with lazy loading (loading="lazy")

**FR-036**: System MUST define all design tokens (colors, spacing, typography) as CSS custom properties and use them consistently throughout

**FR-037**: Typography MUST maintain a hierarchy: H1 for page title, H2 for major sections, H3 for subsections, with logical ordering

---

### Functional Requirements - Mobile-First & Responsive Design

**FR-038**: All layouts MUST be designed mobile-first, starting at 375px viewport width

**FR-039**: All interactive elements (buttons, links, form inputs) MUST be at least 44x44px in size to meet touch target accessibility standards

**FR-040**: System MUST NOT use hover-only interactions; all interactive states MUST have a non-hover equivalent (e.g., focus state for keyboard users)

**FR-041**: Images MUST be responsive; use `srcset` and `<picture>` element when appropriate to serve optimized image sizes for different devices

---

### Functional Requirements - Performance

**FR-042**: All pages MUST load with First Contentful Paint (FCP) < 1.5 seconds on typical mobile connections (3G)

**FR-043**: All pages MUST load with Largest Contentful Paint (LCP) < 2.5 seconds on typical mobile connections

**FR-044**: Total uncompressed page size (HTML + CSS + JS) MUST NOT exceed 500KB

**FR-045**: Individual images MUST NOT exceed 200KB without explicit justification (document in code comments)

**FR-046**: No third-party scripts (except GA4) MUST block initial page rendering; scripts MUST load asynchronously or defer loading

---

### Functional Requirements - Security

**FR-047**: All external links MUST include rel="noopener noreferrer" attribute to prevent security vulnerabilities

**FR-048**: NO inline event handlers (onclick, onload, etc.) in HTML; all event listeners MUST be added via JavaScript in separate script files

**FR-049**: NO inline styles in HTML; all styling MUST be in separate CSS files

**FR-050**: NO eval(), document.write(), or dynamic code execution in JavaScript

**FR-051**: Form content (user input) MUST NOT be rendered as innerHTML; use textContent or equivalent safe methods

**FR-052**: Contact form submission MUST be handled securely (no API keys exposed, no email addresses hardcoded in client code)

**FR-053**: Content Security Policy (CSP) header MUST be defined via meta tag; basic policy: `default-src 'self' *.google-analytics.com; script-src 'self' *.google-analytics.com`

**FR-054**: NO credentials (API keys, email addresses, authentication tokens) MUST be present anywhere in the codebase

**FR-055**: All dependencies MUST be pinned to specific versions in lock files (if applicable)

---

### Key Entities

**Page Entity**:
- Represents a distinct URL/route (e.g., home, about, blog post)
- Attributes: URL slug (en/about), language (en/es), title, description (meta), template
- Relationships: Many pages use the same template; pages may have child pages (blog post under blog index)

**Blog Post Entity**:
- Represents a markdown file with frontmatter
- Attributes: slug, title, date (ISO 8601), author, category, language, content (markdown), excerpt
- Relationships: One post per language; multiple posts can share the same category

**Content Section Entity**:
- Represents a reusable content area (hero, feature block, CTA, footer)
- Attributes: section type, content (HTML/markdown), images, links, styling
- Relationships: Sections are composed into pages; same section may appear on multiple pages

**Image Asset Entity**:
- Represents any image used on the site
- Attributes: filename, format (WebP/JPG/PNG), alt text, width, height, file size, lazy loading status
- Relationships: Images belong to pages or content sections; may have multiple formats for responsive delivery

---

## Success Criteria

### Measurable Outcomes

**SC-001**: Site is discoverable and indexable
- Google Search Console shows no indexing errors
- All pages include proper meta descriptions and og:image tags
- Hreflang tags are correctly configured for EN/ES variants

**SC-002**: Page performance meets targets
- First Contentful Paint (FCP) < 1.5s on 3G connection
- Largest Contentful Paint (LCP) < 2.5s on 3G connection
- Total page size < 500KB (uncompressed)

**SC-003**: Mobile usability is excellent
- All pages render correctly at 375px viewport
- All interactive elements (buttons, links, form fields) are 44x44px or larger
- No horizontal scrolling required on mobile

**SC-004**: Accessibility meets WCAG 2.1 Level AA
- All text has 4.5:1 contrast ratio (minimum); UI components have 3:1
- Keyboard navigation works on all interactive elements
- Screen reader testing passes with NVDA or similar tool
- No accessibility issues flagged by automated tools (WAVE, Axe)

**SC-005**: Contact form works reliably
- 100% of valid form submissions are acknowledged (success message displays)
- Form validation prevents submission of invalid data
- Form messages are clear and helpful (no cryptic error codes)

**SC-006**: Blog is functional and organized
- All blog posts display correctly with formatting, images, and metadata
- Category filtering works correctly and shows only relevant posts
- Posts are sortable by date (newest first by default)

**SC-007**: Multilingual experience is seamless
- Language switcher is visible and functional on all pages
- Both EN and ES versions have equivalent content and structure
- Language preference persists across navigation

**SC-008**: Analytics provides actionable insights
- GA4 tracking is working; pageviews are recorded
- No GA errors in browser console
- User behavior data (traffic sources, device types, session duration) is visible in GA dashboard

**SC-009**: Security is robust
- No security issues flagged by browser console (mixed content, CSP violations, etc.)
- External links include rel="noopener noreferrer"
- No credentials or API keys appear in browser DevTools Network tab or Source tab

**SC-010**: Visual identity is consistent
- Color palette (dark backgrounds, warm light text) is used consistently
- No decorative elements that violate CONSTITUTION.md Identity Over Effects principle
- Spacing and typography follow defined CSS custom properties

---

## Assumptions

**Content Availability**:
- All text content (about page, homepage copy, blog posts) will be provided by the team before implementation
- All images, screenshots, and game assets will be prepared and optimized before layout development
- Game links and platforms (e.g., Steam, itch.io, console stores) will be finalized before launch

**External Services**:
- dopresskit.com is the official press kit platform; all press assets are managed there, not on the main site
- Google Analytics 4 is the only third-party analytics service; other tracking tools are out of scope
- Contact form submissions are handled via a static site solution (e.g., Formspree, Netlify Forms) or simple email delivery mechanism

**Technology Stack**:
- Static site generator (Astro, Hugo, or plain HTML/CSS/JS) will be decided in the planning phase
- No backend server, database, or authentication system is required
- All blog content is version-controlled as markdown files

**Browser & Device Support**:
- Modern browsers (Chrome, Firefox, Safari, Edge) from the past 2 years are supported
- Mobile support starts at 375px viewport (iPhone SE, small Android phones)
- Tablet and desktop support extends to 1920px and beyond

**Internationalization**:
- English and Spanish are the only languages supported in v1
- Content is manually translated per language; no automatic translation is used
- Time zones and currency are not localized (country-level location data from GA only)

**Analytics & Privacy**:
- User consent for analytics is handled via cookie banner (if required by local law)
- No personally identifiable information (PII) is collected via GA4
- Privacy policy and terms of service will be defined separately (out of scope for this spec)

**Form Submission**:
- Contact form submissions do not require a backend; form service provider handles email delivery
- Form data is not stored in a database; each submission is sent as an email
- No automated responses beyond a simple success message are expected

**Scope Boundaries**:
- No e-commerce, payment processing, or transaction functionality
- No user accounts, login systems, or authentication
- No comments system or user-generated content beyond contact form
- No heavy animations or visual effects beyond subtle hover states
- Blog comments are out of scope; readers can only contact via contact form

---

## Out of Scope for V1

The following are explicitly NOT part of the initial v1 release:

- **Comments System**: Blog posts do not support comments or user feedback directly
- **E-Commerce**: No in-site game purchases, donations, or merchandise sales
- **Heavy Animations**: No complex animations, transitions, or parallax scrolling
- **Backend Database**: No persistent data storage beyond version-controlled markdown
- **Authentication**: No login, user accounts, or member-only content
- **Multiple Third-Party Analytics**: Only Google Analytics 4 is supported
- **Email Notifications**: Contact form does not send auto-reply emails to users
- **Search Functionality**: No full-text site search (blog filtering by category is supported)
- **CDN/Image Optimization Service**: Images are committed to version control (no separate CDN)
- **Form Builder UI**: Contact form is hard-coded; no drag-and-drop form builder
- **Scheduled Blog Publishing**: Blog posts are published immediately when merged to main
- **Advanced SEO Features**: No sitemap auto-generation (manual sitemap.xml only)
- **A/B Testing**: No multivariate testing framework
- **Multilingual Content Versions**: No automatic translation; each language is independently maintained
- **Mobile App**: This is a website only; no native app is in scope

---

## Design & Visual Identity Requirements

### Color Palette (CSS Custom Properties)

- **Background Primary**: Dark navy or near-black (e.g., `#0a0e1a`)
- **Text Primary**: Warm light tone with yellow/brown undertone (e.g., `#E8D5B7`)
- **Text Secondary**: Slightly dimmed warm tone (e.g., `#c9b499`)
- **Accent**: TBD during design phase (optional, for links or highlights)
- **All colors MUST be defined as CSS custom properties** (e.g., `--color-bg-primary`, `--color-text-primary`)

### Typography

- **Font Stack**: System font stack preferred (e.g., `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif`) to avoid custom font performance overhead
- **Body Text**: 16px minimum on mobile, 18px recommended on desktop
- **Line Height**: 1.5 minimum for readability
- **Letter Spacing**: Default (no custom letter spacing) unless design explicitly requires it
- **Heading Hierarchy**: H1, H2, H3 with clear visual distinction

### Spacing

- **Base Unit**: 8px (define as `--spacing-unit: 8px`)
- **Spacing Scale**: Use multiples of base unit (8px, 16px, 24px, 32px, 48px, 64px, etc.)
- **Safe Area Padding**: 16px minimum on mobile, 24px on desktop
- **All margins and padding MUST use CSS custom properties** (e.g., `--spacing-1`, `--spacing-2`, etc.)

### Imagery & Media

- **All images MUST include**: alt text (descriptive), width attribute, height attribute, loading="lazy"
- **Responsive Images**: Use `srcset` for high-DPI displays and different viewport sizes
- **Image Formats**: Prefer WebP with fallback to JPG/PNG
- **Screenshot/Asset Spacing**: Game screenshots and asset images should have clear context (e.g., captions, surrounding whitespace)

### Layout Principles

- **Mobile-First**: Design starts at 375px, scales upward
- **No Decorative Elements**: No blobs, glowing orbs, gradient backgrounds, or ornamental icons (CONSTITUTION.md rule)
- **Content Over Design**: Content breathes; whitespace is intentional and functional
- **One Primary Action Per View**: Each page has one clear CTA

---

## Implementation Notes

### Static Site Generator Decision

The tech stack (plain HTML/CSS/JS vs. Astro vs. Hugo) will be finalized during the planning phase. The spec is technology-agnostic and should work with any static site generator.

**Key Requirements for Generator**:
- Support for URL-based multilingual routing (`/en/`, `/es/`)
- Markdown with YAML frontmatter for blog posts
- Asset optimization (images, CSS)
- Environment variable support (for GA4 tracking ID)
- CSS custom properties support (native CSS)

### Contact Form Implementation

The contact form will be implemented using one of:
1. Static form service (Formspree, Netlify Forms, Form.io)
2. Simple HTML form with client-side validation (no submission if no backend)
3. Email integration via build-time script

The exact approach will be decided during planning based on hosting platform.

### Blog Post Structure

Example blog post frontmatter:

```yaml
---
title: "Monster Alchemy Early Access Available"
date: 2026-06-15
author: "Team Metacarpo"
category: "Announcements"
language: "en"
excerpt: "Monster Alchemy is now available for early access testing on itch.io. Download today!"
---

[Post content in markdown...]
```

Filenames: `monster-alchemy-early-access-en.md` and `monster-alchemy-early-access-es.md`

### Deployment

The site will be deployed to static hosting (GitHub Pages, Netlify, Vercel, or similar). Deployment platform will be decided during planning.

**Pre-Deployment Checklist**:
- [ ] All links validated (no 404s)
- [ ] All images load correctly
- [ ] Mobile layout tested at 375px
- [ ] Accessibility audit passed
- [ ] GA4 tracking verified
- [ ] Performance metrics met (FCP, LCP, page size)
- [ ] Security headers configured (CSP, etc.)

---

## Content Checklist (Before Implementation)

**MUST BE COMPLETED BEFORE DEVELOPMENT STARTS**:

- [ ] Homepage hero copy and game imagery finalized
- [ ] About page story, team names/descriptions, and team photos provided
- [ ] Monster Alchemy game description, features, screenshots, and cover image finalized
- [ ] Presskit page copy and dopresskit integration plan confirmed
- [ ] Contact form confirmation text decided
- [ ] Blog post (at least 2-3 sample posts in EN and ES) provided with frontmatter
- [ ] Social media links confirmed (or marked as N/A)
- [ ] Color palette hex values finalized (or approved to use defaults)
- [ ] Font selection confirmed
- [ ] All external links (game platforms, social media) finalized
- [ ] Privacy policy and terms of service text (if needed for contact form)

---

## Testing Strategy

### Manual Testing

1. **Desktop (1920px+)**: Load all pages, verify layout, navigation, links, form
2. **Tablet (768px)**: Load all pages, verify responsive behavior
3. **Mobile (375px)**: Load all pages, verify mobile layout, touch targets, readability
4. **Language Switching**: Switch between EN and ES on every page, verify language persistence
5. **Blog**: View blog index, click posts, verify formatting and images
6. **Contact Form**: Submit valid data, invalid data, verify validation and success message
7. **Performance**: Use Lighthouse or WebPageTest to measure FCP, LCP, page size
8. **Security**: Verify no mixed content, CSP headers, rel="noopener noreferrer" on external links
9. **Accessibility**: Test keyboard navigation, screen reader (NVDA), color contrast (WAVE)

### Automated Testing (if applicable)

- HTML validation (W3C Validator)
- CSS validation
- Lighthouse scores (>90 on all metrics)
- WAVE accessibility scan
- Link checker (no 404s)

### Browser/Device Testing

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iPhone SE (375px actual device or emulation)
- Android phone (375px emulation)

---

## Acceptance Criteria for Completion

The site is considered complete and ready for release when:

1. ✅ All pages load without errors and display correctly at 375px, tablet, and desktop
2. ✅ Mobile layout tested and approved at 375px minimum viewport
3. ✅ All external links include rel="noopener noreferrer"
4. ✅ Contact form submits successfully and shows success message
5. ✅ Blog posts display correctly with all frontmatter, images, and formatting
6. ✅ Language switcher works on all pages and persists language preference
7. ✅ GA4 is tracking page views and user behavior (no PII leakage)
8. ✅ WCAG 2.1 Level AA accessibility audit passes
9. ✅ Lighthouse scores: Performance >85, Accessibility >95, Best Practices >95, SEO >95
10. ✅ FCP < 1.5s, LCP < 2.5s, page size < 500KB on 3G connection (measured with real device or accurate emulation)
11. ✅ No console errors or warnings
12. ✅ No hardcoded credentials, API keys, or PII in codebase
13. ✅ All design tokens (colors, spacing, typography) use CSS custom properties
14. ✅ Code follows CONSTITUTION.md standards (no inline styles, no decorative elements, semantic HTML)
15. ✅ Git history is clean; commits are atomic and descriptive
