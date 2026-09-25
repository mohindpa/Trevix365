/**
 * Site content. Plans carry the fixed prices from the current plan sheet —
 * update `PLANS`, `CLAIM_FEE` and `WARRANTY_CLAIMS` here when pricing or
 * terms change, not in the components.
 */

export const CONTACT = {
  email: 'Info@trevix365.com',
  phone: '+91 81699 05555',
  phoneHref: 'tel:+918169905555',
  whatsapp: 'https://wa.me/918169905555',
  region: 'Kerala, India',
} as const

export const CITIES = ['Kochi', 'Angamaly'] as const

export type Plan = {
  /** Small uppercase label, e.g. "Essential Cover". */
  label: string
  name: string
  /** Warranty status line, e.g. "With warranty". */
  tagline: string
  price: string
  priceNote: string
  included: string[]
  /** Muted fine print under the inclusions, as on the plan sheet. */
  note?: string
  /** True when the plan carries the display damage warranty. */
  warrantyCovered: boolean
  /** Bottom-of-card strip, e.g. "Warranty claim covered". */
  footer: string
  badge?: string
  featured?: boolean
}

export const PLANS: Plan[] = [
  {
    label: 'Essential Cover',
    name: 'Ultra Premium Screen',
    tagline: 'No warranty',
    price: '₹1,999',
    priceNote: '365 days from installation',
    included: [
      'Nano membrane front protection',
      'Back protection',
      '2 free replacements — front film',
      '2 free replacements — back film',
    ],
    note: 'No breakage warranty. Camera glass and frame available as a paid add-on.',
    warrantyCovered: false,
    footer: 'Free replacements cover front and back film only.',
  },
  {
    label: 'Complete Cover',
    name: 'Ultra Premium 360',
    tagline: 'With warranty',
    price: '₹3,999',
    priceNote: '365 days from installation',
    badge: 'Most Popular',
    featured: true,
    included: [
      'Nano membrane front protection',
      'Back protection',
      'Complimentary frame',
      'Complimentary camera glass',
      '2 free replacements — front & back film',
      'Two claims during the warranty period',
    ],
    note: 'Free replacement covers front & back film only — frame & camera glass are not free replacements.',
    warrantyCovered: true,
    footer: 'Warranty claim covered',
  },
  {
    label: 'Display Only Cover',
    name: 'Ultra Premium Screen',
    tagline: 'With warranty',
    price: '₹2,999',
    priceNote: '365 days from installation',
    included: [
      'Nano membrane front protection',
      '2 free replacements — front & back film',
      'Two claims during the warranty period',
    ],
    note: 'Back glass and camera glass not covered under this plan — camera glass and frame available as a paid add-on.',
    warrantyCovered: true,
    footer: 'Warranty claim covered',
  },
]

/** Flat claim fee shown beside the warranty claim terms. */
export const CLAIM_FEE = {
  amount: '₹2,500',
  lines: ['Flat service fee on every claim', 'Charged in addition to any cost-share — non-refundable'],
}

/** Claim cost-sharing table from the current plan sheet. */
export const WARRANTY_CLAIMS = [
  {
    display: 'Premium Aftermarket Display',
    claims: ['1st claim — fully covered', '2nd claim — 60% Trevix365 / 40% you'],
  },
  {
    display: 'Authorised Original Display',
    claims: ['1st claim — 60% Trevix365 / 40% you', '2nd claim — 60% Trevix365 / 40% you'],
  },
]

/** Cross-plan promises shown under the plan grid. */
export const PLAN_ASSURANCES = [
  { title: 'Premium Quality Materials', body: 'Stronger. Clearer. Longer.' },
  { title: 'Advanced Protection', body: 'Scratch resistant, shatterproof & impact absorbing.' },
  { title: 'Expert Support', body: 'Hassle-free claims with dedicated customer care.' },
  { title: '100% Genuine Product', body: 'Trusted by thousands of customers.' },
]

export const STEPS = [
  { title: 'Pick your device', body: 'Tell us your model. We load its exact profile from our device library.' },
  { title: 'Cut to size', body: 'Our machine cuts a premium film to millimetre-perfect dimensions.' },
  { title: 'Bubble-free install', body: 'Trained staff align and apply it flawlessly with professional tools.' },
  { title: 'Protected 365 days', body: 'Register your plan and enjoy a full year of warranty-backed cover.' },
]

