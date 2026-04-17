import React from 'react'

export default function Amenities() {
  return (
    <section id="vybaveni" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pine shadow-card">O chalupě a vybavení</span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Plně vybavené zázemí pro relax na Pálavě</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Věstonická Chalupa je připravená pro pohodlný pobyt během rodinné dovolené, víkendového úniku i delšího odpočinku ve vinařském kraji.
              V interiéru i exteriéru najdete vše, co potřebujete pro klidné a příjemné dny.
            </p>
            <div className="mt-8 rounded-4xl bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-clay">Co vás čeká</p>
              <ul className="mt-4 space-y-4 text-ink/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg">🍳</span>
                  <span><strong className="text-pine">Vybavená kuchyň</strong> pro společné vaření, snídaně i pohodové večery s vínem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg">📺</span>
                  <span><strong className="text-pine">TV</strong> pro odpočinek po dni plném výletů, koupání nebo cyklovýletů.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg">🔥</span>
                  <span><strong className="text-pine">Vnitřní i venkovní posezení s grilem</strong>, ideální pro letní večery i posezení s přáteli.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg">🚿</span>
                  <span><strong className="text-pine">Koupelna se sprchovým koutem</strong> pro komfortní každodenní zázemí.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-lg">🚪</span>
                  <span><strong className="text-pine">Samostatné WC</strong> pro větší pohodlí během pobytu více hostů.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-4xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-2xl">🍽️</div>
              <h3 className="mt-5 text-xl font-bold text-pine">Kuchyň pro společné chvíle</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Dostatek prostoru pro přípravu jednoduchých snídaní i delších večerních posezení u stolu.
              </p>
            </article>

            <article className="rounded-4xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-2xl">🛋️</div>
              <h3 className="mt-5 text-xl font-bold text-pine">Pohodlné zázemí</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Interiér působí čistě, útulně a přirozeně — přesně tak, aby se tu dobře odpočívalo.
              </p>
            </article>

            <article className="rounded-4xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-2xl">🌿</div>
              <h3 className="mt-5 text-xl font-bold text-pine">Venkovní posezení</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Příjemné místo na ranní kávu, grilování i večerní relax po návratu z výletu po Pálavě.
              </p>
            </article>

            <article className="rounded-4xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-2xl">🕯️</div>
              <h3 className="mt-5 text-xl font-bold text-pine">Klidná atmosféra</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Chalupa spojuje pohodlí ubytování s poklidnou energií vinařské oblasti a blízké přírody.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
