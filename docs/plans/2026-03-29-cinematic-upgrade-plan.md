# Enock Portfolio — Cinematic Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild Enock Nyakaana's static portfolio with Vite, Three.js particle-field hero, GSAP ScrollTrigger animations, and Lenis smooth scroll — auto-deployed to GitHub Pages via GitHub Actions on every push to main.

**Architecture:** Vite bundles `src/` into `dist/`. A GitHub Actions workflow deploys `dist/` to `gh-pages` branch on every push to `main`. GitHub Pages serves from `gh-pages`. All images stay in `public/assets/images/` (moved from `assets/`). The same content, fonts, and color palette are preserved — only the delivery layer and animations change.

**Tech Stack:** Vite 5, Three.js, GSAP + ScrollTrigger, Lenis, GitHub Actions (peaceiris/actions-gh-pages@v4)

---

## Context for the Implementer

- **Repo:** `/home/master-po/_code-projects/enock-portfolio/` (already cloned)
- **Current state:** pure static HTML/CSS/JS, no build system
- **Color palette (keep these):** `#0a0a0a` bg, `#d4af37` gold, `#f5f5f5` text, Playfair Display + Inter fonts
- **Images:** 8 gallery photos + `hero-bg.jpg` + `profile-placeholder.jpg` in `assets/images/`
- **Films:** 2 YouTube embeds — Charcoal and Courage + Young Motherhood
- **Live URL:** `https://mystic-poe.github.io/enock-portfolio/` — `base` MUST be `/enock-portfolio/`
- **web-studio modules to copy:** `/home/master-po/_code-projects/web-studio/modules/`
  - `particle-field.js` — `init(scene, options)` → `{points, destroy}`
  - `three-scene.js` — `init(container, options)` → `{scene, camera, renderer, render, destroy}`
  - `scroll-scrubber.js` — `init(container, options)` → `{trigger, tl, destroy}`

---

## Task 1: Vite Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `public/` directory (move existing `assets/` into it)
- Modify: `.gitignore` (add `dist/`, `node_modules/`)

**Step 1: Create `package.json`**

```json
{
  "name": "enock-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.0"
  },
  "dependencies": {
    "three": "^0.169.0",
    "gsap": "^3.12.5",
    "lenis": "^1.1.14"
  }
}
```

**Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/enock-portfolio/',
})
```

**Step 3: Move assets into public/**

```bash
mkdir public
git mv assets public/assets
```

**Step 4: Update `.gitignore`**

Add these lines to `.gitignore` (create the file if it doesn't exist):

```
node_modules/
dist/
```

**Step 5: Install dependencies**

```bash
npm install
```

**Step 6: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite dev server starts at `http://localhost:5173/enock-portfolio/` with no errors. The existing `index.html` renders (images will be broken until Task 5 updates the paths, that's fine).

**Step 7: Commit**

```bash
git add package.json vite.config.js .gitignore public/ && git add -A
git commit -m "feat: add vite build system, move assets to public/"
```

---

## Task 2: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create the workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deploy workflow"
```

> **Note for repo owner:** After this is pushed, go to `github.com/Mystic-Poe/enock-portfolio` → Settings → Pages → Source → change to **"GitHub Actions"**. You only do this once.

---

## Task 3: Copy Web-Studio Modules

**Files:**
- Create: `src/modules/three-scene.js`
- Create: `src/modules/particle-field.js`
- Create: `src/modules/scroll-scrubber.js`

**Step 1: Copy the modules**

```bash
mkdir -p src/modules
cp /home/master-po/_code-projects/web-studio/modules/three-scene.js src/modules/
cp /home/master-po/_code-projects/web-studio/modules/particle-field.js src/modules/
cp /home/master-po/_code-projects/web-studio/modules/scroll-scrubber.js src/modules/
```

**Step 2: Verify files exist**

```bash
ls src/modules/
```

Expected: `particle-field.js  scroll-scrubber.js  three-scene.js`

**Step 3: Commit**

```bash
git add src/modules/
git commit -m "feat: copy three-scene, particle-field, scroll-scrubber from web-studio"
```

---

## Task 4: Rebuilt `src/style.css`

**Files:**
- Create: `src/style.css`

This replaces `css/style.css`. Keep the same palette and fonts. Add: canvas hero overlay, masonry gallery, improved lightbox, frosted glass nav, films horizontal track, vision quote underline.

**Step 1: Create `src/style.css`**

```css
/* ===== CSS Variables ===== */
:root {
  --bg: #0a0a0a;
  --surface: #111111;
  --card: #1a1a1a;
  --gold: #d4af37;
  --gold-light: #e8c547;
  --gold-dark: #b8960c;
  --text: #f5f5f5;
  --text-muted: #a0a0a0;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --ease: 0.3s ease;
  --border: rgba(212, 175, 55, 0.2);
}

