/**
 * Site content. Plans intentionally carry NO prices — each card ends in an
 * enquiry CTA instead. Update `plans` when the new plan sheet lands.
 */

export const CONTACT = {
  email: 'Info@trevix365.com',
  phone: '+91 81699 05555',
  phoneHref: 'tel:+918169905555',
  whatsapp: 'https://wa.me/918169905555',
  region: 'Kerala, India',
} as const

export const CITIES = ['Kochi', 'Thrissur'] as const

export type Plan = {
  name: string
  coverage: string
  highlight: string
  material: string[]
  features: string[]
  warranty: { label: string; detail?: string[] } | null
  badge?: string
  featured?: boolean
}

export const PLANS: Plan[] = [
  {
    name: 'Ultra Premium Care',
    coverage: 'Full Body Protection',
    highlight: 'Best all-round cover',
    badge: 'Best Value',
    featured: true,
    material: [
      'Flat screens — 450 micron premium TPU',
      'Curved screens — premium TPU (curved screen compatible)',
    ],
    features: [
      'Full body coverage — front + back + side/frame + camera',
      '2 free protector replacements in 1 year',
      'Authorised service option (Apple / Samsung)',
    ],
    warranty: {
      label: 'Display damage warranty — 2 in 1 year',
      detail: ['1st claim: full coverage (100%)', '2nd claim: 50% coverage'],
    },
  },
  {
    name: 'Screen Protection',
    coverage: 'Front',
    highlight: 'Front screen, fully warranted',
    badge: 'Great Choice',
    material: [
      'Flat screens — 450 micron premium TPU',
      'Curved screens — premium TPU (curved screen compatible)',
    ],
    features: [
      'Front coverage only',
      '2 free protector replacements in 1 year',
      'Authorised service option (Apple / Samsung)',
    ],
    warranty: {
      label: 'Display damage warranty — 2 in 1 year',
      detail: ['1st claim: full coverage (100%)', '2nd claim: 50% coverage'],
    },
  },
  {
    name: 'Ultra Shield',
    coverage: 'Full Body Protection',
    highlight: 'Full body, no warranty',
    material: [
      'Flat screens — 450 micron premium TPU',
      'Curved screens — premium TPU (curved screen compatible)',
    ],
    features: [
      'Full body coverage — front + back + side/frame + camera',
      '2 free protector replacements in 1 year',
      'Authorised service option (Apple / Samsung)',
      'Apple & Samsung protection',
    ],
    warranty: null,
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
    q: 'Which devices can you protect?',
    a: 'Virtually any smartphone, and many tablets and smartwatches. Because we cut film to size on-site from a large device library, we are not limited to what is in stock.',
  },
  {
    q: 'How long does it take?',
    a: 'Most cut-and-install visits take under ten minutes. The film itself is cut in roughly two minutes.',
  },
  {
    q: 'What does the display warranty cover?',
    a: 'On Ultra Premium Care and Premium Care, the 1-year warranty covers accidental external and internal cracks. Liquid damage is not covered. Terms, eligibility and claim limits apply.',
  },
  {
    q: 'How does the 60/40 authorised service option work?',
    a: 'For eligible display replacements at authorised service centres, Trevix365 pays 60% of the eligible cost and you pay 40%. It is subject to plan, model, eligibility and a maximum claim limit.',
  },
  {
    q: 'Clear, matte or privacy — what is the difference?',
    a: 'Clear keeps maximum clarity, matte reduces glare and fingerprints, and privacy narrows viewing angles so people beside you cannot read your screen.',
  },
  {
    q: 'Where can I find a kiosk?',
    a: 'We are opening across Kerala inside leading stores and malls. Use the enquiry form and we will point you to the nearest location as it goes live.',
  },
]

export const TESTIMONIALS = [
  { quote: 'They cut the protector for my exact phone and the fit is perfect — no lifting edges. The install was completely bubble-free.', name: 'Arjun N.', city: 'Kochi' },
  { quote: 'Dropped my phone a month later, screen cracked — the warranty actually covered most of the repair. Worth it.', name: 'Meera S.', city: 'Thrissur' },
  { quote: 'Quick, professional and clean. Loved that I could pick a privacy film and get full-body coverage in one visit.', name: 'Rahul V.', city: 'Kochi' },
]
