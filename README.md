# Oshinaya Damilola — Digital Experience Architect Portfolio

A modern, minimalist, and professional portfolio website showcasing digital products, design work, and engineering expertise. Built with responsive HTML5, CSS3, and vanilla JavaScript.

## ✨ Features

- **Modern Design** - Clean, minimalist aesthetic with dark/light theme support
- **Responsive Layout** - Optimized for mobile, tablet, and desktop devices
- **Case Study Modal** - Interactive project deep-dives with metrics and results
- **Performance Optimized** - Lazy loading, optimized CSS, minimal JavaScript
- **Accessible** - WCAG compliant with proper semantic HTML and ARIA labels
- **Dark Mode** - Built-in theme toggle with localStorage persistence
- **Interactive Elements** - Smooth animations, particle background, custom cursor
- **Contact Integration** - WhatsApp API integration for direct messaging

## 📂 Project Structure

```text
Portfolio/
├── index.html              # Main HTML file with semantic markup
├── styles.css              # All CSS (responsive + dark mode)
├── script-enhanced.js      # Vanilla JavaScript for interactions
├── Assets/                 # Project images and media
│   ├── LA ECOMMERCE.jpg
│   ├── netflix.jpeg
│   ├── ketsu books.jpg
│   ├── organization.jpeg
│   ├── portfolio.jpeg
│   ├── landing.jpeg
│   ├── iPhone-14-Plus-localhost.png
│   └── 2E9A1555.jpg
├── OPTIMIZATION_GUIDE.md   # Image & performance optimization tips
└── README.md               # This file
```

## 🚀 Quick Start

### View Locally

Simply open `index.html` in your browser:

```bash
# Using Python's built-in server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000

# Or using Node.js http-server
npx http-server
```

### Deploy to Netlify

```bash
# Option 1: Drag & drop
# 1. Go to https://app.netlify.com/drop
# 2. Drag the Portfolio folder onto the page
# 3. Done! Your site is live

# Option 2: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+ (full experience with hero case card)
- **Tablet:** 992px - 1199px (stacked layout)
- **Mobile:** 768px - 991px (optimized touch targets)
- **Small Phone:** < 768px (single column, simplified metrics)

## 🎨 Customization

### Update Personal Info

Edit `index.html`:

```html
<!-- Line ~22 -->
<title>Your Name — Your Headline</title>
<meta name="description" content="Your description" />

<!-- Line ~104 -->
<a href="#" class="logo">YOUR<span class="logo-dot"></span></a>

<!-- Update contact links in footer and contact section -->
```

### Change Color Theme

Edit `styles.css` (`:root` section):

```css
:root {
  --primary: #6c63ff; /* Main accent color */
  --secondary: #ff6584; /* Secondary accent */
  --accent: #00d4aa; /* Tertiary accent */
  /* ... other colors ... */
}
```

### Update Projects

Edit `index.html` project cards:

```html
<!-- Add/modify project cards in #projects section -->
<!-- Update project images, links, and descriptions -->
```

### Customize Case Studies

Edit `script-enhanced.js` (caseStudies object):

```javascript
const caseStudies = {
  "your-project-id": {
    title: "Project Title",
    subtitle: "Project Subtitle",
    challenge: "...",
    solution: "...",
    results: ["Result 1", "Result 2"],
    tech: ["Tech 1", "Tech 2"],
    link: "https://your-project.com",
  },
};
```

## 🔧 Key JavaScript Functions

| Function                 | Purpose                              |
| ------------------------ | ------------------------------------ |
| `initPortfolio()`        | Initialize all portfolio features    |
| `initParticles()`        | Particle background animation        |
| `initCustomCursor()`     | Desktop custom cursor (desktop only) |
| `initScrollAnimations()` | Fade-in animations on scroll         |
| `initThemeToggle()`      | Dark/light mode toggle               |
| `initWhatsAppForm()`     | WhatsApp contact form handler        |
| `initCaseStudyModal()`   | Case study modal interactions        |
| `initNavigation()`       | Smooth scroll navigation             |
| `initMobileMenu()`       | Mobile menu toggle                   |

## 🎯 Performance Metrics

### Current Status

- **Lighthouse Performance:** 95+ (before image optimization)
- **Accessibility:** 98/100
- **Best Practices:** 95/100
- **SEO:** 100/100

### After Image Optimization

- Add WebP images for 20-30% size reduction
- Compress JPEGs/PNGs with TinyPNG
- Use CDN for image delivery
- Expected Lighthouse: 98+

See [OPTIMIZATION_GUIDE.md](OPTIMIZATION_GUIDE.md) for detailed optimization steps.

## ♿ Accessibility Features

- ✅ Semantic HTML5 (header, main, section, nav)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus-visible styles (3px outline)
- ✅ Skip-to-content link
- ✅ Color contrast ratios > 4.5:1
- ✅ Images with descriptive alt text
- ✅ Form validation and error messages

## 🌙 Dark/Light Mode

- Automatic theme detection (respects system preference initially)
- Manual toggle via theme button (saved to localStorage)
- Smooth transitions between themes
- Optimized readability in both modes

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security

- No external API keys exposed
- HTTPS recommended for deployment
- Secure WhatsApp API links
- GitHub link points to public repository

## 📞 Contact Methods

- **Email:** [oshinayadamilola3@gmail.com](mailto:oshinayadamilola3@gmail.com)
- **WhatsApp:** +234 802 772 1006
- **LinkedIn:** [Profile Link](https://www.linkedin.com/in/oshinaya-damilola-8b7999259)
- **GitHub:** [Profile Link](https://github.com/Hyoketsu-112)

## 📝 License

© 2024 Oshinaya Damilola. All rights reserved.

Portfolio content and design are proprietary. Third-party libraries are subject to their respective licenses.

## 🤝 Contributing

Have suggestions? Feel free to create an issue or pull request on the GitHub repository.

## 📚 Additional Resources

- [Web Performance Working Group](https://www.w3.org/webperf/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)

---

**Last Updated:** April 29, 2024
**Version:** 1.0 - Modern Minimalist Release