/* ===== Reset ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: auto; } /* Lenis handles smooth scroll */
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; transition: var(--ease); }
img { max-width: 100%; height: auto; display: block; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Typography ===== */
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}
.section-title.centered { text-align: center; }
.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
  text-align: center;
}

/* ===== Navigation ===== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  transition: background var(--ease), padding var(--ease), backdrop-filter var(--ease);
}
.navbar.scrolled {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 1rem 5%;
  border-bottom: 1px solid var(--border);
}
.nav-brand {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.05em;
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color var(--ease);
}
.nav-links a:hover,
.nav-links a.active { color: var(--gold); }
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: var(--ease);
}
.nav-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.active span:nth-child(2) { opacity: 0; }
.nav-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ===== Hero ===== */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url('assets/images/hero-bg.jpg') center/cover no-repeat;
}
.hero-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
.hero-canvas canvas {
  width: 100% !important;
  height: 100% !important;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%);
  z-index: 2;
}
.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 20px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  overflow: hidden;
}
.hero-title .char {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
}
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.75rem;
  opacity: 0;
}
.hero-tagline {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  opacity: 0;
}
.btn {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: var(--ease);
  opacity: 0;
}
.btn-primary {
  background: var(--gold);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
}
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.scroll-indicator span {
  display: block;
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, var(--gold));
  margin: 0 auto;
  animation: scrollLine 2s ease infinite;
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ===== About ===== */
.about {
  padding: 7rem 0;
  background: var(--bg);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
}
.about-image {
  position: relative;
}
.about-image img {
  width: 100%;
  border-radius: 2px;
  filter: grayscale(20%);
}
.about-image::after {
  content: '';
  position: absolute;
  inset: -12px -12px 12px 12px;
  border: 1px solid var(--border);
  border-radius: 2px;
  pointer-events: none;
}
.about-text {
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
}
.about-text strong { color: var(--text); }
.about-text em { color: var(--gold); font-style: normal; }
.about-stats {
  display: flex;
  gap: 3rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* ===== Skills ===== */
.skills {
  padding: 7rem 0;
  background: var(--surface);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}
.skill-card {
  background: var(--card);
  border: 1px solid var(--border);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: border-color var(--ease), transform var(--ease);
  opacity: 0;
  transform: translateY(30px);
}
.skill-card:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
}
.skill-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.5rem;
  color: var(--gold);
}
.skill-icon svg { width: 100%; height: 100%; }
.skill-title {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}
.skill-description { color: var(--text-muted); font-size: 0.95rem; }

