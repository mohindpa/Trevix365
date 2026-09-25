import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, BadgeCheck, Wrench, Sparkles, Ruler, Layers, Timer, Target,
  Plus, Star, Mail, Phone, MapPin, Clock, MessageCircle,
} from 'lucide-react'

/* Brand marks (lucide dropped brand icons) */
const InstagramIcon = (p: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 19} height={p.size ?? 19} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)
const FacebookIcon = (p: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={p.size ?? 19} height={p.size ?? 19} fill="currentColor">
    <path d="M14 8h2V5h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8z" />
  </svg>
)

/** Small green tick used in plan feature lists. */
const Check = () => (
  <span className="absolute left-0 top-1 grid size-4 place-items-center rounded-full border border-green/50 bg-green/15 text-[0.58rem] font-bold text-green-ink">
    ✓
  </span>
)
import { Button, Card, Eyebrow, IconBox, Reveal, SectionHead } from '@/components/ui/primitives'
import { Img } from '@/components/ui/Img'
import { CITIES, CLAIM_FEE, CONTACT, FAQS, PLANS, PLAN_ASSURANCES, STEPS, TESTIMONIALS, WARRANTY_CLAIMS } from '@/lib/content'
import type { Plan } from '@/lib/content'
import { cn } from '@/lib/utils'

/* ================= Marquee ================= */

