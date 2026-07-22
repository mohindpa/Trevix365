# Trevix365 — Website

Marketing website for **Trevix365** — custom-cut device protection with a real display-damage warranty. *Protect. Repair. Replace.*

Built for direct customers as Trevix365 opens kiosks inside stores across **Kerala**.

## Highlights

- **Futuristic, brand-accurate design** using the Trevix365 palette (Navy `#071A3D`, Teal `#00B8C9`, Green `#7AC943`) and typography (Montserrat / Poppins).
- **Single-page experience** with: hero, technology (on-site precision cutting machine), how-it-works, four protection plans, warranty & authorised-service explainer, kiosk/store rollout, testimonials, FAQ and a contact/enquiry form.
- **Recreated SVG logo** (scalable, crisp on any screen) with the signature teal→green swoosh.
- **Motion & interactions:** sticky glass navigation, scroll-reveal animations, animated stat counters, marquee, animated background grid/orbs, mobile menu, accordion FAQ.
- **Responsive** from large desktop down to mobile, with `prefers-reduced-motion` support.
- No build step — pure HTML/CSS/JS.

## Structure

```
index.html                # all sections
assets/
  css/style.css           # full stylesheet + design tokens
  js/main.js              # nav, reveals, counters, FAQ, form
  favicon.svg             # brand mark
  img/                    # hero, machine, film, application, kiosk
```

## Run locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Content notes

- **Plan pricing** is taken from the Trevix365 plan sheet (Ultra Premium Care ₹3,999, Premium Care ₹2,499 / Privacy ₹2,699, Ultra Shield ₹1,999, Essential ₹399 / Privacy ₹599). Prices are indicative and may vary by device.
- **Product imagery** was AI-generated on-brand as placeholders; swap in real photography of the Trevix365 cutting machine, kiosks and installs when available.
- The **contact form** is a front-end demo — wire it to your email/CRM (e.g. Formspree, a serverless function, or your backend) to receive enquiries.
- **Contact details** are live: `Info@trevix365.com`, `+91 81699 05555` (email, tel and WhatsApp links wired in `index.html`).
- **Logos**: `assets/img/logo.png` (navy wordmark, used on the light header) and `assets/img/logo-light.png` (white wordmark, used on the dark footer).

## To do before launch

- [ ] Connect the enquiry form to a backend
- [ ] Swap AI placeholder images for real brand photography
- [ ] Add real kiosk locations / map once open
- [ ] Confirm social profile URLs (Instagram / Facebook)
