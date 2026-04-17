import React from 'react'

export default function Capacity() {
  return (
    <section id="kapacita" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-pine">Pokoje a kapacita</span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Přehledné zázemí pro rodiny i skupiny přátel</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Chalupa nabízí 3 ložnice a pohodlnou kapacitu až pro 8 hostů. Rozložení je praktické, přehledné a vhodné pro víkend i delší pobyt.
            </p>
          </div>
          <div className="rounded-4xl bg-cream px-6 py-5 shadow-card">
            <p className="text-sm text-ink/60">Hlavní kapacita</p>
            <p className="text-3xl font-extrabold text-pine">3 ložnice • až 8 hostů</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-4xl bg-cream p-7 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🛏️</div>
            <h3 className="mt-5 text-xl font-bold text-pine">3 samostatné ložnice</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Dostatek soukromí pro rodiny s dětmi i skupiny hostů, kteří chtějí pohodlný odpočinek.
            </p>
          </article>

          <article className="rounded-4xl bg-cream p-7 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">👨‍👩‍👧‍👦</div>
            <h3 className="mt-5 text-xl font-bold text-pine">Až 8 hostů</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Ideální velikost pro společný pobyt, kdy si každý najde svůj prostor a zároveň zůstane vše příjemně komorní.
            </p>
          </article>

          <article className="rounded-4xl bg-cream p-7 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🏠</div>
            <h3 className="mt-5 text-xl font-bold text-pine">Celá chalupa pro vás</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Pronajímá se celý objekt, takže si můžete užít soukromí, klid a nerušenou atmosféru pobytu.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
