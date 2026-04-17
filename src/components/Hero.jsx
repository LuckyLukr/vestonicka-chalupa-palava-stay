import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/70 px-4 py-2 text-sm text-pine shadow-soft">
              <span>🍇</span>
              <span>Ubytování v srdci Pálavy a vinařské oblasti</span>
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pine">
              Věstonická Chalupa
            </h1>
            <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-8 text-ink/80">
              Klidné a útulné místo pro pobyt v Dolních Věstonicích — ideální pro odpočinek, výlety po Pálavě,
              vinařské zážitky i pohodové večery s rodinou nebo přáteli.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-pine px-7 py-4 text-base font-semibold text-white shadow-card hover:-translate-y-0.5 hover:bg-pine/90 transition-all duration-200"
              >
                Kontaktovat majitele
              </a>
              <a
                href="#cenik"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-pine/15 bg-white px-7 py-4 text-base font-semibold text-pine hover:bg-sand transition-all duration-200"
              >
                Zobrazit ceník
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <article className="rounded-3xl bg-white/80 p-5 shadow-card">
                <p className="text-2xl font-extrabold text-pine">až 8</p>
                <p className="mt-1 text-sm text-ink/70">hostů pro pohodový pobyt</p>
              </article>
              <article className="rounded-3xl bg-white/80 p-5 shadow-card">
                <p className="text-2xl font-extrabold text-pine">3</p>
                <p className="mt-1 text-sm text-ink/70">ložnice pro rodinu i přátele</p>
              </article>
              <article className="rounded-3xl bg-white/80 p-5 shadow-card">
                <p className="text-2xl font-extrabold text-pine">Pálava</p>
                <p className="mt-1 text-sm text-ink/70">na dosah pěšky i na kole</p>
              </article>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-clay/20 blur-2xl"></div>
            <div className="absolute -right-4 -bottom-6 h-28 w-28 rounded-full bg-sage/20 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
              <div className="grid gap-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://picsum.photos/1200/820?random=11"
                    alt="Útulná chalupa v přírodním prostředí Pálavy"
                    className="h-[360px] sm:h-[430px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/40 via-transparent to-transparent"></div>
                  <div className="absolute left-5 bottom-5 rounded-2xl bg-white/90 px-4 py-3 shadow-card">
                    <p className="text-sm font-semibold text-pine">Dolní Věstonice 296</p>
                    <p className="text-xs text-ink/70">klidná základna pro víno, výlety i odpočinek</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-[1.25rem] bg-sand p-2">
                    <img
                      src="https://picsum.photos/600/420?random=12"
                      alt="Příjemné venkovní posezení u chalupy"
                      className="h-36 w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] bg-sand p-2">
                    <img
                      src="https://picsum.photos/600/420?random=13"
                      alt="Atmosféra vinařské oblasti a Pálavy"
                      className="h-36 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
