# Tasks: Team Metacarpo Static Website

**Input**: Design documents from `/specs/001-metacarpo-website/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: The specification requires manual validation, accessibility/performance checks, link checking, and build validation. No TDD-only test-first workflow is required.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently after the shared foundation is complete.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Hugo static site structure and baseline project metadata.

- [ ] T001 Create Hugo project configuration directory and root config in `config/_default/hugo.toml`
- [ ] T002 [P] Create multilingual configuration for English and Spanish in `config/_default/languages.toml`
- [ ] T003 [P] Create shared navigation menu configuration in `config/_default/menus.toml`
- [ ] T004 [P] Create repository ignore rules for Hugo output and local files in `.gitignore`
- [ ] T005 [P] Create static asset directories with placeholder metadata in `static/images/README.md`
- [ ] T006 [P] Create Hugo layout directories with placeholder notes in `layouts/_default/README.md`, `layouts/partials/README.md`, and `layouts/shortcodes/README.md`
- [ ] T007 [P] Create frontend asset directories with placeholder notes in `assets/css/README.md` and `assets/js/README.md`
- [ ] T008 Document Hugo Extended, Web3Forms, GA4, and local run prerequisites in `README.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build shared layouts, metadata, styling, navigation, and security foundations required by all user stories.

**Critical**: No user story work should begin until this phase is complete.

- [ ] T009 Define site-wide parameters for GA4, Web3Forms access key placeholder, social links, and default metadata in `config/_default/hugo.toml`
- [ ] T010 Define English and Spanish language roots, weights, names, and content directories in `config/_default/languages.toml`
- [ ] T011 Define localized header and footer menu entries for Home, About, Monster Alchemy, Presskit, Blog, and Contact in `config/_default/menus.toml`
- [ ] T012 Create the base HTML document layout with `lang`, canonical, `hreflang`, Open Graph metadata, CSP meta tag, and linked assets in `layouts/_default/baseof.html`
- [ ] T013 Create reusable head metadata partial in `layouts/partials/head.html`
- [ ] T014 Create accessible shared header navigation partial with mobile-friendly markup in `layouts/partials/header.html`
- [ ] T015 Create shared footer partial with copyright, language switcher placeholder, social link handling, and legal link handling in `layouts/partials/footer.html`
- [ ] T016 Create image rendering partial with alt text, width, height, lazy loading, and optional responsive sources in `layouts/partials/image.html`
- [ ] T017 Create global CSS custom properties, mobile-first base styles, typography, focus states, and 44x44px control sizing in `assets/css/global.css`
- [ ] T018 Create first-party analytics loader with async GA4 behavior and no PII tracking in `assets/js/analytics.js`
- [ ] T019 Create consent handling script without localStorage/sessionStorage in `assets/js/consent.js`
- [ ] T020 Create root language selection page with no-JavaScript EN/ES links in `layouts/index.html`
- [ ] T021 Create base content templates for regular pages, sections, and markdown rendering in `layouts/_default/single.html`
- [ ] T022 Create list template for section pages and taxonomy pages in `layouts/_default/list.html`
- [ ] T023 Add robots and sitemap static placeholders in `static/robots.txt` and `static/sitemap.xml`

**Checkpoint**: Shared Hugo site foundation can build, render navigation/footer, and serve localized routes.

---

## Phase 3: User Story 1 - Player Discovers Monster Alchemy (Priority: P1) MVP

**Goal**: A player can open the homepage in English or Spanish, understand Team Metacarpo and Monster Alchemy, and follow the primary CTA to the game page.

**Independent Test**: Visit `/en/`, `/es/`, `/en/games/monster-alchemy`, and `/es/games/monster-alchemy`; verify clear studio/game content, game imagery, one primary CTA, readable mobile layout, and tappable controls.

### Implementation for User Story 1

