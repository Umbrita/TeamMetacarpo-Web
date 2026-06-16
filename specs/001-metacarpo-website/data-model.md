# Data Model: Team Metacarpo Static Website

## Page

Represents a generated URL in one language.

**Fields**:
- `slug`: URL path without leading slash, for example `en/about`
- `language`: `en` or `es`
- `title`: page title used for H1 and metadata
- `description`: meta description
- `template`: layout/template identifier
- `primaryCta`: optional CTA object; at most one primary CTA per page
- `sections`: ordered content section references
- `alternateLanguageSlug`: equivalent route in the other language
- `ogImage`: optional image asset reference

**Validation rules**:
- `slug`, `language`, `title`, `description`, and `template` are required.
- Every non-home page must expose a clear page title or breadcrumb.
- Every page must include `hreflang` alternates for EN/ES.
- External links in page content must include `rel="noopener noreferrer"`.

## Content Section

Represents a reusable content area such as hero, studio story, game feature, visual highlight, contact intro, or footer block.

**Fields**:
- `id`: stable section identifier
- `type`: `hero`, `story`, `feature-list`, `media-gallery`, `cta`, `presskit`, `form`, `footer`, or `blog-list`
- `language`: `en` or `es`
- `heading`: optional section heading
- `body`: real copy in markdown or structured text
- `images`: image asset references
- `links`: zero or more link objects
- `primaryCta`: optional CTA object
- `owner`: person/team responsible for content freshness

**Validation rules**:
- No placeholder copy is allowed.
- At most one primary CTA is allowed per major section.
- Sections requiring imagery must reference real image assets with alt text.

## Blog Post

Represents one markdown file with frontmatter.

**Fields**:
- `slug`: language-specific post slug
- `title`: post title
- `date`: ISO 8601 date
- `author`: display author
- `category`: `News`, `Development Updates`, `Announcements`, or approved equivalent
- `language`: `en` or `es`
- `excerpt`: short summary for indexes
- `coverImage`: optional image asset reference
- `content`: markdown body
- `translationKey`: stable key linking EN/ES versions

**Validation rules**:
- All frontmatter fields except `coverImage` are required.
- Blog indexes only display posts matching the current language.
- Default ordering is newest first.
- Category filtering must not expose posts from the other language.

## Image Asset

Represents committed site imagery.

**Fields**:
- `src`: image path
- `format`: `webp`, `jpg`, `png`, `svg`
- `alt`: descriptive alt text
- `width`: intrinsic width
- `height`: intrinsic height
- `sizeBytes`: optimized file size
- `loading`: `lazy` by default; hero/LCP imagery may be eager when justified
- `srcset`: optional responsive variants

**Validation rules**:
- `alt`, `width`, and `height` are required for all content images.
- Images must be responsive where appropriate.
- No image may exceed 200KB without documented justification.

## Navigation Item

Represents a header/footer route link.

**Fields**:
- `label`: localized link text
- `href`: localized URL
- `language`: `en` or `es`
- `location`: `header`, `footer`, or both
- `external`: boolean

**Validation rules**:
- Header navigation must include Home, About, Monster Alchemy, Presskit, Blog, and Contact.
- Footer must include copyright, language switcher, and confirmed social/legal links.
- External items require `rel="noopener noreferrer"`.

## Contact Submission

Represents the expected payload handled by Web3Forms.

**Fields**:
- `name`: required text
- `email`: required email
- `message`: required text
- `access_key`: hidden Web3Forms public access key value
- `subject`: hidden subject value for email routing/context
- `botcheck`: hidden honeypot field, expected to stay empty
- `language`: hidden `en` or `es`

**Validation rules**:
- Native HTML validation must block missing fields and invalid email format.
- Client enhancement may improve messages but must not be required for basic access.
- The Web3Forms `access_key` must be supplied from project configuration during implementation and treated as the provider-required public form key, not as a secret backend credential.
- User-entered content must never be rendered with `innerHTML`.

## State Transitions

- **Language selection**: unknown or root visitor -> language route selected by browser preference, first-party preference cookie, or explicit switcher -> equivalent localized page.
- **Contact form**: empty -> client invalid -> corrected -> submitting -> success page/message or recoverable error message.
- **Blog filtering**: unfiltered language-specific index -> category selected -> language-specific filtered result -> category cleared.
- **Consent**: unknown -> accepted or declined -> GA4 either loads asynchronously or remains disabled.
