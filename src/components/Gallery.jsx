import React from 'react'

export default function Gallery() {
  return (
    <section id="galerie" className="relative section-wave overflow-hidden py-20 sm:py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-pine">Fotogalerie</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Místo, kde si odpočinete hned po příjezdu</h2>
          <p className="mt-4 text-lg leading-8 text-ink/75">
            Stylová galerie přibližuje atmosféru pobytu — od klidných interiérů přes posezení s grilem až po kouzlo okolní krajiny.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="group overflow-hidden rounded-4xl bg-cream shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="p-2">
              <img
                src="https://picsum.photos/700/840?random=21"
                alt="Hlavní pohled na chalupu a její okolí"
                className="h-80 w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-5 pb-5">
              <h3 className="text-lg font-bold text-pine">Pohoda od prvního dojmu</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Příjemný venkovský charakter v moderním, čistém a útulném pojetí.</p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-4xl bg-sand shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="p-2">
              <img
                src="/images/tiles-1.png"
                alt="Vizuální náhled dodané fotografie pro dlaždici webu"
                className="h-80 w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-5 pb-5">
              <h3 className="text-lg font-bold text-pine">Detaily, které tvoří atmosféru</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Tuto fotografii lze snadno nahradit finálními snímky interiéru nebo exteriéru chalupy.</p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-4xl bg-cream shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="p-2">
              <img
                src="https://picsum.photos/700/840?random=23"
                alt="Interiér chalupy s pohodlným zázemím"
                className="h-80 w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-5 pb-5">
              <h3 className="text-lg font-bold text-pine">Útulný interiér</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Měkké tvary, přírodní tóny a pohodlí pro dlouhé večery po výletech.</p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-4xl bg-sand shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="p-2">
              <img
                src="https://picsum.photos/700/840?random=24"
                alt="Krajina Pálavy a vinařská oblast v okolí"
                className="h-80 w-full rounded-[1.5rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-5 pb-5">
              <h3 className="text-lg font-bold text-pine">Pálava na dosah</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">Rána s výhledem, vinařské stezky, cyklotrasy a klidná atmosféra jižní Moravy.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
