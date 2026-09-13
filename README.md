# Lo Spazio website — how to use this

This is plain HTML, CSS, and JavaScript. No build tools, no account,
no monthly fee. Three files do everything:

- `index.html` — the content and structure
- `styles.css` — all colors, fonts, spacing (change a color once here,
  it updates everywhere)
- `script.js` — the mobile menu and the project lightbox popup

Your logo is already wired in at `images/logo.png`.

## 1. Add your photos and videos

Put image files inside the `images/` folder, then point to them by
filename in `index.html`:

```html
<img src="images/project-1.jpg" alt="RamkyOne North renovation">
```

To add a **video** instead of a photo on any project card, replace the
`<img>` line with:

```html
<video src="images/your-video.mp4" autoplay muted loop playsinline></video>
```

Until you add real photos, empty sections will show a small grey note
telling you exactly which file is missing — that's expected, not a bug.

## 2. Add a new project to "The Work"

In `index.html`, find the comment that says:

```
ADD YOUR NEXT PROJECT HERE
```

Copy one whole `<article class="work__item">...</article>` block,
paste it in, and change:
- `data-title`, `data-tag`, `data-desc` (shown in the popup)
- the image filename
- the visible title/tag text just below the image

Add `work__item--large` to the class list to make a card span two
columns.

## 3. Connect the Google Form

Right now the contact section embeds a placeholder form. To use your
own:

1. Create a form at [forms.google.com](https://forms.google.com)
2. Click **Send** → the `<>` embed icon → copy the `src="..."` URL
3. In `index.html`, find `PASTE_YOUR_FORM_ID_HERE` and replace that
   whole iframe `src` with the one you copied

Every submission lands automatically in that form's **Responses**
tab (and an optional linked Google Sheet) — no extra setup.

## 4. WhatsApp, Instagram, email

These are already set from what you gave me:
- WhatsApp: `wa.me/918521514363`
- Instagram: `instagram.com/lospazio.design`
- Email: `lospazio.interiors@gmail.com`

To change a number or handle, search for it in `index.html` and
replace it — each appears once.

## 5. Hosting (free, and you can keep editing after)

Any of these work well for a small static site and all support a
custom domain you buy separately:

**GitHub Pages** (recommended if you want to keep editing easily)
1. Create a free GitHub account, make a new repository
2. Upload this whole folder to it
3. In the repo's Settings → Pages, turn on Pages for the main branch
4. Your site is live at `yourname.github.io/repo-name`
5. To edit later: click any file in the repo on github.com, hit the
   pencil icon, edit right in the browser, commit — live in ~a
   minute. No install needed.
6. Add your bought domain in the same Pages settings screen
   ("Custom domain") and point your domain's DNS to GitHub as their
   docs describe.

**Netlify** (drag-and-drop, fastest to launch)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this folder in — it's live in seconds
3. To edit afterward, easiest path is connecting the same folder as a
   GitHub repo (Netlify auto-redeploys on every save)
4. Add your custom domain in Site settings → Domain management

**Cloudflare Pages** — same idea as Netlify, also free, also plays
well with GitHub for easy re-edits.

Any of the three is fine. If you think you'll edit the site often,
GitHub Pages or Netlify-via-GitHub is the smoothest, since editing a
file in your browser and hitting "commit" is the entire deploy
process.

## 6. Testing on your own computer first

Before uploading anywhere, you can open `index.html` directly in a
browser to preview it. Some things (like the Google Form iframe) only
work once it's uploaded live, so don't worry if that part looks
empty locally.