const MARQUEE = [
  'Fits Every Device', '450 Micron Premium Film', 'Bubble-Free Expert Install',
  'Apple & Samsung Authorised Service', '1-Year Display Damage Warranty', 'Cut On-Site In Minutes',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-surface-alt py-4" aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-7 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <span key={i} className="flex items-center gap-7">
            <span className="font-display text-[0.95rem] font-bold uppercase tracking-[0.08em] text-head/75">
              {m}
            </span>
            <span className="text-[0.6rem] text-teal">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ================= Features ================= */

const FEATURES = [
  { icon: Layers, title: '450 Micron Premium Protection', body: 'Thick, shock-absorbing film that guards front, back, frame and camera.' },
  { icon: BadgeCheck, title: 'Original Market Display Warranty', body: 'Accidental cracks covered — external and internal — for a full year.' },
  { icon: Wrench, title: '60/40 Authorised Service Option', body: 'We pay 60% of eligible display replacement at authorised centres.' },
  { icon: Sparkles, title: 'Expert Bubble-Free Install', body: 'Precision-aligned and installed by trained staff, every single time.' },
]

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="bg-surface py-14 sm:py-20">
      <h2 id="features-heading" className="sr-only">
        What every Trevix365 protection plan includes
      </h2>
      <div className="container-x grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
        {FEATURES.map((f, i: number) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <Card className="h-full p-5 text-center hover:-translate-y-1.5 hover:border-teal/45 sm:p-7">
              <div className="flex justify-center"><IconBox><f.icon size={22} strokeWidth={1.6} /></IconBox></div>
              <h3 className="mt-4 text-[1rem] font-bold sm:text-[1.08rem]">{f.title}</h3>
              <p className="mt-2 hidden text-[0.92rem] text-muted sm:block">{f.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ================= Technology ================= */

const TECH_POINTS = [
  { strong: 'Made-to-measure, on the spot.', rest: 'No stock shortages — if it is a smartphone, tablet or watch, we can cut for it.' },
  { strong: 'Perfect edge-to-edge coverage.', rest: 'Precision cutting means no lifting corners and no dust traps.' },
  { strong: 'Choose your finish.', rest: 'Clear, matte, or privacy film — in front-only or full-body coverage.' },
]

export function Technology() {
  return (
    <section id="technology" aria-labelledby="technology-heading" className="bg-surface-alt py-16 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-line shadow-brand">
            <Img
              src="/assets/img/machine.jpg"
              alt="The Trevix365 precision film-cutting machine trimming a screen protector to size"
              title="Trevix365 on-site screen protector cutting machine"
              width={1376}
              height={768}
              className="w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_84%,rgb(0_184_201/.18),transparent_45%)]" />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-6 rounded-2xl border border-line bg-card px-4 py-3 shadow-brand sm:-right-5"
          >
            <strong className="block font-display text-[1.3rem] font-extrabold text-head">25,000+</strong>
            <span className="text-[0.74rem] text-muted">Device profiles</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute -left-3 bottom-6 rounded-2xl border border-line bg-card px-4 py-3 shadow-brand sm:-left-5"
          >
            <strong className="block font-display text-[1.3rem] font-extrabold text-head">~2 min</strong>
            <span className="text-[0.74rem] text-muted">Cut &amp; fit</span>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal><Eyebrow>The Technology</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 id="technology-heading" className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.015em]">
              One machine. <span className="grad-text">Every device.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted">
              Forget "one-size-fits-most" protectors that peel at the edges. Our on-site precision cutting machine
              carries thousands of device profiles and slices a premium film to your phone's exact dimensions —
              buttons, curves, cameras and cut-outs included.
            </p>
          </Reveal>
          <ul className="mt-7 flex flex-col gap-4">
            {TECH_POINTS.map((p, i: number) => (
              <Reveal key={p.strong} delay={0.14 + i * 0.06}>
                <li className="flex gap-3.5">
                  <span className="brand-grad mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-[0.8rem] font-extrabold text-[#052033]">✓</span>
                  <span className="text-[0.98rem] text-muted">
                    <strong className="text-head">{p.strong}</strong> {p.rest}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <div className="mt-8"><Button href="#plans">Explore Coverage Options</Button></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================= How it works ================= */

const STEP_ICONS = [Target, Ruler, Sparkles, ShieldCheck]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-heading" className="bg-surface py-16 sm:py-28">
      <div className="container-x">
        <SectionHead
          id="how-heading"
          eyebrow="How It Works"
          title="Protected in four simple steps"
          sub="Walk up to a Trevix365 kiosk and walk away protected — usually in under ten minutes."
        />

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-line shadow-brand">
            <Img
              src="/assets/img/application.jpg"
              alt="A trained technician applying a Trevix365 screen protector bubble-free to a smartphone"
              title="Bubble-free screen protector installation"
              width={1872}
              height={1248}
              className="h-[200px] w-full object-cover sm:h-[340px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_18_40/.15),transparent_34%,rgb(6_18_40/.85))]" />
            <p className="absolute inset-x-5 bottom-5 flex items-center gap-2.5 font-display text-[0.85rem] font-semibold text-white sm:text-[0.96rem]">
              <span className="size-2.5 shrink-0 rounded-full bg-green shadow-[0_0_12px_var(--color-green)]" />
              Bubble-free installation by trained staff — done in minutes
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((s: { title: string; body: string }, i: number) => {
            const Icon = STEP_ICONS[i]
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <Card className="relative h-full p-5 text-center hover:-translate-y-1.5 hover:border-green/45 sm:p-7">
                  <span className="absolute right-3 top-3 font-display text-[0.95rem] font-extrabold text-head/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mx-auto grid size-12 place-items-center rounded-full border border-teal/28 bg-teal/10 text-teal-ink sm:size-14">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-3.5 text-[1rem] font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] text-muted">{s.body}</p>
                </Card>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/* ================= Plans ================= */

export function Plans() {
  return (
    <section id="plans" aria-labelledby="plans-heading" className="bg-surface-alt py-16 sm:py-28">
      <div className="container-x">
        <SectionHead
          id="plans-heading"
          eyebrow="Protection Plans"
          title={<>Choose the plan <span className="grad-text">that suits you best.</span></>}
          sub="Premium protection. Smart choice. Pick the cover that fits your device and your life."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PLANS.map((p: Plan, i: number) => (
            <Reveal key={p.label} delay={i * 0.07}>
              <Card
                className={cn(
                  'relative flex h-full flex-col hover:-translate-y-2',
                  p.featured
                    ? 'border-green/55 bg-[linear-gradient(180deg,rgb(122_201_67/.09),transparent)] shadow-brand'
                    : 'hover:border-teal/45',
                )}
              >
                {p.badge && (
                  <span className="brand-grad absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#052033] shadow-[0_10px_20px_-10px_rgb(0_184_201/.7)]">
                    {p.badge}
                  </span>
                )}

                <div className="mt-3 text-center">
                  <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] text-teal-ink">{p.label}</p>
                  <h3 className="mt-2 text-[1.25rem] font-bold">{p.name}</h3>
                  <p className="mt-1 text-[0.82rem] text-muted">{p.tagline}</p>
                </div>

                {/* fixed price from the plan sheet */}
                <div className="mt-5 rounded-2xl border border-teal/25 bg-teal/8 px-4 py-4 text-center">
                  <span className="block font-display text-[2rem] font-extrabold leading-none text-head">{p.price}</span>
                  <span className="mt-2 block text-[0.74rem] text-teal-ink">{p.priceNote}</span>
                </div>

                <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-2">What's Included</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {p.included.map((m: string) => (
                    <li key={m} className="relative pl-6 text-[0.84rem] leading-snug text-muted">
                      <Check />{m}
                    </li>
                  ))}
                </ul>

                {p.note && <p className="mt-4 text-[0.72rem] leading-relaxed text-muted-2">{p.note}</p>}

                <div className="mt-auto flex flex-col gap-3 pt-5">
                  <p
                    className={cn(
                      'rounded-full border px-4 py-2.5 text-center font-display text-[0.72rem] font-bold',
                      p.warrantyCovered
                        ? 'border-green/45 bg-green/12 uppercase tracking-[0.1em] text-green-ink'
                        : 'border-line bg-input text-muted',
                    )}
                  >
                    {p.warrantyCovered ? `✓ ${p.footer}` : p.footer}
                  </p>
                  <Button href="#contact" variant={p.featured ? 'primary' : 'ghost'} className="w-full">
                    Get this plan
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-2xl border border-green/40 bg-green/10 px-5 py-4 text-center text-[0.9rem] text-body">
            <span>Need 360° protection without display warranty? Ultra Premium 360 (No Warranty) is also available at</span>
            <strong className="font-display font-extrabold text-head">₹2,999</strong>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {PLAN_ASSURANCES.map((a: { title: string; body: string }, i: number) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card p-5 text-center shadow-brand-sm">
                <h3 className="text-[0.92rem] font-bold">{a.title}</h3>
                <p className="mt-1 text-[0.8rem] text-muted">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-center text-[0.76rem] leading-relaxed text-muted-2">
            Coverage runs for 12 months from installation. Two free front &amp; back film replacements are included —
            after that, ₹399 flat per replacement. Display claims require the film to have been fitted at the time of
            damage and carry a flat ₹2,500 service fee on every claim (in addition to any cost-share, non-refundable);
            up to two claims per plan year. Liquid damage, internal components and cosmetic wear are not covered.{' '}
            <a
              href="https://app.trevix365.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-ink underline underline-offset-2 hover:text-green-ink"
            >
              Full terms &amp; conditions
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ================= Warranty ================= */

const WARRANTY_POINTS = [
  { icon: ShieldCheck, title: 'We pay 60%, you pay 40%', body: 'On eligible display replacements at authorised centres.' },
  { icon: BadgeCheck, title: 'Original parts only', body: 'Genuine components fitted by authorised technicians.' },
  { icon: Wrench, title: 'Apple & Samsung eligible', body: 'Authorised service option available on leading models.' },
]

export function Warranty() {
  return (
    <section id="warranty" aria-labelledby="warranty-heading" className="bg-surface py-16 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
        <div>
          <Reveal><Eyebrow>Warranty &amp; Authorised Service</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 id="warranty-heading" className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.015em]">
              Cracked screen? <span className="grad-text">We've got your back.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted">
              Trevix365 isn't just a sticker on your screen. On eligible plans, a cracked display doesn't have to
              mean a painful bill. Our authorised service option shares the cost of a genuine repair — using
              original parts, at authorised service centres.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-5">
            {WARRANTY_POINTS.map((w, i: number) => (
              <Reveal key={w.title} delay={0.14 + i * 0.06}>
                <div className="flex gap-4">
                  <IconBox><w.icon size={22} strokeWidth={1.6} /></IconBox>
                  <div>
                    <h3 className="text-[1.02rem] font-bold">{w.title}</h3>
                    <p className="text-[0.9rem] text-muted">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-teal/35 bg-[linear-gradient(160deg,#0a2249,#071A3D)] p-8 shadow-brand sm:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_0%,rgb(0_184_201/.3),transparent_55%),radial-gradient(70%_60%_at_10%_100%,rgb(122_201_67/.22),transparent_55%)]" />
            <div className="relative">
              <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-green">
                Warranty Claim Terms
              </p>
              <h3 className="mt-2.5 text-[1.5rem] font-bold leading-snug text-white">
                Only if it breaks <span className="grad-text">with our protection.</span>
              </h3>
              <p className="mt-1.5 text-[0.88rem] text-[#c3d2ea]">One flat fee. Real peace of mind.</p>

              <div className="mt-5 rounded-2xl border border-green/40 bg-green/10 px-5 py-4 text-center">
                <strong className="block font-display text-[2.2rem] font-extrabold leading-none text-white">{CLAIM_FEE.amount}</strong>
                <div className="mt-1.5 text-[0.8rem] leading-snug text-[#d3ddee]">
                  {CLAIM_FEE.lines.map((l: string) => <p key={l}>{l}</p>)}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 text-left">
                {WARRANTY_CLAIMS.map((row: { display: string; claims: string[] }) => (
                  <div key={row.display} className="rounded-2xl border border-white/12 bg-white/6 px-5 py-4">
                    <p className="flex items-center gap-2 font-display text-[0.9rem] font-bold text-white">
                      <ShieldCheck size={15} className="text-green" strokeWidth={2} />
                      {row.display}
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {row.claims.map((c: string) => (
                        <li key={c} className="text-[0.84rem] text-[#d3ddee]">{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[0.78rem] leading-relaxed text-[#9fb0cb]">
                Available on the Ultra Premium 360 and Ultra Premium Screen (with warranty) plans. Up to two claims per
                plan year, and the protection film must have been fitted at the time of damage. Liquid damage, internal
                components and cosmetic wear are not covered.{' '}
                <a
                  href="https://app.trevix365.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c3d2ea] underline underline-offset-2 hover:text-green"
                >
                  Full terms
                </a>
                .
              </p>
              <div className="mt-6"><Button href="#contact" className="w-full">Register your plan</Button></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================= Why ================= */

const WHY = [
  { icon: Target, title: 'Cut for you', body: 'Made-to-measure film for your exact device — never a generic sheet.' },
  { icon: ShieldCheck, title: 'Beyond the screen', body: 'Front, back, frame and camera protection on premium plans.' },
  { icon: BadgeCheck, title: 'Warranty that pays', body: 'Real cost-sharing on display repairs — not just a promise.' },
  { icon: Timer, title: 'Fast in-store', body: 'Cut, install and register in minutes at a kiosk near you.' },
]

export function Why() {
  return (
    <section aria-labelledby="why-heading" className="bg-surface-alt py-16 sm:py-28">
      <div className="container-x">
        <SectionHead id="why-heading" eyebrow="Why Trevix365" title="More than a screen protector" />
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {WHY.map((w, i: number) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <Card className="h-full p-5 text-center hover:-translate-y-1.5 hover:border-teal/45 sm:p-7">
                <div className="flex justify-center"><IconBox tone={i % 2 ? 'green' : 'teal'}><w.icon size={22} strokeWidth={1.6} /></IconBox></div>
                <h3 className="mt-3.5 text-[1rem] font-bold">{w.title}</h3>
                <p className="mt-1.5 text-[0.85rem] text-muted">{w.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= Stores ================= */

export function Stores() {
  return (
    <section id="stores" aria-labelledby="stores-heading" className="relative overflow-hidden bg-surface py-16 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_92%_12%,rgb(0_184_201/.1),transparent_60%),radial-gradient(55%_60%_at_6%_100%,rgb(122_201_67/.09),transparent_60%)]" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal><Eyebrow>Kiosks Across Kerala</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 id="stores-heading" className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.015em]">
              Find Trevix365 <span className="grad-text">near you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted">
              We're opening kiosks inside leading stores and malls across Kerala. Drop by, get your device protected
              on the spot, and register for warranty cover.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {CITIES.map((c: string) => (
                <span key={c} className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[0.84rem] font-medium text-head shadow-brand-sm">
                  <MapPin size={14} className="text-teal-ink" />{c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="#contact">Locate a kiosk</Button>
              <Button href="#contact" variant="ghost">Partner with us</Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <Img
            src="/assets/img/kiosk.jpg"
            alt="A Trevix365 kiosk with the film-cutting machine, lit display cabinet and packaged screen protectors"
            title="Trevix365 kiosk in Kerala"
            width={1280}
            height={1143}
            className="aspect-[4/3] w-full rounded-3xl border border-line object-cover shadow-brand"
          />
          <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[0.8rem] font-semibold text-head shadow-brand-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green opacity-70" />
              <span className="relative inline-flex size-2.5 rounded-full bg-green" />
            </span>
            Now opening
          </span>
        </Reveal>
      </div>
    </section>
  )
}

/* ================= Testimonials ================= */

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-surface-alt py-16 sm:py-28">
      <div className="container-x">
        <SectionHead id="testimonials-heading" eyebrow="Loved by device owners" title="Protection people trust" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t: { quote: string; name: string; city: string }, i: number) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <Card className="h-full">
                <div className="flex gap-0.5 text-green-ink">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={15} fill="currentColor" strokeWidth={0} />)}
                </div>
                <blockquote className="mt-3.5 text-[0.98rem] leading-relaxed text-body">"{t.quote}"</blockquote>
                <figcaption className="mt-4 font-display text-[0.85rem] font-semibold text-teal-ink">
                  {t.name} · {t.city}
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= FAQ ================= */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface py-16 sm:py-28">
      <div className="container-x max-w-3xl">
        <SectionHead id="faq-heading" eyebrow="Questions" title="Frequently asked" />
        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f: { q: string; a: string }, i: number) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={cn('overflow-hidden rounded-2xl border bg-card shadow-brand-sm transition-colors', isOpen ? 'border-teal/45' : 'border-line')}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[1rem] font-semibold text-head"
                  >
                    {f.q}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-teal-ink">
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
                      >
                        <p className="px-6 pb-5 text-[0.94rem] text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ================= Contact ================= */

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-surface-alt py-16 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative mx-auto mb-14 max-w-3xl overflow-hidden rounded-3xl border border-teal/30 p-10 text-center shadow-brand sm:p-14">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/film.jpg)' }} />
            <div className="absolute inset-0 bg-[linear-gradient(rgb(6_18_40/.88),rgb(4_15_40/.94))]" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgb(0_184_201/.28),transparent_58%)]" />
            <div className="relative">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold text-white">
                Protection today. <span className="grad-text">Peace of mind everyday.</span>
              </h2>
              <p className="mt-3 text-[1.05rem] text-[#c9d6ec]">
                Get your device custom-protected and warranty-registered at a Trevix365 kiosk.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <Card className="p-7 sm:p-9">
              <h3 id="contact-heading" className="text-[1.3rem] font-bold">Get in touch</h3>
              <form
                aria-labelledby="contact-heading"
                className="mt-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="+91 " required />
                </div>
                <div className="mt-4"><Field label="Email" name="email" type="email" placeholder="you@email.com" /></div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Device" name="device" placeholder="e.g. iPhone 15 Pro" />
                  <Field label="City" name="city" placeholder="e.g. Kochi" />
                </div>
                <label className="mt-4 block text-[0.82rem] font-medium text-muted">
                  Interested in
                  <select name="interest" className="mt-1.5 w-full rounded-xl border border-line bg-input px-4 py-3 text-[0.92rem] text-head outline-none focus:border-teal">
                    {PLANS.map((p: Plan) => <option key={p.label}>{p.name} — {p.label}</option>)}
                    <option>Franchise / Partnership</option>
                  </select>
                </label>
                <label className="mt-4 block text-[0.82rem] font-medium text-muted">
                  Message
                  <textarea name="message" rows={3} placeholder="Tell us how we can help" className="mt-1.5 w-full rounded-xl border border-line bg-input px-4 py-3 text-[0.92rem] text-head outline-none focus:border-teal" />
                </label>
                <div className="mt-5"><Button type="submit" className="w-full">Send enquiry</Button></div>
                {sent && (
                  <p className="mt-3.5 text-[0.82rem] text-green-ink">
                    Thanks — connect this form to your inbox or CRM to start receiving enquiries.
                  </p>
                )}
              </form>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-teal/28 bg-teal/8 p-7 sm:p-9">
              <h3 className="text-[1.5rem] font-bold">Trevix365</h3>
              <p className="mt-1 font-display text-[0.82rem] font-bold uppercase tracking-[0.12em] text-teal-ink">
                Protect. Repair. Replace.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <InfoRow icon={Mail} label="Email"><a href={`mailto:${CONTACT.email}`} className="hover:text-teal-ink">{CONTACT.email}</a></InfoRow>
                <InfoRow icon={Phone} label="Phone"><a href={CONTACT.phoneHref} className="hover:text-teal-ink">{CONTACT.phone}</a></InfoRow>
                <InfoRow icon={MapPin} label="Region">{CONTACT.region}</InfoRow>
                <InfoRow icon={Clock} label="Hours">Mall hours — 7 days a week</InfoRow>
              </ul>
              <div className="mt-6 flex gap-3">
                {[
                  { icon: InstagramIcon, href: '#', label: 'Instagram' },
                  { icon: FacebookIcon, href: '#', label: 'Facebook' },
                  { icon: MessageCircle, href: CONTACT.whatsapp, label: 'WhatsApp' },
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="grid size-[42px] place-items-center rounded-xl border border-line bg-card text-head shadow-brand-sm transition-all hover:-translate-y-0.5 hover:border-green hover:text-green-ink">
                    <s.icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block text-[0.82rem] font-medium text-muted">
      {label}
      <input
        type={type} name={name} placeholder={placeholder} required={required}
        className="mt-1.5 w-full rounded-xl border border-line bg-input px-4 py-3 text-[0.92rem] text-head outline-none transition-colors placeholder:text-muted-2 focus:border-teal"
      />
    </label>
  )
}

function InfoRow({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Icon size={17} className="mt-1 shrink-0 text-teal-ink" />
      <div>
        <span className="block text-[0.72rem] uppercase tracking-[0.1em] text-muted-2">{label}</span>
        <span className="text-[0.98rem] text-body">{children}</span>
      </div>
    </li>
  )
}

/* ================= Footer ================= */

const FOOTER_LINKS = [
  { title: 'Explore', links: [['Technology', '#technology'], ['How it works', '#how'], ['Plans', '#plans']] },
  { title: 'Support', links: [['Warranty', '#warranty'], ['Find a kiosk', '#stores'], ['Contact', '#contact'], ['Terms & conditions', 'https://app.trevix365.com/terms']] },
  { title: 'Company', links: [['Partnerships', '#stores'], ['Careers', '#contact'], ['Enquiries', '#contact']] },
]

export function Footer() {
  return (
    <footer className="border-t-[3px] border-transparent bg-navy pt-16 [border-image:linear-gradient(120deg,var(--color-teal),var(--color-green))_1]">
      <div className="container-x grid gap-10 pb-11 lg:grid-cols-[1.4fr_1.6fr]">
        <div>
          <img src="/assets/img/logo-light.png" alt="Trevix365 — Protect. Repair. Replace." width={1142} height={308} loading="lazy" decoding="async" className="h-[42px] w-auto" />
          <p className="mt-4 max-w-xs text-[0.92rem] text-[#9fb0cb]">
            Custom-cut device protection, backed by a real warranty. Protect. Repair. Replace.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-6 sm:grid-cols-3" aria-label="Footer">
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3.5 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white">{col.title}</h4>
              {col.links.map(([label, href]) => (
                <a key={label} href={href} className="mb-2.5 block text-[0.9rem] text-[#9fb0cb] transition-colors hover:text-green">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="container-x flex flex-col gap-5 border-t border-white/10 py-6 text-[0.8rem] text-[#8494b0] sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-display text-[0.82rem] font-bold uppercase tracking-[0.1em] text-[#c3d2ea]">
            TREVIX365 GLOBAL PRIVATE LIMITED
          </span>
          <span>Maradu, Ernakulam, PIN- 682304, Kerala, India</span>
          <span>GST No: 32AANCT6421C1ZM</span>
        </div>
        <div className="flex flex-col gap-1 sm:text-right">
          <span>© {new Date().getFullYear()} Trevix365. All rights reserved.</span>
          <span className="text-[#9fb0cb]">Stronger protection · Trusted warranty · Total peace of mind</span>
        </div>
      </div>
    </footer>
  )
}
