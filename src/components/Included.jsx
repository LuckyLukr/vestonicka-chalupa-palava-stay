import React from 'react'

export default function Included() {
  return (
    <section id="vcene" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-pine">Co je v ceně</span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Vše podstatné pro pohodlný pobyt</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Cena zahrnuje praktické zázemí i základní komfort, aby byl váš pobyt co nejpříjemnější od prvního dne.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-4xl bg-cream p-6 shadow-card">
              <div className="text-2xl">🧾</div>
              <h3 className="mt-4 text-lg font-bold text-pine">Ubytovací poplatky</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Součást ceny pobytu bez dalších skrytých překvapení.</p>
            </article>

            <article className="rounded-4xl bg-cream p-6 shadow-card">
              <div className="text-2xl">🏡</div>
              <h3 className="mt-4 text-lg font-bold text-pine">Pronájem chaty s příslušenstvím</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">K dispozici je celý objekt i jeho běžné vybavení.</p>
            </article>

            <article className="rounded-4xl bg-cream p-6 shadow-card">
              <div className="text-2xl">🛏️</div>
              <h3 className="mt-4 text-lg font-bold text-pine">Ložní prádlo</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Připravené pro pohodlné přivítání a klidný spánek.</p>
            </article>

            <article className="rounded-4xl bg-cream p-6 shadow-card">
              <div className="text-2xl">🧺</div>
              <h3 className="mt-4 text-lg font-bold text-pine">Ručníky</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Základní komfort pro bezstarostný pobyt v chalupě.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