/* ===== Films (horizontal reel) ===== */
.films {
  height: 100vh;
  overflow: hidden;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.films-header {
  padding: 0 5% 2rem;
  flex-shrink: 0;
}
.films-track {
  display: flex;
  gap: 2rem;
  padding: 0 5%;
  will-change: transform;
  flex-shrink: 0;
}
.film-card {
  flex: 0 0 min(700px, 80vw);
  background: var(--card);
  border: 1px solid var(--border);
  overflow: hidden;
}
.film-video {
  aspect-ratio: 16/9;
  overflow: hidden;
}
.film-video iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.film-info { padding: 1.75rem; }
.film-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--gold);
}
.film-description { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem; }
.film-awards { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.award-badge {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--gold-dark);
  color: var(--gold);
  letter-spacing: 0.05em;
  background: rgba(212, 175, 55, 0.08);
  animation: shimmer 3s ease infinite;
}
@keyframes shimmer {
  0%, 100% { border-color: var(--gold-dark); background: rgba(212,175,55,0.08); }
  50% { border-color: var(--gold); background: rgba(212,175,55,0.18); }
}

/* ===== Gallery ===== */
.gallery { padding: 7rem 0; background: var(--surface); }
.gallery-grid {
  columns: 3;
  column-gap: 1rem;
}
.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
}
.gallery-item img {
  width: 100%;
  transition: transform 0.6s ease;
  display: block;
}
.gallery-item:hover img { transform: scale(1.04); }

/* ===== Lightbox ===== */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.lightbox-overlay img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  transform: scale(0.85);
}
.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: 1px solid rgba(255,255,255,0.3);
  color: var(--text);
  font-size: 1.5rem;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--ease);
}
.lightbox-close:hover { border-color: var(--gold); color: var(--gold); }

/* ===== Vision ===== */
.vision {
  padding: 8rem 0;
  background: var(--bg);
  text-align: center;
}
.vision-quote {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  color: var(--text);
  quotes: none;
  position: relative;
}
.vision-underline {
  display: block;
  width: 80px;
  height: 1px;
  background: var(--gold);
  margin: 0 auto 1.5rem;
  transform: scaleX(0);
  transform-origin: left;
}
.vision-author {
  color: var(--gold);
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* ===== Contact ===== */
.contact { padding: 7rem 0; background: var(--surface); }
.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.contact-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  border: 1px solid var(--border);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: border-color var(--ease), color var(--ease), transform var(--ease);
  background: none;
  cursor: pointer;
  color: var(--text);
}
.contact-link svg { width: 20px; height: 20px; }
.contact-link:hover {
  border-color: var(--gold);
  color: var(--gold);
  transform: translateY(-2px);
}
.email-wrapper { position: relative; }
#emailDropdown {
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--card);
  border: 1px solid var(--border);
  min-width: 160px;
  z-index: 10;
}
#emailDropdown a {
  display: block;
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  transition: color var(--ease), background var(--ease);
}
#emailDropdown a:hover { color: var(--gold); background: rgba(212,175,55,0.06); }

/* ===== Footer ===== */
.footer {
  padding: 2rem 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
  text-align: center;
}
.footer p { color: var(--text-muted); font-size: 0.85rem; }

/* ===== Scroll reveal base state (GSAP overrides) ===== */
.reveal { opacity: 0; transform: translateY(40px); }

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(10,10,10,0.97);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 1.2rem;
  }
  .nav-links.active { display: flex; }
  .about-grid { grid-template-columns: 1fr; gap: 3rem; }
  .skills-grid { grid-template-columns: 1fr; }
  .gallery-grid { columns: 2; }
  .films { height: auto; overflow: visible; }
  .films-track { flex-direction: column; transform: none !important; }
  .film-card { flex: none; width: 100%; }
  .about-stats { gap: 1.5rem; }
}

