# Fashion Model Portfolio — AV Creative

> Personal portfolio website for a fashion model and creative talent, built with React + Vite. Showcases modeling work, brand collaborations, short film projects, and audio-visual editing.

---

## Live Preview

> _Add your deployed URL here (Vercel / Netlify / GitHub Pages)_

---

## Pages

| Page | Description |
|------|-------------|
| Home | Landing hero with editorial highlights and navigation |
| Portfolio | Lookbook stage sets and collaborated works archive |
| Brand Collaborations | GOZEAL campaign — product looks and brand film reel |
| The Creative Portfolio | Talent & modeling series, short film, AV editing work |
| About | Model profile and background |
| Contact | Contact section |

---

## Features

- Responsive single-page layout with smooth scroll reveal animations
- Lightbox viewer for full-resolution editorial images
- Brand collaboration modal with Instagram reel integration
- Audio-visual content grid (Instagram reels, YouTube embed)
- Dual image format support — `.webp` primary, `.jpg` fallback via `<Picture>` component
- Dark/light navbar with active section tracking

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | CSS (custom, no framework) |
| Routing | React single-page (scroll-based) |
| Image Optimization | WebP + JPG fallback via custom Picture component |
| Build Tool | Vite |

---

## Project Structure

```
src/
├── components/       # Reusable UI (Navbar, Footer, Lightbox, ScrollReveal, etc.)
├── data/
│   ├── portfolioData.js   # Lookbook, brand collab, collaborated works data
│   └── creativeData.js    # Editorial series, AV content, film section data
├── hooks/
│   ├── useActiveSection.js   # Active nav section tracker
│   └── useScrollReveal.js    # Scroll-triggered reveal animation
├── pages/            # Page components (Home, Portfolio, About, Contact, etc.)
├── App.jsx
├── main.jsx
└── index.css

public/
└── assets/           # All image assets (editorial, brand, AV content thumbnails)

scripts/
├── crop_assets.py    # Asset cropping utility
└── refine_crops.py   # Crop refinement utility
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/KarrelGustavHanafi/portofolioModels.git
cd portofolioModels

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://127.0.0.1:3000` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Development Notes

- Built as a portfolio project for a fashion model client
- All images are stored locally — no hotlinked or externally hosted assets
- AV content thumbnails are locally exported frames, so nothing expires if external URLs change
- Developed with AI-augmented workflow using **Hermes Agent** (Claude, ChatGPT, DeepSeek, Gemini)

---

## License

This project is for portfolio and client demonstration purposes only. All photography and creative assets belong to their respective owners.
