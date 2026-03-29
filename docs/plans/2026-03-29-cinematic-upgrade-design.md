# Enock Portfolio — Cinematic Enhancement Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild Enock Nyakaana's static portfolio with Vite, Three.js particle field, GSAP ScrollTrigger animations, and Lenis smooth scroll — deployed automatically to GitHub Pages via GitHub Actions on every push to main.

**Architecture:** Vite bundles src/ into dist/. A GitHub Actions workflow runs `npm run build` on push to main and deploys dist/ to the gh-pages branch. GitHub Pages serves from gh-pages. All existing content and images are preserved; only the delivery layer changes.

**Tech Stack:** Vite, Three.js, GSAP + ScrollTrigger, Lenis, GitHub Actions (peaceiris/actions-gh-pages)

---

## Architecture

```
enock-portfolio/
├── src/
│   ├── main.js            # entry — wires all modules
│   ├── modules/
│   │   ├── particle-field.js   # from web-studio
│   │   └── scroll-scrubber.js  # from web-studio
│   ├── animations.js      # GSAP ScrollTrigger section reveals
│   ├── lenis.js           # smooth scroll init
│   └── style.css          # full upgraded stylesheet
├── index.html             # rebuilt with same content, new structure
├── assets/images/         # untouched — all existing photos preserved
├── vite.config.js
└── .github/workflows/
    └── deploy.yml         # auto-deploys on push to main
```

## Section-by-Section Visual Spec

### Hero
- Three.js `particle-field` module: hundreds of slow-drifting white particles over `hero-bg.jpg`
- GSAP staggered character-by-character reveal for "Enock Nyakaana" title on load
- Subtitle and CTA fade up after title completes
- Subtle parallax: hero-bg shifts at 0.3x scroll speed as user scrolls down

### About
- Section fades + slides up on scroll entry (GSAP ScrollTrigger `fromTo`)
- Stats (2 nominations, 22, Uganda) count up from 0 when entering viewport
- Profile image has a slow scale-in

### Skills
- Three skill cards stagger in with upward drift, 0.15s delay between each

### Films (horizontal reel)
- Section is pinned using GSAP ScrollTrigger `pin: true`
- Film cards translate from right to left as user scrolls vertically
- Award badges get a gold shimmer pulse animation on hover

### Gallery
- CSS masonry grid (grid-template-rows: masonry or JS fallback)
- Images fade-in stagger on entry (GSAP ScrollTrigger batch)
- Lightbox: GSAP scale(0.8→1) + opacity(0→1) open, reverse on close
- Keyboard (Escape) and click-outside close preserved

### Vision Quote
- Large cinematic quote
- Slow underline line-draw animation on scroll (GSAP scaleX 0→1)

### Navigation
- Frosted glass (backdrop-filter: blur) when scrolled >50px
- Active section highlighting: IntersectionObserver updates active nav link

### Footer
- Copyright year auto-updates via JS

## Deployment

**GitHub Actions workflow** (`.github/workflows/deploy.yml`):
- Trigger: push to `main`
- Steps: checkout → setup Node 20 → npm ci → npm run build → deploy dist/ to gh-pages branch

**One-time repo setting:**
Go to Mystic-Poe/enock-portfolio → Settings → Pages → Source → change from "Deploy from a branch" to **"GitHub Actions"**

## Hosting
GitHub Pages continues to host the site at `https://mystic-poe.github.io/enock-portfolio/` — no cost, no new services needed.
Note: Vite's `base` config must be set to `/enock-portfolio/` for correct asset paths on GitHub Pages subpath.
