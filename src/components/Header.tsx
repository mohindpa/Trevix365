import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Technology', href: '#technology' },
  { label: 'How It Works', href: '#how' },
  { label: 'Plans', href: '#plans' },
  { label: 'Warranty', href: '#warranty' },
  { label: 'Stores', href: '#stores' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('tv-theme')
    const isDark = stored ? stored === 'dark' : true
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('tv-theme', next ? 'dark' : 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next ? '#060d1d' : '#071A3D')
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[74px] flex items-center transition-all duration-300 border-b',
        scrolled
          ? 'border-line bg-[var(--bg)]/85 backdrop-blur-xl backdrop-saturate-150 shadow-brand-sm'
          : 'border-transparent',
      )}
    >
      <div className="container-x flex items-center gap-5">
        {/* Over the hero the backdrop is dark in both themes, so the white
            wordmark is used until the header picks up its solid background. */}
        <a href="#home" aria-label="Trevix365 home" className="mr-auto shrink-0">
          <img
            src={scrolled ? '/assets/img/logo.png' : '/assets/img/logo-light.png'}
            alt="Trevix365 — custom-cut screen protection"
            width={1072}
            height={300}
            className={cn('h-[34px] w-auto', scrolled && 'dark:hidden')}
          />
          {scrolled && (
            <img src="/assets/img/logo-light.png" alt="" aria-hidden="true" width={1072} height={300} className="hidden h-[34px] w-auto dark:block" />
          )}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[0.92rem] font-medium text-muted transition-colors hover:text-head"
            >
              {n.label}
              <span className="brand-grad absolute -bottom-1.5 left-0 h-0.5 w-0 rounded transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#stores"
            className="brand-grad rounded-full px-5 py-2.5 font-display text-[0.85rem] font-bold text-[#052033] shadow-[0_10px_24px_-12px_rgb(0_184_201/.6)] transition-transform hover:-translate-y-0.5"
          >
            Find a Kiosk
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid size-[42px] place-items-center rounded-xl border border-line bg-card text-head shadow-brand-sm transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal-ink"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-[42px] place-items-center rounded-xl border border-line bg-card text-head shadow-brand-sm lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-[74px] border-b border-line bg-[var(--bg)] px-6 pb-6 pt-2 shadow-brand lg:hidden"
            aria-label="Mobile"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3.5 text-[0.95rem] font-medium text-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#stores"
              onClick={() => setOpen(false)}
              className="brand-grad mt-4 block rounded-full py-3 text-center font-display font-bold text-[#052033]"
            >
              Find a Kiosk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
