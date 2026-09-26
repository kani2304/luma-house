# Luma House — Architectural & Spatial Experience

> A Clerkenwell interior architecture studio website designed around light, material, and the quiet intelligence of restraint.

## ✦ Live Experience

**Luma House is deployed and available online:**

### [Visit Luma House →](https://luma-house.vercel.app/)

**Live URL:** `https://luma-house.vercel.app/`

The production deployment is hosted on **Vercel**, providing a fast, globally accessible version of the complete Luma House architectural portfolio.

The live experience includes the full scroll-driven spatial narrative, interactive glassmorphism interface, cinematic 3D camera orbit, architectural case studies, lighting modes, material interactions, testimonials, and consultation experience.

---

## Overview

**Luma House** is an ultra-luxury digital architectural portfolio designed as a spatial experience rather than a conventional portfolio website.

The interface combines deep atmospheric obsidian glassmorphism, cinematic photography, scroll-driven 3D camera movement, specular lighting effects, tactile material interactions, and interactive architectural case studies.

The visual language is inspired by contemporary London interior architecture — restrained, material-led, atmospheric, and highly editorial.

---

## Key Features

### 1. Scroll-Driven 3D Spatial Background

* **240-Frame Photographic Orbit** — Smoothly scrubs a cinematic 3D camera rotation around a luxury sunset villa living room as the user scrolls.
* **Continuous 440vh Multi-Chapter Storytelling** — The background evolves continuously through three narrative chapters:

#### Chapter 01 — The Horizon Pavilion

**0° – 120°**

A floating architectural glass card introduces the studio's flagship spatial concept with an interactive 3D perspective tilt.

#### Chapter 02 — Architectural Impact

**120° – 240°**

A panoramic metrics ribbon presents key studio statistics:

* `12+ Years`
* `48 Residences`
* `100% Light`
* `09 Accolades`

#### Chapter 03 — Studio Philosophy

**240° – 360°**

The final spatial chapter introduces the studio philosophy over atmospheric dusk terrace shadows before transitioning into the project portfolio.

### HUD Scrubber

A floating HUD interface provides:

* Real-time camera angle readout
* Chapter progress indicator
* Interactive navigation
* Quick-jump controls:

  * `01 Orbit`
  * `02 Scale`
  * `03 Philosophy`

---

## 2. Full Cyclic Portfolio of Built Works

Luma House features six dedicated architectural case-study pages connected through a circular project navigation system.

| Project                      | Description                                        |    Area |
| ---------------------------- | -------------------------------------------------- | ------: |
| **The Highgate Residence**   | Victorian Terrace Reimagined                       | 340 sqm |
| **Bermondsey Loft**          | 19th-Century Tannery Warehouse Conversion          | 210 sqm |
| **Chiswick Mews**            | Monolithic Travertine Mews Reconfiguration         | 185 sqm |
| **Notting Hill Study**       | Double-Height American Walnut Library              | 160 sqm |
| **Dulwich House**            | Edwardian Residence & Honed Terrazzo Wellness Wing | 410 sqm |
| **Dulwich Garden Extension** | Structural Steel & Glass Garden Pavilion           | 290 sqm |

Each project page contains:

* Architectural specifications
* Design philosophy
* Material palettes
* Interactive material swatches
* High-resolution galleries
* Project-specific spatial storytelling

---

## 3. Materiality & Specular Reflection Stage

The visual system treats light as an architectural material.

### Circadian Lighting Mode

Users can switch between two lighting environments:

* **5500K — Raking Sun**
* **2700K — Candle Dusk**

The lighting system dynamically changes:

* Image grading
* Specular reflection tones
* Glass atmosphere
* Horizon illumination
* Overall spatial mood

### Caustic Horizon Line

A subtle animated horizon treatment creates a specular waterline with:

* Traveling light-sweep animation
* Fresnel-style gradient falloff
* Atmospheric illumination

---

## 4. Bespoke Architectural Disciplines

Interactive 3D glass service cards allow visitors to explore the studio's disciplines.

Each service card contains an expandable **Deliverables & Scope** drawer covering areas such as:

* RIBA project stages
* Conservation consent
* Circadian lighting engineering
* Bespoke stone fabrication
* Bronze fabrication
* Interior architecture
* Spatial detailing

---

## 5. Architectural Testimonial Suite

A frosted-glass testimonial experience includes:

* Verified 5-star rating badge
* Private client monogram rings
* `SE`
* `MR`
* `AG`
* `EV`
* Previous / next navigation
* Automatic testimonial rotation
* 6-second animated progress indicator
* Pause-on-hover interaction

The component is designed to feel closer to a private client dossier than a conventional testimonial carousel.

---

## 6. Luminescent CTA Capsule & Monolith Footer

The final conversion section combines several interactive elements into a single architectural interface.

### Dynamic Specular Border

An animated `conic-gradient` border creates a continuously rotating light effect around the CTA capsule.

### Typology Selector

Visitors can select their project scope:

* Full Architecture
* Interior Architecture
* Heritage Renovation

The consultation pathway dynamically updates according to the selected typology.

### London Studio Clock

The footer contains a real-time studio clock with:

**London Studio · GMT · Open**

alongside a pulsing status beacon.

### Private Monograph Request

A minimal frosted-glass email interface allows visitors to request the studio's digital monograph.

### Back-to-Top

An ambient glass circular control provides smooth navigation back to the beginning of the spatial experience.

---

## Project Structure

```text
luma-refined/
├── index.html
├── about.html
├── contact.html
├── styles.css
├── main.js
├── README.md
├── .gitignore
│
├── assets/
│   └── frames/
│       └── frames2/
│           ├── frame_0000
│           ├── frame_0001
│           ├── ...
│           └── frame_0239
│
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

No build step or external dependencies are required.

Run the project using any static web server.

#### Using Node.js

```bash
npx serve .
```

#### Using Python 3

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Deployment

### Vercel

The production version of Luma House is deployed using **Vercel**.

**Live deployment:**

```text
https://luma-house.vercel.app/
```

The deployment serves the complete static portfolio, including the main spatial experience, supporting pages, project case studies, interactive JavaScript functionality, CSS system, and photographic frame sequence.

### GitHub Pages

The project can also be deployed through GitHub Pages:

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select the `main` branch.
4. Select the repository root `/`.
5. Click **Save**.

---

## Architecture & Design Tokens

| Element          | Value                    |
| ---------------- | ------------------------ |
| Background       | `#000000`                |
| Primary Accent   | `#D4AF37`                |
| Glass Surface    | `rgba(12, 11, 15, 0.74)` |
| Glass Blur       | `28px`                   |
| Glass Saturation | `180%`                   |
| Heading Font     | Cormorant Garamond       |
| Body / Telemetry | DM Sans                  |

### Design Philosophy

The interface follows three primary principles:

**Light** — Light is treated as a dynamic architectural element rather than simple decoration.

**Material** — Glass, stone, bronze, timber, and water-inspired surfaces create tactile visual depth.

**Restraint** — Minimal typography, controlled motion, and negative space create an understated luxury aesthetic.

---

## Technology

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Glassmorphism
* CSS Gradients & Filters
* Scroll-driven animation
* Frame-sequence animation
* Responsive Web Design
* Vercel Deployment

---

## Credits

Designed and developed as an experimental luxury architectural portfolio experience focused on spatial storytelling, materiality, cinematic interaction, and digital art direction.

---

© 2026 Luma House Studio Ltd. All rights reserved.