@media (max-width: 480px) {
  .gallery-grid { columns: 1; }
}
```

**Step 2: Verify no syntax errors**

Open the file and check — no unclosed braces, no missing semicolons.

**Step 3: Commit**

```bash
git add src/style.css
git commit -m "feat: add cinematic stylesheet with canvas overlay, masonry gallery, horizontal films track"
```

---

## Task 5: Rebuilt `index.html`

**Files:**
- Modify: `index.html`

Replace the entire file. Same content, same sections. Key changes:
- `<link rel="stylesheet" href="/src/style.css">` (Vite dev) — wait, use `src/style.css` as a module import in `main.js` instead (Vite standard)
- Add `<script type="module" src="/src/main.js"></script>`
- Add `<div class="hero-canvas" id="hero-canvas">` inside `.hero`
- Add `data-animate` and `data-count` attributes for GSAP hooks
- Add `.vision-underline` span inside vision section
- Update image paths to `assets/images/...` (relative, no leading slash — works with Vite base)
- Remove the old inline `<script>` block (it moves to `src/main.js`)
- Remove `<link rel="stylesheet" href="css/style.css">` (CSS imported in main.js)

**Step 1: Replace `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enock Nyakaana | Filmmaker & Visual Storyteller</title>
  <meta name="description" content="Enock Nyakaana - Ugandan filmmaker and visual storyteller. Director of award-nominated film Charcoal and Courage.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <script type="module" src="/src/main.js"></script>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-brand">EN</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#films">Films</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- Hero -->
  <section class="hero" id="home">
    <div class="hero-canvas" id="hero-canvas"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Enock Nyakaana</h1>
      <p class="hero-subtitle">Filmmaker | Visual Storyteller</p>
      <p class="hero-tagline">Telling authentic African stories that inspire change</p>
      <a href="#films" class="btn btn-primary">View My Work</a>
    </div>
    <div class="scroll-indicator"><span></span></div>
  </section>

  <!-- About -->
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image reveal">
          <img src="assets/images/profile-placeholder.jpg" alt="Enock Nyakaana">
        </div>
        <div class="about-content">
          <h2 class="section-title reveal">About Me</h2>
          <p class="about-text reveal">
            My name is Enock Nyakaana, a passionate filmmaker and visual storyteller. I am currently a second-year student at <strong>Kampala Film School</strong>, pursuing my dream of building a strong career in the film industry.
          </p>
          <p class="about-text reveal">
            I directed <em>Charcoal and Courage</em>, a film that received <strong>nominations at the iKon Awards and the Uganda Film Festival</strong>, a milestone that strengthened my vision of creating impactful stories that reflect society, culture, and resilience.
          </p>
          <p class="about-text reveal">
            I am 22 years old, proudly born and raised in <strong>Uganda</strong>, and deeply inspired by the power of film to shape perspectives, inspire change, and tell authentic African stories.
          </p>
          <div class="about-stats reveal">
            <div class="stat">
              <span class="stat-number" data-count="2">0</span>
              <span class="stat-label">Award Nominations</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="22">0</span>
              <span class="stat-label">Years Old</span>
            </div>
            <div class="stat">
              <span class="stat-number">Uganda</span>
              <span class="stat-label">Based In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title centered reveal">My Skills</h2>
      <p class="section-subtitle reveal">Beyond directing, I have worked on several film and media projects, gaining experience and practical skills in:</p>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15.5 4H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"/>
              <path d="M8.5 2h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
              <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>
            </svg>
          </div>
          <h3 class="skill-title">Editing</h3>
          <p class="skill-description">Skilled in cutting, pacing, and structuring films to bring out emotion and clarity in storytelling.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <h3 class="skill-title">Videography</h3>
          <p class="skill-description">Capturing high-quality visuals that communicate mood, tone, and narrative intention.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <h3 class="skill-title">Photography</h3>
          <p class="skill-description">Framing and documenting moments with creative depth and precision.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Films -->
  <section class="films" id="films">
    <div class="films-header container">
      <h2 class="section-title centered reveal">My Films</h2>
      <p class="section-subtitle reveal">Creating impactful stories that reflect society, culture, and resilience.</p>
    </div>
    <div class="films-track" id="films-track">
      <div class="film-card">
        <div class="film-video">
          <iframe src="https://www.youtube.com/embed/0-XdnvcCV2c" title="Charcoal and Courage"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="film-info">
          <h3 class="film-title">Charcoal and Courage</h3>
          <p class="film-description">A powerful story that received nominations at the iKon Awards and the Uganda Film Festival. This film reflects themes of society, culture, and resilience.</p>
          <div class="film-awards">
            <span class="award-badge">iKon Awards Nominee</span>
            <span class="award-badge">Uganda Film Festival Nominee</span>
          </div>
        </div>
      </div>
      <div class="film-card">
        <div class="film-video">
          <iframe src="https://www.youtube.com/embed/E71-0zRZH-U" title="Young Motherhood"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="film-info">
          <h3 class="film-title">Young Motherhood</h3>
          <p class="film-description">A compelling narrative that showcases the power of storytelling to connect people and inspire change.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section class="gallery" id="gallery">
    <div class="container">
      <h2 class="section-title centered reveal">Photography</h2>
      <p class="section-subtitle reveal">Capturing the beauty of Uganda through my lens.</p>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="assets/images/gallery-1.jpg" alt="Antelope in Ugandan savanna" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-2.jpg" alt="Lioness resting in grass" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-3.jpg" alt="African sunset over savanna" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-4.jpg" alt="Sunset with acacia tree silhouette" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-5.jpg" alt="Road through Ugandan landscape" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-6.jpg" alt="African Darter bird on water" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-7.jpg" alt="Bird perched on branch over water" loading="lazy"></div>
        <div class="gallery-item"><img src="assets/images/gallery-8.jpg" alt="Murchison Falls with rainbow" loading="lazy"></div>
      </div>
    </div>
  </section>

  <!-- Vision -->
  <section class="vision">
    <div class="container">
      <blockquote class="vision-quote reveal">
        "Looking ahead, I aspire to work on diverse projects around the world, collaborating with creatives across cultures to tell stories that connect people globally. My goal is to make films that leave lasting impressions both locally and internationally."
      </blockquote>
      <span class="vision-underline"></span>
      <p class="vision-author reveal">— Enock Nyakaana</p>
    </div>
  </section>

  <!-- Contact -->
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title centered reveal">Get In Touch</h2>
      <p class="section-subtitle reveal">Interested in collaborating or have a project in mind? Let's connect.</p>
      <div class="contact-links reveal">
        <div class="email-wrapper">
          <div id="emailDropdown">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=enowoodinc@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
            <a href="https://outlook.live.com/mail/0/deeplink/compose?to=enowoodinc@gmail.com" target="_blank" rel="noopener noreferrer">Outlook</a>
            <a href="https://compose.mail.yahoo.com/?to=enowoodinc@gmail.com" target="_blank" rel="noopener noreferrer">Yahoo Mail</a>
            <a href="mailto:enowoodinc@gmail.com">Default App</a>
          </div>
          <button class="contact-link" id="emailBtn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Email</span>
          </button>
        </div>
        <a href="https://www.instagram.com/enowood1" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="http://www.youtube.com/channel/UCDcBKnKle4S5sJhroBiopgA" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
          <span>YouTube</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; <span id="year"></span> Enock Nyakaana. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
