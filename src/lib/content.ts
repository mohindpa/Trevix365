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
    q: 'What is a custom-cut screen protector?',
    a: 'It is protective film cut to your device\u2019s exact dimensions at the time of purchase, rather than pre-packaged for one popular model. We load your phone\u2019s profile into an on-site cutting machine, which trims the film to match the screen, curves, buttons, camera and cut-outs before it is applied.',
  },
  {
    q: 'Which devices can you protect?',
    a: 'Virtually any smartphone, plus many tablets and smartwatches. Because we cut on demand from a library of over 1,000 device profiles, we are not limited to what is in stock \u2014 flat screens and curved screens are both covered.',
  },
  {
    q: 'How long does it take?',
    a: 'Most visits take under ten minutes. The film itself is cut in roughly two minutes, then our staff clean the display and apply the protector bubble-free.',
  },
  {
    q: 'What does the display damage warranty cover?',
    a: 'On eligible plans it covers accidental external and internal cracks to the display for 12 months, with two claims in one year \u2014 the first at full coverage and the second at 50%. Liquid damage is not covered. Terms, eligibility and claim limits apply.',
  },
  {
    q: 'How does the authorised service option work?',
    a: 'For eligible display replacements at authorised Apple or Samsung service centres, Trevix365 pays 60% of the eligible cost and you pay 40%. Original parts are used, and the option is subject to plan, model, eligibility and a maximum claim limit.',
  },
  {
    q: 'Clear, matte or privacy \u2014 what is the difference?',
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
    a: 'Pricing depends on your device and the plan you choose, since the film is cut per model. Visit a kiosk or send an enquiry and we will quote for your exact handset.',
  },
  {
    q: 'Where can I find a Trevix365 kiosk?',
    a: 'Kiosks are opening inside leading stores and malls in Kochi and Thrissur, with more Kerala locations to follow. Send an enquiry and we will point you to the nearest one.',
  },
  {
    q: 'Do I need to bring anything to claim the warranty?',
    a: 'Bring the device and your plan registration details. Claims are assessed against the plan you registered at fitting, so registering at the time of purchase keeps the process quick.',
  },
  {
    q: 'Can the protector be replaced if it gets scratched?',
    a: 'Yes. All three plans include two free protector replacements within one year. Replacements are cut fresh for your device, exactly like the original fitting.',
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
    a: 'Yes \u2014 the Ultra Premium Care and Ultra Shield plans cover the full body: front, back, side/frame and camera. The Screen Protection plan covers the front display only.',
  },
]

export const TESTIMONIALS = [
  { quote: 'They cut the protector for my exact phone and the fit is perfect — no lifting edges. The install was completely bubble-free.', name: 'Arjun N.', city: 'Kochi' },
  { quote: 'Dropped my phone a month later, screen cracked — the warranty actually covered most of the repair. Worth it.', name: 'Meera S.', city: 'Thrissur' },
  { quote: 'Quick, professional and clean. Loved that I could pick a privacy film and get full-body coverage in one visit.', name: 'Rahul V.', city: 'Kochi' },
]
