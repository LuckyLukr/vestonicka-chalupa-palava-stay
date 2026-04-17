import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white/80 bg-blur border border-white/60 shadow-soft rounded-full px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#hero" className="focus-ring inline-flex items-center gap-3 rounded-full" aria-label="Přejít na úvod">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-white shadow-card">
                <span className="text-lg">🏡</span>
              </div>
              <div>
                <p className="text-sm font-extrabold text-pine leading-none">Věstonická Chalupa</p>
                <p className="text-xs text-pine/70">Dolní Věstonice • Pálava</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Hlavní navigace">
              <a href="#galerie" className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-pine transition-all duration-200">Galerie</a>
              <a href="#vybaveni" className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-pine transition-all duration-200">O chalupě</a>
              <a href="#kapacita" className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-pine transition-all duration-200">Kapacita</a>
              <a href="#cenik" className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-pine transition-all duration-200">Ceník</a>
              <a href="#lokalita" className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-pine transition-all duration-200">Mapa</a>
              <a href="#kontakt" className="focus-ring inline-flex items-center rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-white hover:bg-pine/90 transition-all duration-200 shadow-card">Kontaktovat majitele</a>
            </nav>

            <button
              type="button"
              onClick={toggleMenu}
              className="focus-ring lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand text-pine hover:bg-stone transition-all duration-200"
              aria-label="Otevřít navigaci"
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <div id="mobileMenu" className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`} aria-label="Mobilní navigace">
            <div className="mt-2 grid gap-2 rounded-3xl bg-white p-3 shadow-card">
              <a href="#galerie" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">Galerie</a>
              <a href="#vybaveni" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">O chalupě</a>
              <a href="#kapacita" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">Kapacita</a>
              <a href="#cenik" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">Ceník</a>
              <a href="#poptavka" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">Poptávka</a>
              <a href="#lokalita" onClick={closeMenu} className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-sand transition-all duration-200">Mapa</a>
              <a href="#kontakt" onClick={closeMenu} className="focus-ring rounded-2xl bg-pine px-4 py-3 text-sm font-semibold text-white hover:bg-pine/90 transition-all duration-200">Kontaktovat majitele</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
