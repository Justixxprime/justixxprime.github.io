# Obioma Chibueze Justice — Portfolio (v8)

A dark (and light) portfolio built with Tailwind CSS (CDN) and Font Awesome.
No build step, no npm install. Open index.html and it just works.

If you're adding your own photos or videos, open **MEDIA.md** in this same
folder first, it's a complete, no-jargon walkthrough.

## Pages
    index.html                        Home
    about.html                        About
    skills.html                       Skills
    projects.html                     Projects (with category filter)
    experience.html                   Experience
    blog.html                         Blog (listing)
    blog-lab-to-code.html             Blog post
    blog-first-freelance-client.html  Blog post
    blog-medical-side.html            Blog post
    blog-tailwind-workflow.html       Blog post
    contact.html                      Contact
    404.html                          Not-found page
    projects/first-experts-logistics.html   Case study
    projects/shelemj-resources.html         Case study
    projects/stride.html                    Case study
    projects/boardly.html                   Case study
    projects/fernhollow.html                Case study
    projects/pulse-analytics.html           Case study
    projects/victorious-concept.html        Case study
    projects/teaching-portfolio.html        Case study
    projects/amani-community-trust.html     Case study

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

### 2. Add real screenshots and video (optional but recommended)
Right now the project cards, the case study pages, and the "Screens" rows
all use plain color gradients or dashed boxes where a real screenshot or
video would go. I wrote a full, no-jargon, step-by-step walkthrough for
exactly this in **MEDIA.md**, in this same folder. Open that file next,
it covers every single placeholder on the site and exactly what to do.

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
- the `data-category="..."` attribute on the `<article>` tag itself
  (business / ecommerce / saas / nonprofit), so it shows up correctly
  when someone uses the filter buttons
- the background-image filename (or leave it pointing at a file that
  doesn't exist yet, it'll just show the gradient until you add one)
- the tag text ("Logistics · Live")
- the heading, the paragraph, the tech tags
- the live site link, and, if you write one, a "View case study" link
  pointing at a new file under /projects/ (copy the structure of an
  existing case study page as a starting point)
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
    git commit -m "Portfolio v8"
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

- **Theme switcher (superseded in V7)**: originally a single sun/moon button
  cycling dark/light/auto. See the V7 section below for the current 4-mode
  version.
- **Page transitions**: enabled via the native `@view-transition` CSS
  rule. Chrome and Edge (126+) will crossfade smoothly between pages;
  every other browser just does a normal navigation, no downside either way.
- **Custom Open Graph share image**: `assets/og-image.jpg`, a designed
  1200×630 card with your name, title, and accent colors. This is what
  shows up when the site is shared on WhatsApp, LinkedIn, X, etc., instead
  of your headshot being stretched into a link preview.

---

## V7 additions

### Case studies
Seven dedicated case study pages under `/projects/`, one per real repo
(First Experts Logistics, ShelemJ Resources, Stride, Boardly, Fernhollow,
Pulse Analytics Dashboard, Amani Community Trust). Each follows the same
structure: Challenge → Approach → Design → Development → What I solved →
Result → Screens → Links. Hero media and the three Screens boxes (desktop/
tablet/mobile) are clearly labeled dashed placeholders, replace them with
real screenshots or a short looping video whenever you have them.

### Project filtering
projects.html now has a category filter bar (All / Business / E-commerce /
SaaS / Nonprofit) above the project grid, pure client-side JavaScript, no
page reload. Every `<article>` card has a `data-category` attribute; add
one to any new project card so it participates in the filter.

### Homepage additions
- **Trust strip**: a thin bar right under the hero (4+ Client Deployments ·
  Responsive by Default · Lagos · Worldwide).
- **Services section**: four cards (Business Websites, E-commerce, Landing
  Pages, Web Interfaces) between the trust strip and the white band.

### About page
Added three "mini-cards" (Frontend Development / Scientific Background /
Client Work) under the existing narrative and stat rings.

### Skills page
- Added a categorized "Frontend / Workflow / Professional" badge section
  below the two radar charts.
- Rebuilt both radar charts as a cinematic 3D version: a tilted glass
  panel (`.radar-3d-frame`), a gradient-filled polygon that draws itself
  in on scroll, glowing pulsing vertex nodes, and a very slow ambient
  rotation of the background grid. All of it respects `prefers-reduced-
  motion` (the tilt and animations turn off).

### Typography
Added `.hero-scale` / `.hero-scale-sm` utility classes using CSS
`clamp()` for fluid, punchier headline sizing. Applied to the homepage
hero, the final CTA, and every page's H1 (main pages + case studies).

### Projects reordered
projects.html cards are now ordered by visual impact: Stride → First
Experts Logistics → ShelemJ → Boardly → Fernhollow → Pulse Analytics →
Amani Community Trust → Cheliv Compassionate Care → E-Commerce Showcase.

