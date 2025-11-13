'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Target, Zap, Users, CheckCircle2, Phone, Mail, Award, ArrowRight, Clock, HeartHandshake } from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { MovingBorder } from '@/components/aceternity/moving-border'
import ScrollToTop from '@/components/scroll-to-top'

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <FadeContent>
              <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight mb-6">
                Over <GradientText>JM Zorgpartners</GradientText>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Jouw partner in de zorg – voor professionals én zorginstellingen
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                  <Target className="h-5 w-5 text-[#F37325]" />
                  <span className="text-lg font-semibold text-[#1C3364]">Onze Missie</span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                  De <GradientText>juiste match</GradientText> maken
                </h2>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Bij JM Zorgpartners draait alles om <span className="font-bold text-[#1C3364]">de juiste match</span>. 
                    Wij verbinden zorgprofessionals met zorginstellingen op een manier die verder gaat dan alleen papier en procedures.
                  </p>
                  
                  <p>
                    Wij begrijpen dat goede zorg begint bij gedreven en betrokken mensen. Daarom staan wij voor 
                    <span className="font-bold text-[#1C3364]"> kwaliteit, vertrouwen en persoonlijk contact</span> – 
                    omdat dat het verschil maakt.
                  </p>
                  
                  <p>
                    Of je nu een zorgprofessional bent op zoek naar werk dat bij je past, of een instelling die 
                    betrouwbaar personeel nodig heeft – wij helpen je verder.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800"
                  alt="Team JM Zorgpartners"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              Waar wij voor <GradientText>staan</GradientText>
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4">
              Drie kernwaarden die ons werk definiëren
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                titel: 'Betrouwbaarheid',
                tekst: 'We doen wat we beloven. Zorgprofessionals én zorginstellingen kunnen op ons rekenen – altijd.'
              },
              {
                icon: Zap,
                titel: 'Snelheid',
                tekst: 'Of je nu snel personeel nodig hebt of direct aan de slag wilt – wij zorgen ervoor dat het gebeurt.'
              },
              {
                icon: CheckCircle2,
                titel: 'Kwaliteit',
                tekst: 'We gaan nooit voor snelheid ten koste van kwaliteit. Alleen gescreende professionals, altijd gedegen matches.'
              },
            ].map((waarde, idx) => (
              <ScaleIn key={waarde.titel} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1C3364] to-[#2a4a8f] rounded-2xl flex items-center justify-center mb-6">
                    <waarde.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C3364] mb-4">{waarde.titel}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{waarde.tekst}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800"
                  alt="Persoonlijke aandacht"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>

            <FadeContent delay={0.2}>
              <div className="space-y-6">
                <AnimatedTitle>
                  Wat ons <GradientText>onderscheidt</GradientText>
                </AnimatedTitle>
                
                <div className="space-y-4">
                  {[
                    {
                      titel: 'Persoonlijke benadering',
                      tekst: 'Je bent geen nummer. Wij kennen jouw naam, jouw situatie en jouw wensen. Elk contact is persoonlijk.'
                    },
                    {
                      titel: 'Jarenlange ervaring in de zorg',
                      tekst: 'We kennen de sector van binnen en van buiten. Dat maakt ons snel, efficiënt en betrouwbaar.'
                    },
                    {
                      titel: 'Landelijke dekking',
                      tekst: 'Van Amsterdam tot Maastricht – we werken door heel Nederland met een groot netwerk.'
                    },
                    {
                      titel: 'Zorgvuldig gescreend personeel',
                      tekst: 'Alle professionals die via ons werken zijn gescreend op diplomas, VOG, referenties en ervaring.'
                    },
                  ].map((punt, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="text-lg font-bold text-[#1C3364] mb-2">{punt.titel}</h4>
                      <p className="text-gray-600">{punt.tekst}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeContent>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                <Users className="h-5 w-5 text-[#F37325]" />
                <span className="text-lg font-semibold text-[#1C3364]">Ons Team</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                Een team dat <GradientText>voor je klaarstaat</GradientText>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Achter JM Zorgpartners staat een gedreven team met passie voor de zorg en oog voor mensen. 
                Wij zijn bereikbaar, betrokken en altijd bereid om mee te denken.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Of je belt voor een spoedvraag of langskomt voor een kennismakingsgesprek – 
                je bent altijd welkom. Want goede zorg begint met écht contact.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={0.3}>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                { naam: 'Jesse Mulder', functie: 'Medeoprichter', image: '/images/team-1.png' },
                { naam: 'Mohamed El Amrani', functie: 'Medeoprichter', image: '/images/team-2.png' },
                { naam: 'Ons Team', functie: 'Recruitment & Support', image: '/images/team-3.png' },
              ].map((persoon, idx) => (
                <ScaleIn key={persoon.naam} delay={idx * 0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64">
                      <Image
                        src={persoon.image}
                        alt={persoon.naam}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#1C3364] mb-1">{persoon.naam}</h3>
                      <p className="text-[#F37325] font-semibold">{persoon.functie}</p>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* CTA Section - Warm en uitnodigend */}
      {/* CTA Sectie - Neem Contact Op */}
      <section className="py-32 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeContent blur duration={800}>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
              Personeel nodig? <span className="text-[#F37325]">Wij helpen je direct</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Neem contact op voor een vrijblijvend gesprek over jouw personeelsbehoefte. Binnen 24 uur hoor je van ons.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <Link href="tel:0850000000">
                <ScaleIn delay={200} duration={700}>
                  <MovingBorder
                    duration={7000}
                    className="bg-[#F37325] hover:bg-[#d96420] text-white px-10 py-5 font-black text-lg"
                    containerClassName="w-full sm:w-auto"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-6 h-6" />
                      <span>Bel 085 - 0000000</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </MovingBorder>
                </ScaleIn>
              </Link>
              <Link href="/contact">
                <ScaleIn delay={300} duration={700}>
                  <MovingBorder
                    duration={9000}
                    className="bg-white hover:bg-gray-50 text-[#1C3364] px-10 py-5 font-black text-lg"
                    containerClassName="w-full sm:w-auto"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>Stuur een bericht</span>
                      <Mail className="w-5 h-5" />
                    </div>
                  </MovingBorder>
                </ScaleIn>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Clock className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Binnen 24 uur reactie</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <HeartHandshake className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Persoonlijk advies</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Geen verplichtingen</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
      <ScrollToTop />
    </main>
  )
}
