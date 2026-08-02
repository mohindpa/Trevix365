import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ---------------- Motion presets ---------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

/** Scroll-reveal wrapper: animates children in once, when in view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ---------------- Building blocks ---------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.18em] text-teal-ink',
        className,
      )}
    >
      <span className="size-2 rounded-full bg-green shadow-[0_0_0_4px_rgb(122_201_67/.18)]" />
      {children}
    </span>
  )
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
  center?: boolean
}) {
  return (
    <div className={cn('max-w-2xl', center && 'mx-auto text-center')}>
      <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.015em]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-3.5 text-[1.05rem] text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({ children, href, variant = 'primary', className, type, onClick }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-display text-[0.95rem] font-bold px-7 py-[0.9rem] transition-all duration-300 will-change-transform'
  const styles =
    variant === 'primary'
      ? 'brand-grad text-[#052033] shadow-[0_12px_28px_-12px_rgb(0_184_201/.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-12px_rgb(0_184_201/.75)]'
      : 'bg-card text-head border border-line shadow-brand-sm hover:-translate-y-0.5 hover:border-teal hover:text-teal-ink'

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-line bg-card p-7 shadow-brand-sm transition-all duration-300',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function IconBox({ children, tone = 'teal' }: { children: ReactNode; tone?: 'teal' | 'green' }) {
  return (
    <div
      className={cn(
        'grid size-13 place-items-center rounded-2xl border p-3',
        tone === 'teal'
          ? 'border-teal/25 bg-teal/10 text-teal-ink'
          : 'border-green/25 bg-green/10 text-green-ink',
      )}
    >
      {children}
    </div>
  )
}
