import React from 'react'

export default function Location() {
  return (
    <section id="lokalita" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pine shadow-card">Mapa a lokalita</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Skvělé místo pro objevování Pálavy</h2>
          <p className="mt-4 text-lg leading-8 text-ink/75">
            Chalupa se nachází na adrese <strong>Dolní Věstonice 296, 691 29, Dolní Věstonice</strong> — v oblasti, která láká na víno, přírodu, výhledy i pohodové tempo jižní Moravy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft map-glow">
            <div className="overflow-hidden rounded-[1.5rem] bg-sand">
              <svg viewBox="0 0 1200 760" className="h-[380px] sm:h-[480px] w-full" role="img" aria-label="Stylizovaná mapa oblasti Pálavy s vyznačením Dolních Věstonic">
                <defs>
                  <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f6efe4" />
                    <stop offset="100%" stopColor="#ebe2d4" />
                  </linearGradient>
                </defs>
                <rect width="1200" height="760" fill="url(#mapBg)" />
                <path d="M120 570 C 260 500, 300 380, 460 390 S 720 520, 1080 380" stroke="#7F9B7A" strokeWidth="26" fill="none" strokeLinecap="round" opacity="0.8" />
                <path d="M90 220 C 300 180, 430 220, 560 160 S 860 140, 1110 210" stroke="#C98E63" strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.55" />
                <path d="M180 120 C 260 180, 330 250, 380 320 S 520 430, 620 420" stroke="#32453B" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.35" />
                <path d="M730 140 C 810 190, 860 270, 930 300 S 1060 350, 1100 410" stroke="#32453B" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.35" />

                <g opacity="0.9">
                  <ellipse cx="630" cy="260" rx="170" ry="70" fill="#d8c5a8" />
                  <text x="630" y="270" textAnchor="middle" fontSize="34" fontFamily="Arial, sans-serif" fill="#32453B" fontWeight="700">Pálava</text>
                </g>

                <g>
                  <circle cx="520" cy="420" r="20" fill="#C98E63" />
                  <circle cx="520" cy="420" r="48" fill="#C98E63" opacity="0.18" />
                  <circle cx="520" cy="420" r="78" fill="#C98E63" opacity="0.10" />
                  <path d="M520 350 C 560 350, 592 382, 592 422 C 592 490, 520 550, 520 550 C 520 550, 448 490, 448 422 C 448 382, 480 350, 520 350 Z" fill="#32453B" />
                  <circle cx="520" cy="422" r="24" fill="#FBF8F3" />
                </g>

                <g>
                  <rect x="590" y="350" width="280" height="110" rx="26" fill="#ffffff" opacity="0.94" />
                  <text x="620" y="392" fontSize="28" fontFamily="Arial, sans-serif" fill="#32453B" fontWeight="700">Dolní Věstonice 296</text>
                  <text x="620" y="428" fontSize="22" fontFamily="Arial, sans-serif" fill="#6b7280">Věstonická Chalupa • vinařská oblast</text>
                </g>

                <g opacity="0.75">
                  <circle cx="800" cy="520" r="10" fill="#32453B" />
                  <text x="820" y="527" fontSize="24" fontFamily="Arial, sans-serif" fill="#32453B">Mikulov</text>
                  <circle cx="320" cy="535" r="10" fill="#32453B" />
                  <text x="340" y="542" fontSize="24" fontFamily="Arial, sans-serif" fill="#32453B">Novomlýnské nádrže</text>
                  <circle cx="860" cy="250" r="10" fill="#32453B" />
                  <text x="880" y="257" fontSize="24" fontFamily="Arial, sans-serif" fill="#32453B">vinice a stezky</text>
                </g>
              </svg>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-6 sm:p-8 shadow-soft">
            <h3 className="text-2xl font-extrabold text-pine">Proč právě tato lokalita</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/75">
              <li className="flex gap-3"><span>🍇</span><span>V okolí najdete typickou atmosféru jižní Moravy, vinice i sklípky.</span></li>
              <li className="flex gap-3"><span>🥾</span><span>Pálava nabízí krásné výlety, výhledy a trasy pro pěší i cyklisty.</span></li>
              <li className="flex gap-3"><span>🌅</span><span>Lokalita působí klidně, přirozeně a zve ke zpomalení i odpočinku.</span></li>
              <li className="flex gap-3"><span>🚗</span><span>Dobrá dostupnost vám umožní pohodlně plánovat víkend i delší pobyt.</span></li>
            </ul>
            <div className="mt-8 rounded-4xl bg-sand p-5">
              <p className="text-sm text-ink/60">Adresa</p>
              <p className="mt-2 text-lg font-bold text-pine">Dolní Věstonice 296, 691 29, Dolní Věstonice</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
