# Luma House — Architectural & Spatial Experience

> A Clerkenwell interior architecture studio website designed around light, material, and the quiet intelligence of restraint.

---

## Overview

**Luma House** is an ultra-luxury digital architectural portfolio featuring deep atmospheric obsidian glassmorphism, scroll-driven 3D camera orbits, specular reflection physics, and interactive case studies.

---

## Key Features

### 1. Scroll-Driven 3D Spatial Background
- **240-Frame Photographic Orbit**: Smoothly scrubs a cinematic 3D camera rotation around a luxury sunset villa living room as the user scrolls.
- **Continuous 440vh Multi-Chapter Storytelling**: Seamlessly carries the moving background across:
  - **Chapter 1 (`0° – 120°`)**: *The Horizon Pavilion* floating glass card with interactive 3D perspective tilt.
  - **Chapter 2 (`120° – 240°`)**: *Architectural Impact Metrics Ribbon* (`12+ Years`, `48 Residences`, `100% Light`, `09 Accolades`) floating over panoramic glass windows.
  - **Chapter 3 (`240° – 360°`)**: *Studio Philosophy Pod* floating over dusk terrace shadows before gently dissolving into the portfolio.
- **HUD Scrubber**: Bottom floating HUD pill with real-time degree angle readouts, chapter progress bar, and clickable quick-jump tabs (`01 Orbit`, `02 Scale`, `03 Philosophy`).

### 2. Full Cyclic Portfolio of Built Works
Six dedicated architectural case-study pages connected with complete circular navigation:
- **[The Highgate Residence](projects/highgate-residence.html)** — Victorian Terrace Reimagined (340 sqm)
- **[Bermondsey Loft](projects/bermondsey-loft.html)** — 19th-Century Tannery Warehouse Conversion (210 sqm)
- **[Chiswick Mews](projects/chiswick-mews.html)** — Monolithic Travertine Mews Reconfiguration (185 sqm)
- **[Notting Hill Study](projects/notting-hill-study.html)** — Double-Height American Walnut Library (160 sqm)
- **[Dulwich House](projects/dulwich-house.html)** — Edwardian Residence & Honed Terrazzo Wellness Wing (410 sqm)
- **[Dulwich Garden Extension](projects/dulwich-garden.html)** — Structural Steel & Glass Garden Pavilion (290 sqm)

Each project page features tactile material swatches, architectural specifications, design philosophy, and high-resolution galleries.

### 3. Materiality & Specular Reflection Stage
- **Circadian Lighting Mode**: Real-time interactive switch between `5500K Raking Sun` and `2700K Candle Dusk` that shifts image grading, specular reflection tones, and horizon waterline illumination.
- **Caustic Horizon Line**: Specular waterline with a traveling light-sweep beam and Fresnel gradient falloff.

### 4. Bespoke Architectural Disciplines (Services)
- Interactive 3D glass cards with expandable **"Deliverables & Scope"** drawers detailing RIBA stages, conservation consents, circadian lighting engineering, and bespoke stone/bronze fabrication.

### 5. Architectural Testimonial Suite
- Luxury frosted glass pod with a verified 5-star rating badge, private client monogram rings (`SE`, `MR`, `AG`, `EV`), smooth previous/next arrows, and an animated auto-advancing 6-second progress bar with pause-on-hover.

### 6. Luminescent CTA Capsule & Monolith Footer
- **Dynamic Specular Border**: Animated rotating light gradient border (`conic-gradient`).
- **Interactive Typology Selector**: Pre-select your project scope (*Full Architecture*, *Interior Architecture*, *Heritage Renovation*) to dynamically update consultation links.
- **Live London GMT Clock**: Real-time studio clock with a pulsing green beacon status indicator (`London Studio · GMT · Open`).
- **Private Monograph Request**: Sleek frosted glass email input for digital monograph dispatch.
- **Floating Back-to-Top**: Ambient glass circular button with smooth scrolling.

---

## Project Structure

```
luma-refined/
├── index.html              # Main spatial portfolio page
├── about.html              # Studio philosophy & practice team
├── contact.html            # Private commissions & enquiry form
├── styles.css              # Obsidian glassmorphism stylesheet
├── main.js                 # 3D scrubbing & interactive engine
├── README.md               # Project documentation
├── .gitignore              # Git ignore rules
├── assets/
│   └── frames/
│       └── frames2/        # 240 photographic sequence frames (frame_0000 to frame_0239)
└── projects/
    ├── highgate-residence.html
    ├── bermondsey-loft.html
    ├── chiswick-mews.html
    ├── notting-hill-study.html
    ├── dulwich-house.html
    └── dulwich-garden.html
```

---

## Getting Started

### Local Development
No build step or dependencies required. Simply serve using any static web server:

```bash
# Using Node.js:
npx serve .

# Or using Python 3:
python -m http.server 8000
```

Open `http://localhost:8000` (or the port shown) in any modern browser.

### GitHub Pages Deployment
1. Push repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`.
4. Click **Save** to deploy instantly.

---

## Architecture & Design Tokens

- **Background**: `#000000` (Obsidian Pitch Black)
- **Primary Accent**: `#D4AF37` (Aged Architectural Gold)
- **Glass Panel Surface**: `rgba(12, 11, 15, 0.74)` with `backdrop-filter: blur(28px) saturate(180%)`
- **Typography**: 
  - Headings: *Cormorant Garamond* (Serif)
  - Body & Telemetry: *DM Sans* (Sans-Serif)

---

&copy; 2026 Luma House Studio Ltd. All rights reserved.

