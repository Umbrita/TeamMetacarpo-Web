# Team Metacarpo Web

Official static website for Team Metacarpo, an indie game studio from Barcelona and creators of Monster Alchemy.

The site follows the Spec Kit workflow. The current feature documents live in `specs/001-metacarpo-website/`:

```text
spec.md       # What the site must do
plan.md       # Architecture and implementation decisions
tasks.md      # Actionable implementation tasks
research.md   # Technical decisions
contracts/    # Route, content, and form contracts
```

## Stack

- Hugo Extended for static generation
- Plain HTML templates, CSS custom properties, and vanilla JavaScript
- Markdown content under `content/en/` and `content/es/`
- Web3Forms for the contact form
- Google Analytics 4, loaded asynchronously after consent

## Local Development

Install Hugo Extended, then run:

```bash
hugo server
```

Create a production build with:

```bash
hugo --minify
```

## Configuration

Set these values before launch:

- `params.ga4MeasurementId` in `config/_default/hugo.toml`
- `params.web3formsAccessKey` in `config/_default/hugo.toml`
- confirmed social links in `config/_default/hugo.toml`
- final Monster Alchemy store or wishlist URL in `config/_default/hugo.toml`

The Web3Forms `access_key` is public form configuration required by Web3Forms. Do not commit recipient email addresses, private API keys, or authentication tokens.

## Validation

Before release, follow `specs/001-metacarpo-website/quickstart.md`:

- Build with `hugo --minify`
- Check `/en/` and `/es/` routes
- Verify Web3Forms POST behavior
- Test mobile at 375px
- Run accessibility, link, performance, and security checks

