# Lo Spazio website — how to use this

Plain HTML, CSS, and JavaScript. No build tools, no account, no
monthly fee. Three files do everything:

- `index.html` — content and structure
- `styles.css` — all colors, fonts, spacing (edit once here, it
  updates everywhere)
- `script.js` — mobile menu, work filters, and the carousels

## ⚠️ One thing that bit us before: folder name case

Your logo currently lives in a folder called `Images` (capital I),
and the code matches that exactly (`Images/logo.png`). GitHub Pages
is case-sensitive, so `Images` and `images` are treated as two
different folders.

For any **new** photos, pick one spelling and use it everywhere —
easiest is to keep using `Images` (capital I) to match what's
already there, so you don't have to remember two different rules.
Whatever you choose, the folder name in GitHub and the file path
typed in `index.html` must match letter-for-letter.

## Adding a post to "The Work"

Each project is one block in `index.html`, inside the section marked
`<!-- THE WORK -->`. Find the comment that says:

```
ADD YOUR NEXT POST HERE
```

Copy one whole block — from `<article class="post" ...>` down to its
matching `</article>` — paste it below the comment, and change four
things:

1. **`data-category`** on the `<article>` tag — this decides which
   filter tab the post shows up under. Use exactly one of:
   - `designs`
   - `interior-executions`
   - `exterior-facade`

2. **The images** — inside `.post__track`, there's one `<img>` line
   per photo. Add or remove `<img>` lines to have anywhere from 2 to
   10 photos; just change the `src` to your file name each time:
   ```html
   <img src="Images/designs/riverside-villa-1.jpg" alt="Riverside Villa, living room">
   <img src="Images/designs/riverside-villa-2.jpg" alt="Riverside Villa, facade">
   ```
   You don't need to touch `script.js` — it counts however many
   images are inside the block and builds the slider, arrows, and
   dots automatically.

3. **Title, tag, description** — in `.post__caption`, update the
   `<h3>`, the small tag line, and the one-line description.

4. **Upload the actual image files** into your `Images` folder (a
   subfolder per post, like `Images/designs/`, keeps things tidy but
   isn't required — a flat folder works too, just keep names unique).

The carousel auto-advances every 5 seconds by default. To change the
speed for one post, edit its `data-autoplay="5000"` (milliseconds —
5000 = 5 seconds).

## Editing "The Materials"

Each brand shows as a logo. Find `<!-- THE MATERIALS -->` in
`index.html`. One brand looks like this:

```html
<span class="brand-logo" data-name="Century Ply">
  <img src="Images/brands/century-ply.png" alt="Century Ply">
</span>
```

To add a brand:
1. Get the logo file from the brand's official website (look for a
   "Media" / "Brand Assets" page, or ask your supplier contact) —
   ideally a transparent PNG or SVG
2. Upload it into `Images/brands/`
3. Copy one `<span class="brand-logo">` block, paste it in the right
   category, point `src` at your new file, and update `data-name`
   and `alt` to the brand's name

`data-name` is a safety net — if the logo file is missing or hasn't
been uploaded yet, the brand's name quietly shows as text instead of
a broken image icon, so nothing looks broken while you're still
collecting logos. Logos display in grayscale and turn full color on
hover — change this under `.brand-logo img` in `styles.css` if you'd
rather they show in color all the time.

To add a whole new category, copy one `.materials__group` block
(heading + `.materials__logos` div) and change its heading.

## The Google Form

Still using the placeholder. To connect your own:
1. Create a form at [forms.google.com](https://forms.google.com)
2. **Send** → the `<>` embed icon → copy the `src="..."` URL
3. In `index.html`, find `PASTE_YOUR_FORM_ID_HERE` and replace that
   whole iframe `src` with the one you copied

Submissions land automatically in the form's **Responses** tab (and
an optional linked Google Sheet) — no extra setup needed.

## WhatsApp, Instagram, email

Already set:
- WhatsApp: `wa.me/918521514363`
- Instagram: `instagram.com/lospazio.design`
- Email: `lospazio.interiors@gmail.com`

Each appears once in `index.html` — search and replace to change a
number or handle.

## Editing on GitHub (recap)

Open any file in the repo on github.com, tap the pencil icon, edit,
commit. Every commit automatically rebuilds and redeploys the live
site — no separate "publish" step. It usually takes well under a
minute; watch the **Actions** tab for a progress indicator if you
want to confirm. Browsers cache aggressively, so if a change doesn't
seem to show up, check in an incognito/private tab before assuming
something's wrong.

## Custom domain (Namecheap)

**On GitHub** — repo → Settings → Pages → "Custom domain" field →
type your bare domain (e.g. `lospazio.design`, not with `www.`) →
Save. This creates a `CNAME` file in the repo automatically.

**On Namecheap** — Domain List → Manage → Advanced DNS → add:

| Type | Host | Value |
|---|---|---|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | lospaziodesign.github.io. |

Remove Namecheap's default "Parking Page" / "URL Redirect" record if
one exists — it'll conflict. DNS changes can take anywhere from 30
minutes to a few hours to take effect. Once GitHub shows a green
checkmark next to your domain in Settings → Pages, turn on
**Enforce HTTPS**.
