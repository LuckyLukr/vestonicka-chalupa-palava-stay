import React from 'react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-sand to-stone p-6 sm:p-8 lg:p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pine shadow-card">Kontakt</span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Domluvte si svůj pobyt přímo s majitelem</h2>
              <p className="mt-4 text-lg leading-8 text-ink/75">
                Osobní kontakt je u Věstonické Chalupy tou nejlepší cestou. Rychle zjistíte dostupnost, podmínky i možnosti konkrétního termínu.
              </p>
            </div>

            <div className="grid gap-4">
              <article className="rounded-4xl bg-white p-5 shadow-card">
                <p className="text-sm text-ink/60">Telefon</p>
                <a href="tel:+420603576670" className="focus-ring mt-2 inline-block text-xl font-bold text-pine hover:text-clay transition-all duration-200">+420 603 576 670</a>
              </article>
              <article className="rounded-4xl bg-white p-5 shadow-card">
                <p className="text-sm text-ink/60">Telefon</p>
                <a href="tel:+420728649081" className="focus-ring mt-2 inline-block text-xl font-bold text-pine hover:text-clay transition-all duration-200">+420 728 649 081</a>
              </article>
              <article className="rounded-4xl bg-white p-5 shadow-card">
                <p className="text-sm text-ink/60">E-mail</p>
                <a href="mailto:v.macanova@seznam.cz" className="focus-ring mt-2 inline-block text-xl font-bold text-pine hover:text-clay transition-all duration-200 break-all">v.macanova@seznam.cz</a>
              </article>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="tel:+420603576670" className="focus-ring inline-flex items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white hover:bg-pine/90 transition-all duration-200">
                  Zavolat nyní
                </a>
                <a href="mailto:v.macanova@seznam.cz" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pine hover:bg-cream transition-all duration-200">
                  Odeslat e-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