```

**Step 2: Verify the old CSS and script are removed**

Check: no `<link href="css/style.css">` and no `<script>` block at the bottom.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rebuild index.html with Vite entry, hero canvas, reveal classes, GSAP hooks"
```

---

## Task 6: `src/lenis.js` + `src/main.js` Skeleton + Build Verify

**Files:**
- Create: `src/lenis.js`
- Create: `src/main.js`

**Step 1: Create `src/lenis.js`**

```js
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export function initLenis() {
  const lenis = new Lenis()

  // Keep GSAP ScrollTrigger in sync with Lenis
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return lenis
}
```

**Step 2: Create `src/main.js` skeleton**

```js
import './style.css'
import { initLenis } from './lenis.js'

// ── Init smooth scroll
initLenis()

// ── Footer year
document.getElementById('year').textContent = new Date().getFullYear()

// ── Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  navToggle.classList.toggle('active')
})

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
    navToggle.classList.remove('active')
  })
})

// ── Navbar frosted glass on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50)
})

// ── Email dropdown
const emailBtn = document.getElementById('emailBtn')
const emailDropdown = document.getElementById('emailDropdown')
let dropdownOpen = false

emailBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  dropdownOpen = !dropdownOpen
  emailDropdown.style.display = dropdownOpen ? 'block' : 'none'
})
document.addEventListener('click', (e) => {
  if (!emailBtn.contains(e.target) && !emailDropdown.contains(e.target)) {
    dropdownOpen = false
    emailDropdown.style.display = 'none'
  }
})
emailDropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dropdownOpen = false
    emailDropdown.style.display = 'none'
  })
})

// ── Smooth anchor scroll (Lenis handles smoothness, just prevent default)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
```

