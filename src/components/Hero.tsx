import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Button, fadeUp, stagger } from '@/components/ui/primitives'

const STATS = [
  { value: 450, suffix: 'µ', label: 'Micron premium film' },
  { value: 1, suffix: 'yr', label: 'Display damage warranty' },
  { value: 365, suffix: '', label: 'Days of peace of mind' },
]

/** Counts up once, when scrolled into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const dur = 1400
        let start: number | null = null
        const step = (ts: number) => {
          if (start === null) start = ts
          const p = Math.min((ts - start) / dur, 1)
          setN(Math.floor((1 - Math.pow(1 - p, 3)) * value))
          if (p < 1) requestAnimationFrame(step)
          else setN(value)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref} className="grad-text font-display text-[2rem] font-extrabold leading-tight tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  // Only load the video on larger screens and when the user hasn't asked for
  // reduced motion — it's decorative, and 20MB is a lot on mobile data.
  useEffect(() => {
    const okSize = window.matchMedia('(min-width: 768px)').matches
    const okMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const okData = !(navigator as { connection?: { saveData?: boolean } }).connection?.saveData
    if (okSize && okMotion && okData) setShowVideo(true)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-[calc(74px+2.5rem)]"
    >
      {/* video / gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/img/hero.jpg)' }}
          aria-hidden="true"
        />
        {showVideo && (
          <video
            className="absolute inset-0 size-full object-cover"
            src="/assets/img/hero-video.mp4"
            poster="/assets/img/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        )}
        {/* Legibility scrim. The hero copy is always light, so the scrim stays
            dark in both themes — only its strength changes. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(6_13_29/.92)_16%,rgb(6_13_29/.74)_52%,rgb(6_13_29/.42)_100%)] dark:bg-[linear-gradient(100deg,#060d1d_16%,rgb(6_13_29/.82)_50%,rgb(6_13_29/.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_82%_-12%,rgb(0_184_201/.18),transparent_52%)]" />
      </div>

      <motion.div
        className="container-x relative z-10 max-w-3xl"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-teal-ink backdrop-blur"
        >
          <span className="size-2 rounded-full bg-green shadow-[0_0_0_4px_rgb(122_201_67/.2)]" />
          Protection that matters — now opening across Kerala
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-[clamp(2.4rem,6vw,4.4rem)] font-black leading-[1.03] tracking-[-0.02em] text-white"
        >
          Custom-cut protection for <span className="grad-text">every device.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 font-display text-[clamp(1.3rem,2.6vw,2rem)] font-extrabold tracking-[-0.01em] text-white"
        >
          Protect. <span className="text-teal-ink">Repair.</span> <span className="text-green-ink">Replace.</span>
        </motion.p>

        <motion.p variants={fadeUp} className="mt-5 max-w-xl text-[1.08rem] text-white/80">
          We cut premium screen protectors to your exact device size on the spot, install them bubble-free, and
          back your display with a real 1-year damage warranty. Protection beyond the screen.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3.5">
          <Button href="#plans">View Protection Plans</Button>
          <Button href="#stores" variant="ghost">Find Your Nearest Kiosk</Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 grid max-w-lg grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'border-l border-white/15 px-4' : 'pr-4'}>
              <Counter value={s.value} suffix={s.suffix} />
              <span className="mt-1 block text-[0.78rem] leading-snug text-white/70">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 shadow-brand backdrop-blur-md"
        >
          <ShieldCheck className="text-green-ink" size={30} strokeWidth={1.6} />
          <div>
            <strong className="block font-display text-[1.05rem] font-extrabold text-white">1-Year</strong>
            <span className="text-[0.74rem] text-white/70">Display Damage Warranty</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
