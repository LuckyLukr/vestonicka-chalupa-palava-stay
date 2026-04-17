import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-pine text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr] items-start">
          <div>
            <div className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg">🏡</div>
              <div>
                <p className="text-sm font-extrabold leading-none">Věstonická Chalupa</p>
                <p className="text-xs text-white/60">Dolní Věstonice • Pálava</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Klidné a útulné místo pro pobyt v srdci vinařské oblasti jižní Moravy.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Navigace</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><a href="#galerie" className="hover:text-white transition-colors duration-200">Galerie</a></li>
              <li><a href="#vybaveni" className="hover:text-white transition-colors duration-200">O chalupě</a></li>
              <li><a href="#kapacita" className="hover:text-white transition-colors duration-200">Kapacita</a></li>
              <li><a href="#cenik" className="hover:text-white transition-colors duration-200">Ceník</a></li>
              <li><a href="#lokalita" className="hover:text-white transition-colors duration-200">Mapa</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors duration-200">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Kontakt</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href="tel:+420603576670" className="hover:text-white transition-colors duration-200">+420 603 576 670</a>
              </li>
              <li>
                <a href="tel:+420728649081" className="hover:text-white transition-colors duration-200">+420 728 649 081</a>
              </li>
              <li>
                <a href="mailto:v.macanova@seznam.cz" className="hover:text-white transition-colors duration-200 break-all">v.macanova@seznam.cz</a>
              </li>
              <li className="pt-1 text-white/60">
                Dolní Věstonice 296, 691 29
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Věstonická Chalupa. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
