# Route Contract

## Public Routes

| Route | Purpose | Template | Required Alternate |
| --- | --- | --- | --- |
| `/` | Language selection and progressive redirect | language-index | `/en/`, `/es/` |
| `/en/` | English homepage | home | `/es/` |
| `/es/` | Spanish homepage | home | `/en/` |
| `/en/about` | English studio story | content-page | `/es/about` |
| `/es/about` | Spanish studio story | content-page | `/en/about` |
| `/en/games/monster-alchemy` | English game page | game-page | `/es/games/monster-alchemy` |
| `/es/games/monster-alchemy` | Spanish game page | game-page | `/en/games/monster-alchemy` |
| `/en/presskit` | English presskit page | presskit-page | `/es/presskit` |
| `/es/presskit` | Spanish presskit page | presskit-page | `/en/presskit` |
| `/en/blog` | English blog index | blog-index | `/es/blog` |
| `/es/blog` | Spanish blog index | blog-index | `/en/blog` |
| `/en/blog/[slug]` | English blog post | blog-post | `/es/blog/[translated-slug]` when available |
| `/es/blog/[slug]` | Spanish blog post | blog-post | `/en/blog/[translated-slug]` when available |
| `/en/contact` | English contact page | contact-page | `/es/contact` |
| `/es/contact` | Spanish contact page | contact-page | `/en/contact` |

## Route Requirements

- Every localized route must set `lang` on the root HTML element.
- Every localized route must include canonical and `hreflang` metadata.
- Every page must include shared header navigation and footer.
- Non-home pages must include either breadcrumb navigation or a clear page title.
- Unknown URL parameters must not break blog indexes or other pages.
- Routes must render as static HTML in production output.

## Navigation Requirements

- Header navigation includes Home, About, Monster Alchemy, Presskit, Blog, and Contact.
- Footer includes copyright, language switcher, social links if confirmed, and legal links if applicable.
- Active route state must be visible without relying only on color.
- Mobile navigation must be keyboard accessible and not hover-only.
