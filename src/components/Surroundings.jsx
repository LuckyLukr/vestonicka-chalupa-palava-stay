import React from 'react'

export default function Surroundings() {
  return (
    <section id="okoli" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-pine">Okolí a tipy na výlety</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Pálava, víno, příroda a pohodová atmosféra</h2>
          <p className="mt-4 text-lg leading-8 text-ink/75">
            Věstonická Chalupa je ideálním výchozím místem pro objevování krás jižní Moravy — od vinařských stezek až po klidná rána s výhledem do krajiny.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-4xl bg-cream p-6 shadow-card">
            <div className="text-2xl">🍷</div>
            <h3 className="mt-4 text-lg font-bold text-pine">Vinařská oblast</h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">
              Ochutnávky, sklípky i večerní procházky mezi vinicemi patří k největším zážitkům okolí.
            </p>
          </article>

          <article className="rounded-4xl bg-cream p-6 shadow-card">
            <div className="text-2xl">🚴</div>
            <h3 className="mt-4 text-lg font-bold text-pine">Cyklostezky a výlety</h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">
              Krajina kolem Pálavy je jako stvořená pro aktivní dny na kole i nenáročné výlety autem.
            </p>
          </article>

          <article className="rounded-4xl bg-cream p-6 shadow-card">
            <div className="text-2xl">🌄</div>
            <h3 className="mt-4 text-lg font-bold text-pine">Příroda a výhledy</h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">
              Malebné trasy, kopce a panoramata dělají z této oblasti jedno z nejkrásnějších míst na Moravě.
            </p>
          </article>

          <article className="rounded-4xl bg-cream p-6 shadow-card">
            <div className="text-2xl">☕</div>
            <h3 className="mt-4 text-lg font-bold text-pine">Klidné tempo pobytu</h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">
              Ať už plánujete aktivní víkend nebo jen pomalý odpočinek, tady si snadno nastavíte vlastní rytmus.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