- [ ] T024 [P] [US1] Create English homepage content with hero copy, Monster Alchemy feature, metadata, and primary CTA in `content/en/_index.md`
- [ ] T025 [P] [US1] Create Spanish homepage content with hero copy, Monster Alchemy feature, metadata, and primary CTA in `content/es/_index.md`
- [ ] T026 [P] [US1] Create English Monster Alchemy page content with description, features, visual highlights, metadata, and primary CTA in `content/en/games/monster-alchemy.md`
- [ ] T027 [P] [US1] Create Spanish Monster Alchemy page content with description, features, visual highlights, metadata, and primary CTA in `content/es/games/monster-alchemy.md`
- [ ] T028 [US1] Create homepage layout with hero, featured game section, and one primary CTA in `layouts/index.html`
- [ ] T029 [US1] Create game page layout for Monster Alchemy feature lists, screenshots, captions, and CTA in `layouts/games/single.html`
- [ ] T030 [US1] Add homepage and game page responsive styles without decorative blobs/orbs/gradients in `assets/css/global.css`
- [ ] T031 [P] [US1] Add image manifest guidance for homepage and Monster Alchemy assets in `static/images/game/README.md`
- [ ] T032 [US1] Ensure all game and homepage external CTA links use `rel="noopener noreferrer"` in `layouts/games/single.html`
- [ ] T033 [US1] Validate User Story 1 routes, mobile 375px readability, and CTA behavior using the checklist in `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 1 is fully functional and independently testable.

---

## Phase 4: User Story 2 - Publisher/Journalist Finds Presskit (Priority: P1)

**Goal**: A journalist or publisher can open the Presskit page in English or Spanish and reach dopresskit media assets quickly.

**Independent Test**: Visit `/en/presskit` and `/es/presskit`; verify the presskit page displays the dopresskit static/no-script integration or links, media assets are reachable, footer social/copyright content appears, and no unapproved third-party script is loaded.

### Implementation for User Story 2

- [ ] T034 [P] [US2] Create English Presskit page content with dopresskit copy, asset access instructions, and metadata in `content/en/presskit.md`
- [ ] T035 [P] [US2] Create Spanish Presskit page content with dopresskit copy, asset access instructions, and metadata in `content/es/presskit.md`
- [ ] T036 [US2] Create Presskit layout with static/no-script dopresskit integration and external asset links in `layouts/presskit/single.html`
- [ ] T037 [US2] Add Presskit-specific responsive content styles in `assets/css/global.css`
- [ ] T038 [US2] Add confirmed social media and copyright values to footer configuration in `config/_default/hugo.toml`
- [ ] T039 [US2] Validate Presskit routes, asset links, footer content, and absence of unapproved third-party scripts using `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 2 is fully functional and independently testable.

---

## Phase 5: User Story 3 - Reader Explores Studio Story (Priority: P1)

**Goal**: A visitor can read the Team Metacarpo studio story, mission, values, and team information in English or Spanish.

**Independent Test**: Visit `/en/about` and `/es/about`; verify story content, mission, team information, image alt text, image dimensions, lazy loading, and readable mobile layout.

### Implementation for User Story 3

- [ ] T040 [P] [US3] Create English About page content with studio story, mission, values, team information, and metadata in `content/en/about.md`
- [ ] T041 [P] [US3] Create Spanish About page content with studio story, mission, values, team information, and metadata in `content/es/about.md`
- [ ] T042 [US3] Create About page layout for story sections, team content, and image blocks in `layouts/about/single.html`
- [ ] T043 [US3] Add About page responsive text and image styles in `assets/css/global.css`
- [ ] T044 [P] [US3] Add image manifest guidance for team/studio assets in `static/images/studio/README.md`
- [ ] T045 [US3] Validate About routes, image accessibility, lazy loading, and mobile readability using `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 3 is fully functional and independently testable.

---

## Phase 6: User Story 4 - Visitor Contacts Studio (Priority: P2)

**Goal**: A collaborator, press contact, publisher, or fan can submit a message through the Web3Forms contact form.

**Independent Test**: Visit `/en/contact` and `/es/contact`; verify visible `name`, `email`, and `message` fields, hidden `access_key`, hidden `subject`, hidden `botcheck`, native validation, POST action to Web3Forms, and localized success/error handling.

### Implementation for User Story 4

- [ ] T046 [P] [US4] Create English Contact page content with localized intro, confirmation copy, and metadata in `content/en/contact.md`
- [ ] T047 [P] [US4] Create Spanish Contact page content with localized intro, confirmation copy, and metadata in `content/es/contact.md`
- [ ] T048 [US4] Create Web3Forms contact form partial with POST action, hidden `access_key`, hidden `subject`, hidden `botcheck`, visible `name`, `email`, and `message` fields in `layouts/partials/contact-form.html`
- [ ] T049 [US4] Create Contact page layout that renders localized content and the contact form partial in `layouts/contact/single.html`
- [ ] T050 [US4] Add contact form validation states, error text, focus styles, and mobile touch target styles in `assets/css/global.css`
- [ ] T051 [US4] Add progressive enhancement for localized success/error display without `innerHTML` in `assets/js/contact-form.js`
- [ ] T052 [US4] Add Web3Forms `form-action` CSP support and config references in `layouts/partials/head.html`
- [ ] T053 [US4] Validate Contact routes, required fields, Web3Forms POST behavior, honeypot field, and no secret credential exposure using `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 4 is fully functional and independently testable.

