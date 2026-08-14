# Adding your own photos and videos — a complete beginner's guide

You don't need to know how to code to follow this. If you can rename a
file and copy/paste text, you can do everything in this guide.

Every step spells out exactly what to click, what to type, and where.
Nothing is assumed. Take it one section at a time, in order.

---

## Before you start: 5 words you'll see in this guide

- **Screenshot** — a picture of what's on your screen right now.
- **File path** — where a file lives, written like a trail of folders,
  e.g. `assets/work-firstexperts.jpg` means "the file `work-firstexperts.jpg`
  inside the folder called `assets`."
- **Placeholder** — a box in the design that's standing in for a real
  photo or video until you add one. On this site, placeholders look like
  a dashed border with a small icon and grey text inside them.
- **Code editor** — the app you use to open and edit the website's files.
  If you don't already have one, download **VS Code**, it's free:
  https://code.visualstudio.com. Once installed, you can right-click your
  portfolio folder and choose "Open with VS Code," or drag the folder
  onto the VS Code icon.
- **assets folder** — a folder already inside your portfolio folder,
  named `assets`, this is where every image and video for the site lives.
  You never put images anywhere else.

---

## Part 1: How to take a screenshot

Skip to Part 2 if you already know how to do this.

**On a Mac:**
1. Press `Cmd + Shift + 4` all at once.
2. Your cursor turns into a crosshair. Click and drag a box around the
   part of the screen you want.
3. Let go. The screenshot saves to your Desktop automatically, as a
   file named something like `Screenshot 2026-08-13 at 10.42.11.png`.

**On Windows:**
1. Press `Windows key + Shift + S` all at once.
2. Pick "Rectangle" at the top, then click and drag a box around what
   you want.
3. It copies to your clipboard. Open the Paint app (search "Paint" in
   your Start menu), press `Ctrl + V` to paste, then File → Save As, and
   save it somewhere you'll remember, like your Desktop.

**On a phone (to get a mobile-shaped screenshot):**
You don't actually need to use your phone. See Part 3, Step 2, "Getting
tablet and mobile screenshots without owning a tablet."

---

## Part 2: How to shrink a file size before uploading

Big image and video files make your website slow to load. Always shrink
files before putting them in the `assets` folder.

**For images:**
1. Go to https://squoosh.app in your browser, it's free and needs no
   account.
2. Drag your screenshot onto the page.
3. On the right side, it shows you a compressed version. If the file
   size shown (bottom right) is under 300 KB, you're good. If it's
   bigger, drag the "Quality" slider down a little until it is.
4. Click the download button (the one that looks like a downward arrow)
   to save the smaller version.

**For videos:**
1. Go to https://www.freeconvert.com/video-compressor (free, no account
   needed for short clips).
2. Upload your video.
3. Set the target size to "5 MB" if it asks, or just use the default
   settings and click Compress.
4. Download the result.

---

## Part 3: The project screenshots (Home page + Projects page cards)

These are the small preview images that show inside each project card.

### Step 1: Take the screenshot
1. Open the live website of the project (for example,
   firstexpertslogistics.com) in your browser.
2. Make your browser window nice and wide, close any side panels.
3. Take a screenshot of the homepage (see Part 1). Try to capture the
   whole visible page, not just part of it.

### Step 2: Shrink it
Follow Part 2 above. Aim for roughly 1600 pixels wide, Squoosh will show
you the width, if it's much bigger than that, that's fine too, Squoosh
will still shrink the file size.

### Step 3: Rename it EXACTLY like this
This part matters a lot, the website looks for these exact names. Right-
click your saved file → Rename, and type exactly (all lowercase, no
spaces):

| Project | Rename the file to exactly |
|---|---|
| First Experts Logistics | `work-firstexperts.jpg` |
| ShelemJ Resources | `work-shelemj.jpg` |
| Cheliv Compassionate Care | `work-cheliv.jpg` |
| E-Commerce Showcase | `work-ecommerce.jpg` |
| Boardly | `work-boardly.jpg` |
| Stride | `work-stride.jpg` |
| Fernhollow | `work-fernhollow.jpg` |
| Pulse Analytics Dashboard | `work-pulse.jpg` |
| Amani Community Trust | `work-amani.jpg` |

### Step 4: Move it into the assets folder
1. Open your portfolio folder on your computer (the one with `index.html`
   inside it).
2. Open the `assets` folder inside it.
3. Drag your renamed file into that folder.

