# Trevix365 — Website

Marketing website for **Trevix365** — custom-cut device protection with a display-damage warranty. *Protect. Repair. Replace.*

Built for direct customers as Trevix365 opens kiosks inside stores across **Kerala**.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build/dev)
- **Tailwind CSS v4** (design tokens via CSS custom properties)
- **Framer Motion** (scroll reveals, marquee, accordion, menu transitions)
- **lucide-react** (icons)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
index.html                  # app shell
src/
  main.tsx                  # entry
  App.tsx                   # section composition
  index.css                 # Tailwind + brand tokens + light/dark themes
  lib/
    content.ts              # plans, FAQs, testimonials, contact details
    utils.ts                # cn() class helper
  components/
    Header.tsx              # sticky nav, theme toggle, mobile menu
    Hero.tsx                # video-background hero + animated stats
    Sections.tsx            # all page sections
    ui/primitives.tsx       # Button, Card, Reveal, SectionHead, motion presets
public/assets/
  img/                      # photography, logos, hero video
  fonts/                    # self-hosted Poppins (woff2)
```

## Theming

Dark is the **default**. The header toggle switches to light and the choice is stored in `localStorage`
(`tv-theme`). Colours are CSS custom properties defined on `:root` and `.dark` in `src/index.css` — change
them there and both themes follow.

Brand palette: Navy `#071A3D` · Teal `#00B8C9` · Green `#7AC943`.

## Content notes

- **Plans carry no prices.** Each card leads with its standout benefit and an "Enquire for pricing" cue plus a
  *Get a quote* CTA. Plan data lives in `src/lib/content.ts` (`PLANS`) — edit there, not in the components.
- **Hero video** (`public/assets/img/hero-video.mp4`) is decorative: it's skipped on small screens, when the OS
  requests reduced motion, and when Data Saver is on. A poster image covers those cases.
- **Contact details** are live: `Info@trevix365.com`, `+91 81699 05555` (email, tel and WhatsApp links).
- **Logos**: `logo.png` (navy, light theme) and `logo-light.png` (white, dark theme).

## Deployment

`vercel.json` is configured for Vercel (framework `vite`, output `dist`, asset caching and security headers).
Push to `main` and Vercel builds and deploys automatically.

## To do before launch

- [ ] Connect the enquiry form to a backend (email/CRM)
- [ ] Confirm social profile URLs (Instagram / Facebook)
- [ ] Add real kiosk addresses once locations open