**Step 3: Run the build to verify everything compiles**

```bash
npm run build
```

Expected: `dist/` is created with no errors. If there are import errors, check that `src/modules/` files exist and `lenis` is installed.

**Step 4: Verify dev server works**

```bash
npm run dev
```

Open `http://localhost:5173/enock-portfolio/`. The site should render with the CSS applied, no console errors, smooth scroll working.

**Step 5: Commit**

```bash
git add src/lenis.js src/main.js
git commit -m "feat: add lenis smooth scroll, main.js skeleton, footer year, nav interactions"
```

---

## Task 7: `src/animations.js` — GSAP ScrollTrigger

**Files:**
- Create: `src/animations.js`
- Modify: `src/main.js` (add one import line)

**Step 1: Create `src/animations.js`**

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  // ── Hero text: character-by-character reveal
  const titleEl = document.querySelector('.hero-title')
  const text = titleEl.textContent
  titleEl.innerHTML = text.split('').map(char =>
    char === ' ' ? ' ' : `<span class="char">${char}</span>`
  ).join('')

  const tl = gsap.timeline({ delay: 0.3 })
  tl.to('.hero-title .char', {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.03,
    ease: 'power2.out',
  })
  .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
  .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
  .to('.btn-primary', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')

  // ── Section reveals (all .reveal elements)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  // ── Skills cards stagger
  gsap.to('.skill-card', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  // ── Stat counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count)
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val)
          },
        })
      },
      once: true,
    })
  })

  // ── Gallery items stagger fade-in
  gsap.to('.gallery-item', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
    stagger: { each: 0.07, from: 'start' },
    scrollTrigger: {
      trigger: '.gallery-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  // ── Vision quote underline draw
  gsap.to('.vision-underline', {
    scaleX: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.vision',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // ── Nav active section highlight
  const sections = document.querySelectorAll('section[id]')
  const navAnchors = document.querySelectorAll('.nav-links a')

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: () => {
      let current = ''
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute('id')
        }
      })
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
      })
    },
  })
}
```

**Step 2: Add the import to `src/main.js`**

At the top of `src/main.js`, after the existing imports, add:

```js
import { initAnimations } from './animations.js'
```

And at the end of `src/main.js`, after `initLenis()`, add:

```js
initAnimations()
```

**Step 3: Test in dev server**

```bash
npm run dev
```

Scroll through the page. Verify:
- Hero title characters animate in on load ✓
- About section fades up on scroll ✓
- Stats count from 0 to target ✓
- Skill cards stagger in ✓
- Gallery items fade in staggered ✓
- Vision underline draws from left ✓

**Step 4: Commit**

```bash
git add src/animations.js src/main.js
git commit -m "feat: add GSAP ScrollTrigger animations — hero reveal, section reveals, counters, vision underline"
```

---

## Task 8: Hero Three.js Particle Field

**Files:**
- Modify: `src/main.js`

The `particle-field.js` module takes `(scene, options)`. We set up Three.js manually (not via `three-scene.js`) because we need `alpha: true` on the renderer so the canvas is transparent over the hero background image.

**Step 1: Add Three.js setup and particle field to `src/main.js`**

After `initAnimations()` in `src/main.js`, add:

```js
import * as THREE from 'three'
import { init as initParticles } from './modules/particle-field.js'