### Blog put back in the primary nav
Blog was removed from the nav in an earlier pass and is now back, in both
the desktop and mobile menus, on every page (it was still linked in every
footer, but that wasn't discoverable enough).

### Theme switcher, rebuilt as 4 modes
Replaced the old 3-way cycling button with a proper dropdown, in both the
desktop nav and the mobile menu (it was previously desktop-only):
- **Dark** / **Light**: manual, always wins.
- **Auto · Device**: follows the OS/browser's `prefers-color-scheme`; if
  the OS reports no preference at all, falls back to local device time
  (6am–6pm = light).
- **Auto · Location**: asks for one-time geolocation permission, caches
  the coordinates for 24 hours, and computes actual sunrise/sunset for
  that latitude/longitude (a compact solar-declination formula, not a
  network call) to decide light vs dark. Falls back to device time if
  permission is denied or geolocation is unavailable.
Choice is stored in `localStorage.themeMode` (`dark` / `light` / `device`
/ `location`), and the inline anti-flash script in every page's `<head>`
was updated to match, so there's still no flash of the wrong theme on load.

### Light mode contrast fix
Several `text-paper/25`, `text-paper/35`, `text-paper/55`, and
`bg-black/50` utility classes used by newer sections had no light-mode
override, so that text rendered as off-white on the light cream
background and was effectively invisible. Added the missing overrides in
`css/style.css`. If you add new sections later using an opacity variant
not already in that list, check `css/style.css` around
`html[data-theme="light"]` and add the matching override.

### Duplicate WhatsApp button fix
The floating WhatsApp button (bottom-left, always visible) and the
footer's own "Chat on WhatsApp" banner could both be on screen together,
especially on mobile, and read as two WhatsApp icons. The floating
button now fades out automatically whenever the footer's WhatsApp CTA
scrolls into view, and fades back in once it scrolls away.

### Copy cleanup
Removed decorative em dashes ("—" / `&mdash;`) from visible text
throughout the site (footers, case studies, experience page), rewritten
as separate sentences, colons, or parentheses instead.

---

## V8 additions

### Fixed: "NaN" showing instead of numbers on the homepage
The homepage Milestones section (the 4 big numbers: Client Deployments,
Web Projects Shipped, Industries Served, Biochemistry Degree) was reading
a `data-target` attribute, but the counter script in `js/main.js` was
looking for `data-count`. Result: `NaN` instead of the number. Fixed by
renaming the attribute in index.html to `data-count`, matching every
other counter on the site (About page stat rings use the same pattern).
If you ever add another animated number anywhere, use `data-count`, not
`data-target`.

### Fixed: closing the mobile menu could land you back on the homepage
The full-screen mobile menu (`#mobileMenu`) used to live nested inside
`<header id="siteNav">`. The header gets a `backdrop-blur` class added
once you scroll down 40px, and `backdrop-filter` creates what's called a
new "containing block" for anything inside it that's `position: fixed`,
in some browsers that silently repositions a fixed element to be relative
to the header's small box instead of the whole screen. That could make
the menu's close button overlap with the "OCJ." logo link underneath it,
so tapping "close" actually tapped the logo and navigated home. Fixed by
moving `#mobileMenu` out of `<header>` entirely, it's now a sibling
of `<header>`, a direct child of `<body>`, immune to anything the header
does. If you ever add more fixed-position overlays, keep them as direct
children of `<body>` for the same reason.

### Nav bar: more breathing room + entrance animation
- Height: 80px → 96px (`h-20` → `h-24`)
- Horizontal padding: `px-10` → `px-12` on desktop
- Gap between nav links: `gap-7` → `gap-9`
- On page load, the whole bar drops in, and the logo, each nav link, and
  the right-side buttons fade up in a quick stagger (all skipped for
  visitors with `prefers-reduced-motion` on)

### Blog moved from the nav to a homepage section
With Blog gone, the nav now has 5 items (About / Skills / Work /
Experience / Contact) instead of 6, which is part of why it feels less
cramped. In its place, the homepage has a new "From the Blog" section
(3 post cards + an "All posts" link) right before the final CTA. Blog is
still linked in every page's footer either way.

### Removed the "Currently expanding" line from the Skills page
It said "Currently expanding: React & advanced JavaScript" under the web
development radar chart, removed at your request.

### Contact page: phone number now has a country code picker
The old plain `<input type="tel">` is now a proper two-part control: a
searchable country dropdown (23 countries, flag + name + dial code,
Nigeria selected by default) sitting next to a plain number field. Under
the hood, a hidden field combines them (e.g. "+234 913 305 8119") before
the form submits to Web3Forms, so nothing on the backend needed to
change. Styled to match the theme switcher's glass dropdown. To add more
countries later, open `js/main.js`, search for `initCountryCodeSelect`,
and add another `{ name, code, dial, flag }` object to the `countries`
array near the top of that function.

### Science/medical background mentioned more widely
A few short, natural mentions were added outside the About/Skills/
Experience pages, which is where it lived before: a line in the Projects
page intro, and a small one-liner on the 404 page. The goal was
"noticeable across the site," not "repeated everywhere," so it's kept
light.

### Screens placeholders now match real device shapes
On every case study page, the three "Screens" boxes (Desktop / Tablet /
Mobile) used to all be the exact same shape, which didn't match what a
real screenshot of each device looks like. Fixed:
- Desktop: 16:9 (landscape, matches a real browser window)
- Tablet: 3:4 (portrait, matches an iPad screenshot)
- Mobile: 9:19 (tall portrait, matches a modern phone screenshot)
See **MEDIA.md** for exactly how to capture and drop in images at each
of these sizes.
