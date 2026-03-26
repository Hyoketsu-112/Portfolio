# Oshinaya Damilola — Portfolio
### Digital Experience Architect · Lagos, Nigeria

A personal portfolio website built to showcase projects, skills, and contact information. It's a fully self-contained frontend — no framework, no build tools, just HTML, CSS, and JavaScript.

Live at: [your-portfolio-url.netlify.app](https://your-portfolio-url.netlify.app)

---

## What It Does

| Feature | Details |
|---|---|
| Loading screen | Branded intro screen fades out after 1.5s |
| Particle background | Interactive animated particles (repulse on hover, push on click) |
| Custom cursor | Replaced browser cursor on desktop; hidden on mobile |
| Sticky header | Scrolls transparent → solid; highlights active nav section |
| Smooth scroll nav | Click any nav link to glide to that section |
| Scroll animations | Elements fade in as they enter the viewport (IntersectionObserver) |
| Parallax hero | Hero decoration moves at 0.5× scroll speed |
| Dark / Light mode | Theme toggle button; preference saved in localStorage |
| Projects section | Cards with image, tags, live demo link, and optional GitHub link |
| About section | Skills, background, and a downloadable CV |
| Contact form | Fills a pre-formatted WhatsApp message and opens `wa.me` |
| Form auto-fill | Last submitted form data saved and restored from localStorage |
| Floating WhatsApp | Always-visible shortcut to open a WhatsApp chat |
| Back to top | Appears after scrolling 500px, smooth scrolls to top |
| Mobile menu | Hamburger toggle; closes automatically on link click |
| Grid lines | Subtle background grid drawn dynamically by JS |
| Responsive | Fully mobile-friendly across all screen sizes |

---

## Project Structure

```
portfolio/
│
├── index.html            # All page markup — sections, modals, nav, footer
├── styles.css            # All styles — layout, themes, animations, components
├── script-enhanced.js    # All behaviour — particles, cursor, scroll, form, theme
│
└── assets/               # Project screenshots and images
    ├── LA ECOMMERCE.jpg
    ├── netflix.jpeg
    ├── ketsu books.jpg
    └── ...
```

> Everything lives in three files. No npm, no bundler. Open `index.html` in any browser and it works.

---

## How to Run

```bash
# Clone or download
git clone https://github.com/Hyoketsu-112/portfolio.git
cd portfolio

# Option 1 — just open it
open index.html

# Option 2 — local server (recommended, avoids asset path issues)
npx serve .
# or
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Sections Overview

### `#home` — Hero
The landing section with name, tagline, and two CTAs: **Explore Projects** and **Let's Connect**. Decorative circles animate in the background with a parallax scroll effect.

### `#projects` — Projects
A card grid. Each card has an image, badge, title, short description, tech stack tags, and links. To add a new project, copy an existing `project-card` block in `index.html` and update the content. Add the screenshot to the `assets/` folder.

### `#about` — About
Personal background, skill set display, and a download link for the CV. Update the text directly in `index.html`. Replace the CV file path in the download button `href` when the file changes.

### `#contact` — Contact
Two-column layout: contact details + social links on the left, WhatsApp contact form on the right. The form collects Name, Email, Subject, and Message, then opens WhatsApp with everything pre-filled. No email service or backend is involved.

---

## Contact Form — How It Works

1. User fills in the form fields
2. On submit, fields are validated (all required; email format checked; message must be ≥ 10 characters)
3. Form data is saved to `localStorage` as a backup (`lastContactForm`)
4. A formatted message is built and URL-encoded
5. `window.open()` opens `wa.me/2348027721006?text=...` in a new tab
6. WhatsApp opens with the message ready to send — the user just taps Send

To change the WhatsApp number, search for `2348027721006` in both `index.html` and `script-enhanced.js` and replace all instances.

---

## Theme Toggle

Clicking the moon/sun button in the bottom-right corner switches between dark and light mode. The preference is stored in `localStorage` under the key `theme` and applied on every page load. Styles for both themes live in `styles.css` under the `[data-theme="light"]` selector.

---

## localStorage Keys

| Key | What it stores |
|---|---|
| `theme` | `"dark"` or `"light"` — user's last chosen theme |
| `lastContactForm` | Last submitted form data (name, email, subject, message, timestamp) |

---

## Fonts & Icons

- **Inter** — body text (Google Fonts)
- **Space Grotesk** — headings (Google Fonts)
- **Font Awesome 6.4** — all icons (cdnjs CDN)
- **particles.js** — particle background library (CDN or local script)

An internet connection is required for fonts, icons, and particles to render correctly.

> **Note:** If `particlesJS` is not loaded (e.g. no CDN access), the particle background simply won't render — everything else works fine. The `initParticles()` function checks `typeof particlesJS !== 'undefined'` before running.

---

## Adding a Project

1. Open `index.html` and find the `<!-- Projects Section -->` comment
2. Copy any existing `<div class="project-card fade-in">` block
3. Update the `img src`, badge text, title, description, tech tags, and links
4. Drop the screenshot into the `assets/` folder
5. That's it — no JavaScript changes needed

---

## Deploying

The site is static. Any static host works:

- **Netlify** — drag and drop the folder, or connect GitHub repo for auto-deploys
- **GitHub Pages** — push to a `gh-pages` branch or enable Pages on `main`
- **Vercel** — import the repo, set framework to "Other", deploy

---

## Contact

**Oshinaya Damilola**  
📍 Lagos, Nigeria  
📞 +234 802 772 1006  
💬 [WhatsApp](https://wa.me/2348027721006)  
🔗 [LinkedIn](https://www.linkedin.com/in/oshinaya-damilola-8b7999259)  
🐙 [GitHub](https://github.com/Hyoketsu-112)