// ── Hero Three.js particle field
const heroCanvas = document.getElementById('hero-canvas')
const heroWidth = heroCanvas.clientWidth || window.innerWidth
const heroHeight = heroCanvas.clientHeight || window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, heroWidth / heroHeight, 0.1, 100)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
renderer.setSize(heroWidth, heroHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x000000, 0) // fully transparent background
heroCanvas.appendChild(renderer.domElement)

initParticles(scene, {
  count: 600,
  spread: 14,
  color: 0xffffff,
  minSize: 0.8,
  maxSize: 2.5,
})

// Slowly rotate the particle cloud
let particleTime = 0
function animateParticles() {
  requestAnimationFrame(animateParticles)
  particleTime += 0.001
  scene.rotation.y = particleTime * 0.3
  scene.rotation.x = Math.sin(particleTime) * 0.05
  renderer.render(scene, camera)
}
animateParticles()

// Resize handler
window.addEventListener('resize', () => {
  const w = heroCanvas.clientWidth || window.innerWidth
  const h = heroCanvas.clientHeight || window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
})
```

> **Note:** The imports at the top of the file must all be together. Move the `import * as THREE` and `import { init as initParticles }` lines to the top of `src/main.js`, not inline in the function body. JavaScript `import` statements must be at module top level.

**Step 2: Test in dev server**

```bash
npm run dev
```

Open `http://localhost:5173/enock-portfolio/`. The hero should show:
- Background image visible ✓
- White particles slowly drifting/rotating over the image ✓
- Hero content text layered on top ✓

If particles aren't visible: check `z-index` — `.hero-canvas` should be `z-index: 1`, `.hero-content` `z-index: 3`.

**Step 3: Commit**

```bash
git add src/main.js
git commit -m "feat: add Three.js particle field to hero with transparent canvas overlay"
```

---

## Task 9: Films Horizontal Scroll

**Files:**
- Modify: `src/main.js`

The films section is pinned while the user scrolls, and `.films-track` translates horizontally.

**Step 1: Add GSAP horizontal scroll to `src/main.js`**

At the top, add the import (with other imports):

```js
import { ScrollTrigger } from 'gsap/ScrollTrigger'
```

(GSAP is already imported in `animations.js` — but `main.js` also needs it for this. If `gsap` is already imported at top of `main.js`, just add `ScrollTrigger` to that import.)

After `initAnimations()`, add:

```js
// ── Films horizontal scroll (desktop only)
function initFilmsScroll() {
  const filmsSection = document.getElementById('films')
  const filmsTrack = document.getElementById('films-track')
  if (!filmsSection || !filmsTrack) return

  // Only on desktop
  const mm = gsap.matchMedia()
  mm.add('(min-width: 769px)', () => {
    const getScrollAmount = () => -(filmsTrack.scrollWidth - window.innerWidth)

    const filmsTween = gsap.to(filmsTrack, {
      x: getScrollAmount,
      ease: 'none',
      duration: 1,
    })

    ScrollTrigger.create({
      trigger: filmsSection,
      start: 'top top',
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      scrub: 1,
      animation: filmsTween,
      invalidateOnRefresh: true,
    })
  })
}

initFilmsScroll()
```

Also add `import gsap from 'gsap'` to top of `src/main.js` if not already there.

**Step 2: Test in dev server**

Scroll to the Films section. On desktop:
- Section pins in place ✓
- Scrolling vertically moves the film cards horizontally from right to left ✓
- Both film cards are reachable ✓
- On mobile (768px and below): cards stack vertically, no pinning ✓

**Step 3: Commit**

```bash
git add src/main.js
git commit -m "feat: add GSAP pinned horizontal scroll for films section (desktop only)"
```

---

## Task 10: Gallery GSAP Lightbox

