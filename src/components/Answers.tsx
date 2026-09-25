import { Reveal, SectionHead } from '@/components/ui/primitives'

/**
 * Answer blocks written for featured snippets and AI answer engines
 * (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot).
 *
 * Each block opens with a direct 40–55 word definition-style answer, then adds
 * supporting detail — the shape extractive systems quote most reliably.
 */

const ANSWERS = [
  {
    q: 'What is a custom-cut screen protector?',
    a: 'A custom-cut screen protector is protective film trimmed to your device’s exact dimensions at the moment you buy it, instead of being pre-packaged for one popular model. At Trevix365 the film is cut on-site from your phone’s stored profile, so the screen, curves, buttons, camera and cut-outs all line up.',
    more: 'Because the cut happens in store, coverage does not depend on whether a protector for your model is in stock — the same roll of premium TPU serves a flagship iPhone, a curved Samsung Galaxy or a lesser-known Android handset.',
  },
  {
    q: 'Why choose a cut-to-size protector over a ready-made one?',
    a: 'Ready-made protectors are manufactured to fixed sizes, so on curved or less common devices they often sit short of the edge, lift at the corners or trap dust. A cut-to-size protector matches the exact display, which is what keeps the bond flat and the edges sealed.',
    more: 'It also removes the guesswork of finding the right SKU for an older or regional model, and it lets you switch finish — clear, matte or privacy — without waiting for stock.',
  },
  {
    q: 'How is a Trevix365 screen protector fitted?',
    a: 'Fitting takes under ten minutes. Staff select your device profile, the machine cuts the film in about two minutes, the display is cleaned, and the protector is squeegeed on bubble-free. Your plan is then registered so warranty cover starts the same day.',
    more: 'The film is applied with professional tools rather than by hand, which is what avoids the trapped air and misalignment common with self-installed protectors.',
  },
  {
    q: 'What does a display damage warranty actually cover?',
    a: 'Display warranty claims cover accidental display damage or breakage for 12 months from installation — provided the protection film was fitted at the time of damage — with up to two claims per plan year. Every claim carries a flat ₹2,500 service fee, charged in addition to any cost-share and non-refundable. The first claim is fully covered on a premium aftermarket display; an authorised original display is split 60% Trevix365 / 40% you on both claims.',
    more: 'Trevix365 processes the entire claim for you — with 7 authorised OEM service centres in Kochi and a typical repair turnaround of 2–3 working days. Liquid damage, internal components and cosmetic wear are not covered.',
  },
  {
    q: 'What does screen protection cost?',
    a: 'Plans are fixed-price rather than quoted: ₹1,999 for Ultra Premium Screen with front and back film, ₹2,999 for Ultra Premium Screen with the display warranty, and ₹3,999 for Ultra Premium 360 — front, back, frame and camera glass with the display warranty. Each plan runs 365 days from installation.',
    more: 'All three plans use the same premium film and include two free film replacements in the year — they differ in coverage and warranty, not in film quality.',
  },
]

export function Answers() {
  return (
    <section id="guide" aria-labelledby="guide-heading" className="bg-surface py-16 sm:py-28">
      <div className="container-x">
        <SectionHead
          id="guide-heading"
          eyebrow="Screen Protection Explained"
          title={<>A short guide to <span className="grad-text">protecting your screen.</span></>}
          sub="Straight answers to what people ask us most before they choose a plan."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 lg:grid-cols-2">
          {ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <article
                className={`h-full rounded-3xl border border-line bg-card p-6 shadow-brand-sm sm:p-7 ${
                  i === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <h3 className="text-[1.08rem] font-bold">{item.q}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-body">{item.a}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{item.more}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Comparison table — the format answer engines lift most often */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-3xl border border-line bg-card shadow-brand-sm">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="px-6 pt-6 text-[0.92rem] text-muted">
                How Trevix365 protection compares with common alternatives
              </caption>
              <thead>
                <tr className="border-b border-line">
                  {['', 'Trevix365 cut-to-size TPU', 'Ready-made tempered glass'].map((h) => (
                    <th key={h} scope="col" className="px-6 py-4 font-display text-[0.82rem] font-bold uppercase tracking-[0.08em] text-teal-ink">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fits curved screens', 'Yes — film flexes to the edge', 'Often lifts at the curve'],
                  ['Device availability', 'Cut on demand, 25,000+ profiles', 'Limited to stocked models'],
                  ['On impact', 'Absorbs and flexes', 'Can shatter'],
                  ['Display warranty', 'Up to 2 claims in 12 months', 'Rarely included'],
                  ['Fitting', 'Bubble-free by trained staff', 'Usually self-applied'],
                ].map(([label, a, b]) => (
                  <tr key={label} className="border-b border-line last:border-0">
                    <th scope="row" className="px-6 py-4 text-[0.88rem] font-semibold text-head">{label}</th>
                    <td className="px-6 py-4 text-[0.88rem] text-body">{a}</td>
                    <td className="px-6 py-4 text-[0.88rem] text-muted">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
