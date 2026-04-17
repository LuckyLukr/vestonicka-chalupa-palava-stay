import React from 'react'

export default function Inquiry() {
  return (
    <section id="poptavka" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 shadow-soft">
            <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-pine">Poptávka a rezervace</span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-pine">Jednoduše, osobně a bez složitého rezervačního systému</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Pokud máte zájem o pronájem, stačí zavolat nebo napsat e-mail. Rádi vám potvrdíme dostupnost termínu, cenu i další podrobnosti k pobytu.
            </p>

            <div className="mt-8 rounded-4xl bg-sand p-6">
              <h3 className="text-xl font-bold text-pine">Jak probíhá rezervace</h3>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-ink/75">
                <li className="flex gap-3"><span className="text-pine">1.</span><span>Po potvrzení zájmu o pobyt je potřeba do <strong>5 dnů</strong> uhradit rezervační poplatek ve výši <strong>1/2 z celkové ceny</strong>.</span></li>
                <li className="flex gap-3"><span className="text-pine">2.</span><span>Po uhrazení rezervačního poplatku bude pobyt <strong>závazně rezervován</strong>.</span></li>
                <li className="flex gap-3"><span className="text-pine">3.</span><span>Pro rychlé informace o termínu nebo podmínkách je nejlepší <strong>zavolat nebo napsat e-mail</strong>.</span></li>
              </ul>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="tel:+420603576670" className="focus-ring rounded-3xl border border-pine/10 bg-cream p-5 hover:bg-sand transition-all duration-200">
                <p className="text-sm text-ink/60">Telefon</p>
                <p className="mt-1 text-lg font-bold text-pine">+420 603 576 670</p>
              </a>
              <a href="tel:+420728649081" className="focus-ring rounded-3xl border border-pine/10 bg-cream p-5 hover:bg-sand transition-all duration-200">
                <p className="text-sm text-ink/60">Telefon</p>
                <p className="mt-1 text-lg font-bold text-pine">+420 728 649 081</p>
              </a>
              <a href="mailto:v.macanova@seznam.cz" className="focus-ring rounded-3xl border border-pine/10 bg-cream p-5 hover:bg-sand transition-all duration-200 sm:col-span-2">
                <p className="text-sm text-ink/60">E-mail</p>
                <p className="mt-1 text-lg font-bold text-pine break-all">v.macanova@seznam.cz</p>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-pine p-6 sm:p-8 text-white shadow-soft">
            <h3 className="text-2xl font-extrabold">Rychlý kontakt</h3>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Pro rychlé info o volných termínech, ceně nebo možnostech pobytu můžete zavolat nebo poslat e-mail. Osobní domluva je nejrychlejší cesta.
            </p>

            <form className="mt-8 grid gap-4" aria-label="Kontaktní poptávka">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">Jméno</label>
                <input id="name" type="text" placeholder="Např. Jana Nováková" className="focus-ring w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/55" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">E-mail</label>
                <input id="email" type="email" placeholder="vas@email.cz" className="focus-ring w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/55" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">Zpráva</label>
                <textarea id="message" rows={5} placeholder="Dobrý den, rádi bychom se zeptali na volný termín pro pobyt..." className="focus-ring w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/55"></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+420603576670" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pine hover:bg-sand transition-all duration-200">
                  Zavolat
                </a>
                <a href="mailto:v.macanova@seznam.cz" className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200">
                  Napsat e-mail
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