---

## Phase 7: User Story 5 - Blog Reader Finds Latest News (Priority: P2)

**Goal**: A reader can open the blog, see localized posts newest-first, filter by category, and read individual posts with metadata and images.

**Independent Test**: Visit `/en/blog`, `/es/blog`, and at least one post per language; verify date ordering, localized posts only, category filtering, metadata rendering, markdown formatting, and image rules.

### Implementation for User Story 5

- [ ] T054 [P] [US5] Create English blog section index content and metadata in `content/en/blog/_index.md`
- [ ] T055 [P] [US5] Create Spanish blog section index content and metadata in `content/es/blog/_index.md`
- [ ] T056 [P] [US5] Create first English sample blog post with required frontmatter in `content/en/blog/monster-alchemy-early-access.md`
- [ ] T057 [P] [US5] Create first Spanish sample blog post with required frontmatter in `content/es/blog/monster-alchemy-acceso-anticipado.md`
- [ ] T058 [US5] Create blog index layout with newest-first post listing, metadata, excerpts, and category links in `layouts/blog/list.html`
- [ ] T059 [US5] Create blog post layout with title, date, author, category, markdown body, imagery, and language alternate links in `layouts/blog/single.html`
- [ ] T060 [US5] Create category taxonomy layout filtered by current language in `layouts/categories/term.html`
- [ ] T061 [US5] Add blog index, post, and category responsive styles in `assets/css/global.css`
- [ ] T062 [US5] Validate localized blog indexes, post pages, category filtering, metadata, and image rules using `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 5 is fully functional and independently testable.

---

## Phase 8: User Story 6 - Language Switching (Priority: P2)

**Goal**: A visitor can switch between English and Spanish on equivalent pages and keep language navigation coherent across the site.

**Independent Test**: Use the language switcher from every primary page; verify the equivalent localized route loads, navigation labels update, `hreflang` tags are present, and the site works without JavaScript.

### Implementation for User Story 6

- [ ] T063 [US6] Implement language switcher partial with equivalent page links and no-JavaScript fallback in `layouts/partials/language-switcher.html`
- [ ] T064 [US6] Integrate the language switcher into header and footer markup in `layouts/partials/header.html` and `layouts/partials/footer.html`
- [ ] T065 [US6] Add progressive browser-language redirect and session-only language behavior in `assets/js/language.js`
- [ ] T066 [US6] Ensure canonical and `hreflang` metadata are correct for all localized routes in `layouts/partials/head.html`
- [ ] T067 [US6] Validate language switching, localized menus, equivalent routes, and no-JavaScript behavior using `specs/001-metacarpo-website/quickstart.md`

**Checkpoint**: User Story 6 is fully functional and independently testable.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Finish quality, performance, accessibility, security, and deployment readiness across all stories.

- [ ] T068 [P] Run Hugo production build and document the result in `specs/001-metacarpo-website/quickstart.md`
- [ ] T069 [P] Validate all internal and external links and document fixes in `specs/001-metacarpo-website/quickstart.md`
- [ ] T070 [P] Run accessibility audit for keyboard navigation, focus visibility, contrast, and labels and document results in `specs/001-metacarpo-website/quickstart.md`
- [ ] T071 [P] Run Lighthouse performance, accessibility, best practices, and SEO checks and document results in `specs/001-metacarpo-website/quickstart.md`
- [ ] T072 Optimize committed images to meet responsive image and 200KB rules and document exceptions in `static/images/README.md`
- [ ] T073 Verify no decorative blobs, glowing orbs, gradient backgrounds, or icons inside colored circles remain in `assets/css/global.css`
- [ ] T074 Verify no inline styles, inline event handlers, `eval`, `document.write`, or unsafe `innerHTML` usage and document findings in `specs/001-metacarpo-website/checklists/requirements.md`
- [ ] T075 Verify all external links include `rel="noopener noreferrer"` and document findings in `specs/001-metacarpo-website/checklists/requirements.md`
- [ ] T076 Update deployment notes for static hosting, Hugo build command, GA4 config, and Web3Forms config in `README.md`
- [ ] T077 Perform full acceptance checklist review and record any unresolved content gaps in `specs/001-metacarpo-website/checklists/requirements.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 Setup**: No dependencies.
- **Phase 2 Foundational**: Depends on Phase 1 and blocks all user stories.
- **Phase 3 US1**: Depends on Phase 2. This is the suggested MVP slice.
- **Phase 4 US2**: Depends on Phase 2 and can run in parallel with US1/US3 once footer foundations exist.
- **Phase 5 US3**: Depends on Phase 2 and can run in parallel with US1/US2.
- **Phase 6 US4**: Depends on Phase 2 and Web3Forms access key configuration.
- **Phase 7 US5**: Depends on Phase 2 and Hugo taxonomy configuration.
- **Phase 8 US6**: Depends on Phase 2 and benefits from pages created in US1-US5 for full route coverage.
- **Phase 9 Polish**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 Player Discovers Monster Alchemy (P1)**: Independent after foundation; MVP scope.
- **US2 Publisher/Journalist Finds Presskit (P1)**: Independent after foundation; uses shared footer.
- **US3 Reader Explores Studio Story (P1)**: Independent after foundation.
- **US4 Visitor Contacts Studio (P2)**: Independent after foundation; requires Web3Forms access key value.
- **US5 Blog Reader Finds Latest News (P2)**: Independent after foundation; requires sample posts.
- **US6 Language Switching (P2)**: Cross-route feature; can start after foundation but final validation needs all localized pages.

