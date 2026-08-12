# Obioma Chibueze Justice — Portfolio (v4)

A dark, seven-page portfolio built with Tailwind CSS (CDN) and Font Awesome.
No build step, no npm install. Open index.html and it just works.

## Pages
    index.html               Home
    about.html                About
    skills.html                 Skills
    projects.html                 Projects
    experience.html                 Experience
    blog.html                         Blog (listing)
    blog-lab-to-code.html               First blog post, already written
    contact.html                          Contact

## Colors
- ink (#0B0D10)     near-black background
- paper (#F3F1EA)    warm off-white text, and the "white band" background color
- spectro (#33E6C9)   teal accent, the tech/dev side
- assay (#F2A65A)      amber accent, the science/biochem side

---

## THINGS TO FINISH BEFORE THIS GOES LIVE

### 1. Get a Web3Forms key (makes the contact form actually send)
Go to https://web3forms.com, enter your email, and they email you a free
access key immediately, no signup needed. Open contact.html, find:
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
and replace YOUR_ACCESS_KEY_HERE with the key they gave you. That's it,
the form already submits without reloading the page and shows a message
like "Message sent" right on the page.

### 2. Add real screenshots of your live projects (optional but recommended)
Right now the project cards on the Home and Projects pages use a plain
color gradient where a screenshot would go. I can't take screenshots of
external websites myself in this environment, so here's the fastest way
for you to do it:
- Open each live site in your browser
- Use a free tool like https://www.screenshotmachine.com (paste the URL,
  download the image), or just take a screenshot yourself
- Save the image into the assets folder with EXACTLY this filename:
    assets/work-firstexperts.jpg   (First Experts Logistics)
    assets/work-shelemj.jpg        (ShelemJ Resources)
    assets/work-cheliv.jpg         (Cheliv Compassionate Care)
    assets/work-ecommerce.jpg      (E-Commerce Showcase)
- That's it, no code changes needed. The moment that file exists, it
  replaces the gradient automatically on both the Home and Projects pages.

### 3. Real testimonials
The Home page has a testimonial carousel with three placeholder quotes,
clearly marked as placeholders. Open index.html, search for "NOTE FOR
OBIOMA" near the testimonials section, and replace the quote text and
"Client Name — Company / Role" lines once you have real feedback.

### 4. Swap placeholder social links
Facebook, X, and Instagram point to the generic homepages since I don't
have your real handles. Search every HTML file for facebook.com, x.com,
and instagram.com and replace with your real profile URLs. GitHub and
LinkedIn are already wired to your real profiles.

---

## HOW TO UPDATE THIS YOURSELF

This site has no database and no admin panel, it's just HTML files, so
"updating" means editing text directly in the file. Here's exactly how,
for the changes you'll make most often.

### Add a new project
Open projects.html. Find one of the existing <article class="info-card">
blocks (search for "First Experts Logistics" to find one easily), copy
the whole block from `<article` to `</article>`, paste it as a new block
right before the "MORE ON GITHUB" card, and edit:
- the background-image filename (or leave it pointing at a file that
  doesn't exist yet, it'll just show the gradient until you add one)
- the tag text ("Logistics · Live")
- the heading, the paragraph, the tech tags
- the live site link
Then do the same thing in index.html if you want it to also show in the
homepage preview (only the two most recent projects show there).

### Add a new blog post
Copy blog-lab-to-code.html, rename the copy (e.g. blog-my-workflow.html),
open it and replace the title, the "By Obioma..." line stays the same,
and everything inside the `<div class="prose-content">` block, that's the
actual article text. Then open blog.html and change one of the two
"Coming soon" cards to link to your new file instead of being disabled
(copy the structure of the first live card, "From the Lab Bench").

### Add another phone number, email, or social link
Every phone number, email, and social icon appears in a few places, the
Contact page and every page's footer. The fastest way is to open your
code editor's "Find in Files" / "Search across files" feature (VS Code:
Ctrl+Shift+F or Cmd+Shift+F), search for an existing number like
"+2349133058119", and you'll see every place it appears, so you can
follow the same pattern.

### Change any text
Everything is plain English inside the HTML, there's no templating
syntax to learn. Just find the sentence with Ctrl+F / Cmd+F in your
editor and edit it directly.

---

## Run it locally
Double-click index.html, or from inside the folder run:
    python3 -m http.server 5500
then open http://localhost:5500

## Deploy — Git & GitHub
    cd portfolio
    git init
    git add .
    git commit -m "Portfolio v4"
    git branch -M main
    git remote add origin https://github.com/Justixxprime/portfolio.git
    git push -u origin main

## Deploy — Netlify (drag & drop, fastest)
Go to https://app.netlify.com/drop and drag the whole portfolio folder
onto the page. You get a live URL instantly.

## Deploy — Netlify or Vercel via GitHub (auto-redeploys on push)
Push to GitHub first, then import the repo on netlify.com or vercel.com.
Build command: none. Publish/output directory: / (root).

Once you have a real domain, update the canonical/og:url lines in every
page's <head> and the URLs in sitemap.xml from obiomajustice.com to your
actual domain, that's what search engines and social previews will use.

## SEO notes
- robots.txt and sitemap.xml are already in place at the root
- Every page has a unique title, description, and Open Graph tags for
  link previews on WhatsApp, X, LinkedIn, etc.
- index.html includes structured data (JSON-LD) describing you as a
  Person, which can help you show up in richer search results

## Notes on the new interactive bits
- A thin progress bar fills across the top as you scroll
- A small dot-and-ring cursor follows your mouse on desktop (hidden on
  touch devices automatically)
- Cards tilt slightly toward your mouse on hover
- Buttons nudge slightly toward your cursor on hover ("magnetic" effect)
- A back-to-top button appears once you scroll down
- The mobile menu closes if you tap outside it or press Escape, and its
  items fade in one after another when it opens
- All of it respects "prefers reduced motion" if a visitor has that
  turned on, and everything still works (just without the animation) if
  JavaScript is slow, blocked, or unsupported

---

## V5 additions (premium layer)

- **Command palette**: press Ctrl+K (or Cmd+K on Mac) anywhere on the site to
  jump to any page instantly, search-as-you-type, arrow keys + Enter to
  navigate. There's also a small "⌘K" hint button in the desktop nav.
- **Floating WhatsApp button**: bottom-left on every page, pulsing WhatsApp
  green, links straight to your chat.
- **Live local time**: shows current time in Lagos (WAT) in the desktop nav.
- **Preloader**: a brief animated "OCJ." mark on first load before the page
  reveals itself.
- **Spotlight cards**: a soft light follows your cursor inside card borders
  on hover (skill cards, info cards, testimonials).
- **Bento grid**: the Home page skills preview now uses an asymmetric grid
  instead of uniform boxes.
- **Radar charts**: the Skills page now visualizes both skill categories as
  animated spider/radar charts instead of flat progress bars.
- **Stat rings**: the About page counters now have an animated SVG progress
  ring that fills in sync with the counting number.
- **Confetti**: fires when the contact form successfully sends.
- **Full-screen mobile menu**: slides in from the right, larger touch
  targets, closes via the X button, tapping outside, or Escape.
- **Skip-to-content link**: invisible until you press Tab, jumps keyboard
  and screen-reader users straight past the nav.
- All emails and phone numbers now appear in every page's footer, not just
  the Contact page.

All of these check for `prefers-reduced-motion` and disable themselves for
visitors who have that turned on, and none of them can break the page if
JavaScript fails for any reason.

---

## V6 additions

- **Dark/light theme toggle**: a small sun/moon button in the nav. Choice
  is remembered (localStorage), and there's a tiny inline script in every
  page's `<head>` that applies your saved theme before the page paints, so
  there's no flash of the wrong theme on load.
- **Page transitions**: enabled via the native `@view-transition` CSS
  rule. Chrome and Edge (126+) will crossfade smoothly between pages;
  every other browser just does a normal navigation, no downside either way.
- **Custom Open Graph share image**: `assets/og-image.jpg`, a designed
  1200×630 card with your name, title, and accent colors. This is what
  shows up when the site is shared on WhatsApp, LinkedIn, X, etc., instead
  of your headshot being stretched into a link preview.
#   j u s t i x x p r i m e . g i t h u b . i o  
 