That's it, no code to touch. The moment a file with that exact name
exists in `assets`, it automatically replaces the color gradient on both
the Home page and the Projects page. Refresh the page in your browser to
see it.

---

## Part 4: Case study pages (the deep-dive page for each project)

Each of your 7 case study pages (under the `projects` folder) has **two**
kinds of placeholder: one big "hero" box near the top, and a row of 3
smaller "Screens" boxes near the bottom.

### Step 1: The big hero box near the top

1. Open the live project site.
2. Take a screenshot of the homepage, wide (Part 1).
3. For **Stride** and **Fernhollow** specifically, instead of a still
   screenshot, record a short screen video instead (see "Recording a
   video" below), these two projects show off best in motion.
4. Shrink it (Part 2).
5. Rename it something simple and unique, e.g. `stride-hero.jpg` (or
   `.mp4` for a video).
6. Drag it into the `assets` folder.
7. Now open the case study file in your code editor. The files are
   inside the `projects` folder:
   - `projects/first-experts-logistics.html`
   - `projects/shelemj-resources.html`
   - `projects/stride.html`
   - `projects/boardly.html`
   - `projects/fernhollow.html`
   - `projects/pulse-analytics.html`
   - `projects/amani-community-trust.html`
8. Once it's open, press `Ctrl + F` (Windows) or `Cmd + F` (Mac) to
   search inside the file, and search for the word **"Hero screenshot"**.
   This jumps you straight to the right spot.
9. You'll see a chunk of code that looks roughly like this (it spans a
   few lines):
   ```html
   <div class="aspect-video w-full rounded-2xl border-2 border-dashed border-white/15 bg-inkraise flex flex-col items-center justify-center gap-3 text-center p-6">
       <i class="fa-solid fa-image text-2xl text-paper/25"></i>
       <p class="font-mono text-[11px] uppercase tracking-widest text-paper/35">Hero screenshot or looping product video of Stride goes here. Drop your file into assets/ and swap this block</p>
     </div>
   ```
10. Select that **entire block**, from the `<div class="aspect-video...`
    at the start to the closing `</div>` right after it, and delete it.
11. Type this in its place instead (for an image):
    ```html
    <img src="../assets/stride-hero.jpg" alt="Stride homepage screenshot" class="w-full rounded-2xl">
    ```
    Or this instead, if you're using a video:
    ```html
    <video autoplay muted loop playsinline class="w-full rounded-2xl">
      <source src="../assets/stride-hero.mp4" type="video/mp4">
    </video>
    ```
12. Change `stride-hero.jpg` (or `.mp4`) to whatever you actually named
    your file in Step 5.
13. Save the file (`Ctrl + S` / `Cmd + S`).

Repeat for each of the 7 case study pages.

### Step 2: The 3 "Screens" boxes (Desktop / Tablet / Mobile)

Each case study page has a row of 3 boxes near the bottom, labeled
Desktop, Tablet, and Mobile. Each one wants a **different shaped** image:

| Box | Shape | How to get it |
|---|---|---|
| Desktop | Wide (16:9) | A normal screenshot of the site in a regular, wide browser window |
| Tablet | Tall-ish (3:4) | See "Getting tablet and mobile screenshots" below |
| Mobile | Very tall (9:19) | See "Getting tablet and mobile screenshots" below |