**Files:**
- Modify: `src/main.js`

Replace the old inline `document.createElement` lightbox with a GSAP-animated version. Opening: scale(0.85→1) + opacity(0→1). Closing: reverse.

**Step 1: Add GSAP lightbox to `src/main.js`**

```js
// ── Gallery lightbox (GSAP animated)
function initLightbox() {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div')
      overlay.className = 'lightbox-overlay'
      overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <img src="${img.src}" alt="${img.alt}">
      `
      document.body.appendChild(overlay)

      // Animate in
      gsap.to(overlay, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(overlay.querySelector('img'), { scale: 1, duration: 0.4, ease: 'back.out(1.2)' })

      const close = () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => overlay.remove(),
        })
      }

      overlay.querySelector('.lightbox-close').addEventListener('click', close)
      overlay.addEventListener('click', e => { if (e.target === overlay) close() })
    })
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const lightbox = document.querySelector('.lightbox-overlay')
      if (lightbox) {
        gsap.to(lightbox, { opacity: 0, duration: 0.25, onComplete: () => lightbox.remove() })
      }
    }
  })
}

initLightbox()
```

**Step 2: Test in dev server**

Click a gallery image. Verify:
- Overlay fades in ✓
- Image scales up from 0.85 with a slight bounce ✓
- X button closes with fade ✓
- Clicking outside closes ✓
- Escape key closes ✓

**Step 3: Commit**

```bash
git add src/main.js
git commit -m "feat: replace gallery lightbox with GSAP scale+opacity animation"
```

---

## Task 11: Final Build, Push, and Verify Deployment

**Step 1: Run the full build**

```bash
npm run build
```

Expected output:
```
vite build
dist/index.html
dist/assets/...  (JS and CSS bundles)
dist/assets/images/...  (gallery photos)
✓ built in Xs
```

If any errors, fix them before proceeding.

**Step 2: Preview the production build locally**

```bash
npm run preview
```

Open `http://localhost:4173/enock-portfolio/`. Verify the full site works with the production bundle — particles, scroll animations, films scroll, lightbox all functional.

**Step 3: Push to trigger GitHub Actions**

```bash
git push origin main
```

**Step 4: Monitor the Actions run**

Go to `github.com/Mystic-Poe/enock-portfolio` → Actions tab. Watch the "Deploy to GitHub Pages" workflow run.

Expected: green checkmark within ~2 minutes.

If it fails: check the Actions log for the specific error. Common issues:
- `npm ci` fails: check `package-lock.json` is committed
- Build fails: same error as local `npm run build`
- Deploy fails: check the repo has write permissions (the workflow has `permissions: contents: write`)

**Step 5: One-time GitHub Pages setting** (if not done yet)

Go to `github.com/Mystic-Poe/enock-portfolio` → Settings → Pages → Source → change to **"GitHub Actions"** → Save.

The `gh-pages` branch will be created automatically by `peaceiris/actions-gh-pages` on the first successful run.

**Step 6: Verify live site**

Open `https://mystic-poe.github.io/enock-portfolio/`. Verify:
- Hero background image loads ✓
- Particles render ✓
- Scroll animations trigger ✓
- Films horizontal scroll works on desktop ✓
- Gallery + lightbox work ✓
- Mobile layout correct ✓

---

## Summary of All Files Changed

| File | Action |
|------|--------|
| `package.json` | Created |
| `vite.config.js` | Created |
| `.gitignore` | Created/updated |
| `.github/workflows/deploy.yml` | Created |
| `src/style.css` | Created |
| `src/lenis.js` | Created |
| `src/animations.js` | Created |
| `src/main.js` | Created |
| `src/modules/three-scene.js` | Copied |
| `src/modules/particle-field.js` | Copied |
| `src/modules/scroll-scrubber.js` | Copied |
| `index.html` | Rebuilt |
| `public/assets/images/` | Moved from `assets/` |
| `css/style.css` | Now unused (can delete) |
