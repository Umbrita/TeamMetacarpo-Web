# Form Contract

## Contact Form

**Routes**: `/en/contact`, `/es/contact`

**Method**: `POST`

**Action**: `https://api.web3forms.com/submit`

**Handling**: Web3Forms in static HTML.

## Fields

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| `access_key` | hidden | yes | Web3Forms access key from project configuration |
| `name` | text | yes | Non-empty, reasonable max length |
| `email` | email | yes | Native email validation |
| `message` | textarea | yes | Non-empty, reasonable max length |
| `subject` | hidden | yes | Localized fixed subject value |
| `botcheck` | hidden | no | Honeypot, must stay empty |
| `language` | hidden | yes | `en` or `es` |

## Required Markup Shape

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="{{ WEB3FORMS_ACCESS_KEY }}">
  <input type="hidden" name="subject" value="New Team Metacarpo contact form submission">
  <input type="hidden" name="botcheck" value="">

  <label for="contact-name">Name</label>
  <input id="contact-name" name="name" type="text" autocomplete="name" required>

  <label for="contact-email">Email</label>
  <input id="contact-email" name="email" type="email" autocomplete="email" required>

  <label for="contact-message">Message</label>
  <textarea id="contact-message" name="message" required></textarea>

  <button type="submit">Send Message</button>
</form>
```

## Success Behavior

- A valid submission shows a localized success message.
- Success copy must not imply an automated email reply.
- The user can return to the current language homepage or contact page.

## Error Behavior

- Missing or invalid fields show clear localized messages.
- Network or provider errors show retry guidance.
- The page must not lose user-entered content during client-side validation.

## Security Rules

- No secret credentials or recipient email addresses in client-side code.
- The Web3Forms `access_key` is provider-required public form configuration and must be inserted from the project config value supplied by Team Metacarpo.
- No inline event handlers.
- Client-side enhancement must attach listeners from external JS files.
- Submitted user content must never be written to the page with `innerHTML`.
- Form submission must work without custom JavaScript.