**Getting tablet and mobile screenshots without owning a tablet:**
1. Open the live project site in **Chrome**.
2. Right-click anywhere on the page and choose **Inspect**.
3. A panel opens. Near the top-left of that panel is a small icon that
   looks like a phone and tablet overlapping (it's called "Toggle
   device toolbar"), click it. You can also press `Ctrl + Shift + M`
   (Windows) or `Cmd + Shift + M` (Mac) instead.
4. At the top of the page, a dropdown appears, click it and choose
   "iPad Air" for the tablet shot, or "iPhone 14 Pro Max" for the
   mobile shot.
5. Right-click on the page itself (inside the simulated phone/tablet
   screen) and choose **Capture screenshot**. It downloads automatically.
6. Repeat, switching the dropdown between iPad and iPhone, so you get
   both.

**Once you have all 3 images (Desktop, Tablet, Mobile):**
1. Shrink each one (Part 2).
2. Rename them something like `stride-desktop.jpg`, `stride-tablet.jpg`,
   `stride-mobile.jpg`.
3. Drag all 3 into the `assets` folder.
4. Open the same case study `.html` file, search (`Ctrl+F` / `Cmd+F`)
   for **"Screens"**, and you'll land on a chunk that repeats 3 times,
   once per box, each one looks like this:
   ```html
   <div class="aspect-video rounded-xl border-2 border-dashed border-white/15 bg-inkraise flex flex-col items-center justify-center gap-2 text-center p-4">
       <i class="fa-solid fa-panorama text-lg text-paper/25"></i>
       <p class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Desktop: drop screenshot here (16:9)</p>
     </div>
   ```
5. For each of the 3, select the whole block (from `<div class=` to the
   closing `</div>`) and replace it with:
   ```html
   <img src="../assets/stride-desktop.jpg" alt="Stride desktop screenshot" class="w-full h-full object-cover rounded-xl">
   ```
   (swap in `stride-tablet.jpg` and `stride-mobile.jpg` for the other two)
6. Save the file.

---

## Part 5: Recording a video (for Stride and Fernhollow's hero spot)

1. **On a Mac:** Press `Cmd + Shift + 5`. A small toolbar appears at the
   bottom of your screen, click "Record Selected Portion," drag a box
   around your browser window, then click Record. Click the stop icon in
   your menu bar (top right) when you're done.
   **On Windows:** Press `Windows key + G` to open the Xbox Game Bar,
   click the round record button. Press `Windows key + Alt + R` to stop.
2. Keep the recording short: scroll through the homepage slowly, click
   one or two things (open a product, add something to a cart, whatever
   the site's main feature is), then stop. Aim for 8–15 seconds total.
3. Trim out any dead time at the start or end. iMovie (Mac) or the
   built-in Clipchamp app (Windows, search for it in your Start menu)
   both do this: import your clip, drag the ends of the timeline in,
   export.
4. Shrink the file (Part 2, video section).
5. Rename it, e.g. `stride-hero.mp4`, and drag it into `assets`.
6. Follow Part 4, Step 1, points 9-13 above, using the `<video>` code
   snippet instead of `<img>`.

---

## Part 6: Testimonial photos or company logos (optional)

The 3 testimonial quotes on the Home page currently have no photo or
logo next to them, just the person's name. This step is optional, and
only do it for clients who've actually said yes to having their photo or
logo used.

1. Ask the client for a square logo (PNG, ideally with a transparent
   background) or a headshot photo.
2. Resize it to 80×80 pixels using Squoosh (Part 2), there's a resize
   option on the left side of the Squoosh screen.
3. Rename it something like `testimonial-firstexperts.png`.
4. Drag it into `assets`.
5. Open `index.html`, search for **"testimonial-card"**, you'll land on
   the first of 3 testimonial blocks. Right after the opening
   `<div class="testimonial-card...">` line, add:
   ```html
   <img src="assets/testimonial-firstexperts.png" alt="First Experts Logistics logo" class="w-14 h-14 rounded-full mx-auto mb-4 object-cover">
   ```
6. Save, and repeat for the other two testimonials if you have their
   photos too.

---

## Quick reference: every file name and size, all in one table

| What | Exact filename pattern | Shape/size |
|---|---|---|
| Project card thumbnail | `work-[project].jpg` | Wide, ~1600px |
| Case study hero (image) | anything you choose | Wide (16:9) |
| Case study hero (video) | anything you choose, `.mp4` | Wide (16:9), 8–15 sec, under 5MB |
| Case study "Desktop" screen | anything you choose | Wide (16:9) |
| Case study "Tablet" screen | anything you choose | Portrait (3:4) |
| Case study "Mobile" screen | anything you choose | Tall portrait (9:19) |
| Testimonial photo/logo | anything you choose | Square, 80×80px |

The only names that MUST match exactly are the `work-[project].jpg`
ones in the table in Part 3, everything else, you choose the name, you
just have to type that same name correctly in the code afterward.

---

## If something goes wrong

- **Image doesn't show up at all:** double-check the filename in your
  code (inside the quotes after `src=`) matches the actual file name in
  `assets` exactly, including capital letters and the file extension
  (`.jpg` vs `.png` vs `.jpeg` are different from each other).
- **Image looks stretched or squished:** that means its shape doesn't
  match the box, go back and re-crop or re-screenshot it closer to the
  shape listed in the table above.
- **You broke something and aren't sure how:** close the file without
  saving, or undo repeatedly with `Ctrl + Z` / `Cmd + Z` until it looks
  right again, then save.
