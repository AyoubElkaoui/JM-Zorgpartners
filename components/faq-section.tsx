'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn, ScaleIn } from '@/components/animations'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
  category: 'algemeen' | 'zorgprofessionals' | 'opdrachtgevers'
}

const faqs: FAQItem[] = [
  {
    category: 'algemeen',
    question: 'Wat doet JM Zorgpartners?',
    answer: 'JM Zorgpartners is een gespecialiseerd uitzendbureau in de zorgsector. Wij verbinden gekwalificeerde zorgprofessionals met zorgorganisaties die op zoek zijn naar personeel. Of het nu gaat om tijdelijke plaatsingen, vaste contracten of spoedopvang, wij bieden flexibele oplossingen voor elke situatie.',
  },
  {
    category: 'algemeen',
    question: 'In welke regio\'s zijn jullie actief?',
    answer: 'Wij zijn momenteel actief in heel Nederland. Onze focus ligt op de Randstad, maar we bedienen zorgorganisaties en professionals door het hele land.',
  },
  {
    category: 'algemeen',
    question: 'Hoe kan ik contact opnemen?',
    answer: 'Je kunt ons bereiken via telefoon op 06 123 456 78, per email via info@jmzorgpartners.nl, of via ons contactformulier. Voor spoedgevallen hebben we een 24/7 spoedlijn beschikbaar.',
  },
  {
    category: 'zorgprofessionals',
    question: 'Welke functie zijn er beschikbaar?',
    answer: 'Wij bemiddelen in diverse zorgfuncties zoals verpleegkundigen, verzorgenden IG, wijkverpleegkundigen, verpleegkundig specialisten, en meer. Bekijk onze vacaturepagina voor actuele openstaande posities.',
  },
  {
    category: 'zorgprofessionals',
    question: 'Moet ik BIG geregistreerd zijn?',
    answer: 'Voor veel functies is BIG registratie verplicht. Dit hangt af van de specifieke functie. Tijdens het intake gesprek bespreken we welke certificeringen en registraties nodig zijn voor jouw gewenste functie.',
  },
  {
    category: 'zorgprofessionals',
    question: 'Hoe werkt het sollicitatieproces?',
    answer: 'Het proces bestaat uit: 1) Sollicitatie via ons formulier of telefonisch contact, 2) Kennismakingsgesprek en intake, 3) Matching met geschikte opdrachten, 4) Voorstelling bij opdrachtgever, 5) Start van je opdracht. Het hele proces kan binnen enkele dagen tot een week verlopen.',
  },
  {
    category: 'zorgprofessionals',
    question: 'Wat zijn de arbeidsvoorwaarden?',
    answer: 'Wij bieden marktconforme salarissen, reiskostenvergoeding, pensioenopbouw, en doorgroeimogelijkheden. De exacte voorwaarden worden besproken tijdens het intake gesprek en zijn afhankelijk van je ervaring en de specifieke opdracht.',
  },
  {
    category: 'zorgprofessionals',
    question: 'Kan ik parttime werken?',
    answer: 'Jazeker! Wij bieden zowel fulltime als parttime mogelijkheden. Tijdens het intake gesprek bespreken we jouw beschikbaarheid en wensen, zodat we de perfecte match kunnen maken.',
  },
  {
    category: 'opdrachtgevers',
    question: 'Voor welke zorgorganisaties werken jullie?',
    answer: 'Wij werken samen met diverse zorgorganisaties: ziekenhuizen, verpleeghuizen, thuiszorgorganisaties, GGZ instellingen, en gehandicaptenzorg. Van kleine lokale organisaties tot grote zorggroepen.',
  },
  {
    category: 'opdrachtgevers',
    question: 'Hoe snel kunnen jullie personeel leveren?',
    answer: 'Voor spoedgevallen kunnen wij binnen 24 uur geschikt personeel leveren via onze spoedlijn. Voor reguliere plaatsingen streven we naar een plaatsing binnen 3-5 werkdagen, afhankelijk van de specifieke wensen en vereisten.',
  },
  {
    category: 'opdrachtgevers',
    question: 'Wat zijn de kosten?',
    answer: 'Onze tarieven zijn transparant en afhankelijk van de functie, ervaring, en duur van de opdracht. Neem contact met ons op voor een vrijblijvende offerte op maat.',
  },
  {
    category: 'opdrachtgevers',
    question: 'Bieden jullie een vervangingsgarantie?',
    answer: 'Ja, wij bieden een vervangingsgarantie. Als een geplaatste professional niet aan de verwachtingen voldoet, zoeken wij kosteloos naar een vervanging binnen de afgesproken periode.',
  },
  {
    category: 'opdrachtgevers',
    question: 'Hoe selecteren jullie kandidaten?',
    answer: 'Wij hanteren een streng selectieproces: verificatie van diploma\'s en certificaten, referentiecheck, persoonlijk intake gesprek, en matching op basis van ervaring, competenties én persoonlijke fit. Kwaliteit staat voorop.',
  },
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<'algemeen' | 'zorgprofessionals' | 'opdrachtgevers'>('algemeen')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Vind snel antwoorden op de meest gestelde vragen
            </p>
          </div>
        </FadeIn>

        {/* Category Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setActiveCategory('algemeen')
                setOpenIndex(null)
              }}
              className={cn(
                'px-6 py-3 rounded-full font-medium transition-all',
                activeCategory === 'algemeen'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              Algemeen
            </button>
            <button
              onClick={() => {
                setActiveCategory('zorgprofessionals')
                setOpenIndex(null)
              }}
              className={cn(
                'px-6 py-3 rounded-full font-medium transition-all',
                activeCategory === 'zorgprofessionals'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              Voor Zorgprofessionals
            </button>
            <button
              onClick={() => {
                setActiveCategory('opdrachtgevers')
                setOpenIndex(null)
              }}
              className={cn(
                'px-6 py-3 rounded-full font-medium transition-all',
                activeCategory === 'opdrachtgevers'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              Voor Opdrachtgevers
            </button>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <ScaleIn key={index} delay={index * 0.05}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-primary flex-shrink-0 transition-transform',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Staat je vraag er niet tussen?
            </p>
            <p className="text-gray-600 mb-6">
              Neem gerust contact met ons op. We helpen je graag verder!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Neem Contact Op
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