### Within Each User Story

- Localized content files can be created in parallel.
- Layout tasks should follow content contract and route contract.
- CSS integration should happen after related layout markup exists.
- Validation task is last for each story.

---

## Parallel Opportunities

- Setup tasks T002-T007 can run in parallel after T001.
- Foundational partials T013-T016 can run in parallel after T012 is sketched.
- US1 content tasks T024-T027 and image guidance T031 can run in parallel.
- US2 content tasks T034-T035 can run in parallel.
- US3 content/image guidance tasks T040-T041 and T044 can run in parallel.
- US4 localized content tasks T046-T047 can run in parallel before the form partial.
- US5 section/post tasks T054-T057 can run in parallel.
- Polish audit tasks T068-T071 can run in parallel after implementation.

## Parallel Example: User Story 1

```text
Task: "T024 [P] [US1] Create English homepage content with hero copy, Monster Alchemy feature, metadata, and primary CTA in content/en/_index.md"
Task: "T025 [P] [US1] Create Spanish homepage content with hero copy, Monster Alchemy feature, metadata, and primary CTA in content/es/_index.md"
Task: "T026 [P] [US1] Create English Monster Alchemy page content with description, features, visual highlights, metadata, and primary CTA in content/en/games/monster-alchemy.md"
Task: "T027 [P] [US1] Create Spanish Monster Alchemy page content with description, features, visual highlights, metadata, and primary CTA in content/es/games/monster-alchemy.md"
```

## Parallel Example: User Story 5

```text
Task: "T054 [P] [US5] Create English blog section index content and metadata in content/en/blog/_index.md"
Task: "T055 [P] [US5] Create Spanish blog section index content and metadata in content/es/blog/_index.md"
Task: "T056 [P] [US5] Create first English sample blog post with required frontmatter in content/en/blog/monster-alchemy-early-access.md"
Task: "T057 [P] [US5] Create first Spanish sample blog post with required frontmatter in content/es/blog/monster-alchemy-acceso-anticipado.md"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate `/en/`, `/es/`, `/en/games/monster-alchemy`, and `/es/games/monster-alchemy`.
5. Add P1 stories US2 and US3 before broad external sharing.

### Incremental Delivery

1. Setup + Foundational -> buildable bilingual Hugo shell.
2. US1 -> player-facing MVP.
3. US2 + US3 -> press and trust content.
4. US4 -> business inquiry flow through Web3Forms.
5. US5 -> blog/news.
6. US6 -> complete bilingual switching.
7. Polish -> release readiness.

### Validation Gates

- Run `hugo --minify` after each completed user story.
- Validate each story against its independent test before beginning polish.
- Run the complete [quickstart.md](./quickstart.md) checklist before release.