export const FAQS = [
  {
    q: 'What is a custom-cut screen protector?',
    a: 'It is protective film cut to your device\u2019s exact dimensions at the time of purchase, rather than pre-packaged for one popular model. We load your phone\u2019s profile into an on-site cutting machine, which trims the film to match the screen, curves, buttons, camera and cut-outs before it is applied.',
  },
  {
    q: 'Which devices can you protect?',
    a: 'Virtually any smartphone, plus many tablets and smartwatches. Because we cut on demand from a library of over 25,000 device profiles, we are not limited to what is in stock — flat screens and curved screens are both covered.',
  },
  {
    q: 'How long does it take?',
    a: 'Most visits take under ten minutes. The film itself is cut in roughly two minutes, then our staff clean the display and apply the protector bubble-free.',
  },
  {
    q: 'What does the display damage warranty cover?',
    a: 'Display warranty claims cover accidental display damage or breakage for 12 months from installation — provided the protection film was fitted on the device at the time of damage — with up to two claims per plan year. A flat ₹2,500 service fee applies to every claim, charged in addition to any cost-share and non-refundable. The first claim is fully covered on a Premium Aftermarket display; an Authorised Original display is split 60% Trevix365 / 40% you on both claims.',
  },
  {
    q: 'How does the authorised service option work?',
    a: 'Trevix365 handles the entire claim process for you. Authorised Original display replacements are done at our network of 7 authorised OEM service centres in Kochi, with the cost split 60% Trevix365 / 40% you on both claims in the plan year. If your display is already a Premium Aftermarket one fitted from an earlier claim, the Authorised Original option is not available for later claims on the plan. Typical repair turnaround is 2–3 working days; some repairs are completed in as little as 3–5 hours depending on part availability.',
  },
  {
    q: 'What is not covered by a plan?',
    a: 'Plans do not cover internal components (motherboard, camera, battery, speaker, charging port), dents or cosmetic wear, liquid or fire damage, loss, theft or intentional damage, a tampered IMEI, damage caused by an earlier unauthorised repair, software issues, or loss of data and settings.',
  },
  {
    q: 'Clear, matte or privacy — what is the difference?',
    a: 'Clear keeps maximum screen clarity, matte reduces glare and fingerprints, and privacy narrows the viewing angle so people beside you cannot read your screen.',
  },
  {
    q: 'Does the protector work on curved screens?',
    a: 'Yes. We use a flexible premium TPU that is curved-screen compatible, so it follows the edge of a curved display instead of lifting at the corners the way rigid tempered glass often does.',
  },
  {
    q: 'What is 450 micron TPU and why does it matter?',
    a: '450 micron (0.45 mm) describes the film\u2019s thickness. A thicker TPU layer absorbs and spreads impact energy rather than transferring it straight to the glass, while staying flexible enough to wrap a curved edge.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans are fixed-price: Ultra Premium Screen with front and back film is ₹1,999. Ultra Premium Screen with the display warranty is ₹2,999, and Ultra Premium 360 with the display warranty is ₹3,999. Every plan runs 365 days from installation.',
  },
  {
    q: 'Where can I find a Trevix365 kiosk?',
    a: 'Kiosks are opening inside leading stores and malls in Kochi and Angamaly, with more Kerala locations to follow. Send an enquiry and we will point you to the nearest one.',
  },
  {
    q: 'Do I need to bring anything to claim the warranty?',
    a: 'Just the device and your plan details. Call +91 81699 05555 first — our team guides you through the claim step by step, and repairs typically take 2–3 working days.',
  },
  {
    q: 'Can the protector be replaced if it gets scratched?',
    a: 'Yes. Every plan includes 2 free replacements of the front & back protection film. After the two free ones, each replacement carries a ₹399 flat service fee, and the film must still be on the device for a replacement to be processed. Replacements do not extend or reset your 12-month coverage. To request a replacement, visit any Trevix365 Partner Outlet.',
  },
  {
    q: 'Is a screen protector better than tempered glass?',
    a: 'A 450 micron TPU protector absorbs impact and flexes rather than shattering, and because it is cut to size it reaches edge-to-edge on curved screens. Tempered glass gives a firmer surface feel but comes in fixed sizes and can crack or lift at the edges.',
  },
  {
    q: 'Will it affect touch sensitivity or screen clarity?',
    a: 'No. The film is optically clear and thin enough that touch response, fingerprint sensors and display brightness work as normal once it has fully bonded.',
  },
  {
    q: 'Does Trevix365 protect the back and camera too?',
    a: 'Yes — Ultra Premium 360 covers the front, back, frame and camera glass. The Essential plan covers front and back film, and the Display Only plan protects the front display only.',
  },
]

export const TESTIMONIALS = [
  { quote: 'They cut the protector for my exact phone and the fit is perfect — no lifting edges. The install was completely bubble-free.', name: 'Arjun N.', city: 'Kochi' },
  { quote: 'Dropped my phone a month later, screen cracked — the warranty actually covered most of the repair. Worth it.', name: 'Meera S.', city: 'Kochi' },
  { quote: 'Quick, professional and clean. Loved that I could pick a privacy film and get full-body coverage in one visit.', name: 'Rahul V.', city: 'Kochi' },
]
