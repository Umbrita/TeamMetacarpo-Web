# Quickstart: Validate the Team Metacarpo Website

## Prerequisites

- Hugo Extended installed.
- Required environment/config values available: GA4 measurement ID for production and the Web3Forms access key.
- Real content and image assets supplied for all required pages.

## Setup

```bash
hugo server
```

Expected result: the local Hugo dev server starts and the site can be opened in a browser.

## Build Validation

```bash
hugo --minify
hugo server --renderToDisk --disableFastRender
```

Expected result: the static production build completes without errors and preview serves generated pages.

## Required Manual Scenarios

1. Open `/en/` and `/es/`.
   - Hero content, studio name, Monster Alchemy imagery, and one primary CTA are visible.
   - No placeholder content appears.

2. Open `/en/about` and `/es/about`.
   - Studio story, mission, values, team content, and imagery display.
   - Images include descriptive alt text, width, height, and lazy loading where appropriate.

3. Open `/en/games/monster-alchemy` and `/es/games/monster-alchemy`.
   - Game description, features, visual highlights, and one primary CTA display.

4. Open `/en/presskit` and `/es/presskit`.
   - dopresskit assets or static/no-script template are reachable.
   - No unapproved third-party script is loaded.

5. Open `/en/blog` and `/es/blog`.
   - Posts are language-specific, newest first, and include title, date, author, category, and excerpt.
   - Category filtering returns only matching posts in the current language.

6. Open an individual blog post in each language.
   - Frontmatter renders correctly and markdown formatting is preserved.
   - Embedded images meet the image asset rules.

7. Open `/en/contact` and `/es/contact`.
   - Required fields and email validation work.
   - Valid submission posts to `https://api.web3forms.com/submit` and displays a success message.
   - Invalid submission shows clear recovery guidance.

8. Use the language switcher on every primary route.
   - The switcher lands on the equivalent page in the target language.
   - Navigation remains localized.

9. Test without JavaScript.
   - Core content, navigation, language links, blog pages, and the contact form remain usable.

## Responsive and Accessibility Checks

- Test viewports: 375px, 768px, 1366px, and 1920px.
- Confirm no horizontal scrolling at 375px.
- Confirm all buttons, links, and inputs meet 44x44px touch target sizing.
- Navigate the whole site with keyboard only.
- Run Axe or WAVE and resolve all WCAG 2.1 AA issues.
- Check text contrast is at least 4.5:1 and UI component contrast is at least 3:1.

## Performance and Security Checks

- Run Lighthouse against production preview.
- Confirm FCP under 1.5s, LCP under 2.5s, and page payload under 500KB.
- Confirm no image exceeds 200KB without documented justification.
- Confirm GA4 loads asynchronously only when configured and consent rules allow it.
- Confirm CSP meta tag is present.
- Confirm all external links include `rel="noopener noreferrer"`.
- Confirm there are no console errors, mixed content warnings, secret credentials, private API keys, or hardcoded recipient email addresses in source or browser DevTools. The Web3Forms `access_key` may be visible because it is required for static form submission.
