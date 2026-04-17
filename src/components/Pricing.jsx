import React from 'react'

export default function Pricing() {
  return (
    <section id="cenik" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pine shadow-card">Ceník</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Jasné podmínky a přehledné ceny</h2>
          <p className="mt-4 text-lg leading-8 text-ink/75">
            Ceník je nastaven tak, aby byl srozumitelný a férový pro kratší i delší pobyty během roku.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 shadow-soft">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-4xl bg-sand p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pine/70">Týdenní pobyt</p>
                <p className="mt-3 text-3xl font-extrabold text-pine">25 000 Kč</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">Cena za celý týdenní pobyt v chalupě.</p>
              </article>

              <article className="rounded-4xl bg-sand p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pine/70">1 noc do 7 osob</p>
                <p className="mt-3 text-3xl font-extrabold text-pine">4 000 Kč</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">Minimální cena pronájmu celé chaty na jednu noc.</p>
              </article>

              <article className="rounded-4xl bg-sand p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pine/70">Od 8 osob</p>
                <p className="mt-3 text-3xl font-extrabold text-pine">600 Kč</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">Za osobu / noc při vyšším počtu hostů.</p>
              </article>

              <article className="rounded-4xl bg-sand p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-pine/70">Letní prázdniny</p>
                <p className="mt-3 text-3xl font-extrabold text-pine">25 000 Kč / týden</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">Pouze turnusově od soboty do soboty, max. 10 osob.</p>
              </article>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-pine p-6 sm:p-8 text-white shadow-soft">
            <h3 className="text-2xl font-extrabold">Důležité informace k pobytu</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/85">
              <li className="flex gap-3"><span>•</span><span>Chatu pronajímáme od <strong>dvou nocí</strong>.</span></li>
              <li className="flex gap-3"><span>•</span><span>Mimo sezónu je možné pronajmout chalupu i na <strong>víkend</strong>.</span></li>
              <li className="flex gap-3"><span>•</span><span>V období letních prázdnin probíhá pronájem <strong>turnusově od soboty do soboty</strong>.</span></li>
              <li className="flex gap-3"><span>•</span><span>Maximální kapacita během letních prázdnin je <strong>10 osob</strong>.</span></li>
              <li className="flex gap-3"><span>•</span><span>Pro individuální domluvu kratších i delších pobytů je nejlepší kontaktovat majitele přímo.</span></li>
            </ul>
            <a href="#poptavka" className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pine hover:bg-sand transition-all duration-200">
              Poptávka a rezervace
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
