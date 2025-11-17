'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Target, Zap, Users, CheckCircle2, Phone, Award, ArrowRight, HeartHandshake } from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { MovingBorder } from '@/components/aceternity/moving-border'
import CTASection from '@/components/cta-section'

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Mission */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                  <Target className="h-5 w-5 text-[#F37325]" />
                  <span className="text-lg font-semibold text-[#1C3364]">Onze Missie</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                  Zorg die <GradientText>werkt</GradientText>
                </h1>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Wij geloven in zorg die werkt. Dat begint met snelheid en betrouwbaarheid — maar het gaat verder dan dat.
                  </p>
                  
                  <p>
                    Wij willen dat zorginstellingen voelen: er wordt met ons meegedacht. En dat zorgprofessionals denken: hier kan ik iets betekenen.
                  </p>
                  
                  <p>
                    Ons doel: mensen bij elkaar brengen die elkaar versterken. Zodat de zorg vooruit kan — ook als het even tegenzit.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact">
                    <ScaleIn delay={400} duration={700}>
                      <MovingBorder
                        duration={8000}
                        className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" />
                          <span>Neem contact op</span>
                        </div>
                      </MovingBorder>
                    </ScaleIn>
                  </Link>
                  <Link href="/zorgprofessionals">
                    <ScaleIn delay={500} duration={700}>
                      <MovingBorder
                        duration={10000}
                        className="bg-white hover:bg-orange-50 text-[#1C3364] px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Voor zorgprofessionals</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </MovingBorder>
                    </ScaleIn>
                  </Link>
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

      {/* The Power of the Right Match */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              De kracht van de <GradientText>juiste match</GradientText>
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Goede zorg vraagt om de juiste mensen op de juiste plek.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Bij JM Zorgpartners draait het om één ding: <span className="font-bold text-[#1C3364]">de juiste match</span>.
              </p>
              
              <p>
                Een goede match is meer dan een vinkje achter diploma&apos;s of ervaring. Het gaat om mensen die passen bij de organisatie, het team en de zorgsituatie.
              </p>
              
              <p>
                Daarom luisteren we, schakelen we snel en denken we actief mee. We vullen geen gaten, we versterken.
              </p>
              
              <p>
                Met de juiste match ontstaat rust, vertrouwen en ruimte voor betere zorg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Distinguishes Us */}
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
                      titel: 'We begrijpen wat er speelt – aan beide kanten van de lijn',
                      tekst: 'We kennen de uitdagingen van zorginstellingen én de wensen van zorgprofessionals. Deze dubbele expertise maakt ons uniek.'
                    },
                    {
                      titel: 'We schakelen snel zonder in te leveren op kwaliteit',
                      tekst: 'Snelheid is belangrijk, maar nooit ten koste van zorgvuldigheid. We combineren efficiëntie met grondige screening.'
                    },
                    {
                      titel: 'We leveren alleen mensen waar we zelf volledig achter staan',
                      tekst: 'Elke professional die we voorstellen is door ons persoonlijk gescreend. We staan garant voor kwaliteit en betrouwbaarheid.'
                    },
                    {
                      titel: 'We zoeken versterking, niet alleen opvulling',
                      tekst: 'We kijken verder dan alleen het invullen van een vacature. We versterken teams met mensen die écht bijdragen aan betere zorg.'
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
                
                <div className="mt-8 p-6 bg-gradient-to-r from-[#1C3364]/5 to-[#F37325]/5 rounded-2xl border-l-4 border-[#F37325]">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#1C3364]">Zorginstellingen</span> waarderen onze betrokkenheid en de mensen die écht passen.<br />
                    <span className="font-bold text-[#1C3364]">Zorgprofessionals</span> waarderen onze duidelijke communicatie, eerlijke aanpak en het gevoel dat we er ook voor hen zijn.
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/images/values-image.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
                tekst: 'Wij komen onze afspraken na — helder, eerlijk en op tijd. Wat we beloven, maken we waar.'
              },
              {
                icon: Zap,
                titel: 'Snelheid',
                tekst: 'Een aanvraag vandaag? Dan schakelen wij vandaag. We begrijpen dat tijd cruciaal is in de zorg.'
              },
              {
                icon: CheckCircle2,
                titel: 'Kwaliteit',
                tekst: 'We selecteren zorgvuldig en leveren uitsluitend professionals die voldoen aan onze hoge kwaliteitsnormen.'
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

      {/* Collaboration Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeContent>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                <Users className="h-5 w-5 text-[#F37325]" />
                <span className="text-lg font-semibold text-[#1C3364]">Samen werken = samen sterker</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                Of u nu opdrachtgever bent of <GradientText>zorgprofessional</GradientText>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                wij geloven in duurzame samenwerking, duidelijke communicatie en echte betrokkenheid.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                We denken mee, kijken vooruit en doen wat we beloven. Zo bouwen we samen aan iets wat werkt — voor iedereen.
              </p>
              
              <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1C3364] to-[#2a4a8f] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C3364] mb-4">Voor opdrachtgevers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Betrouwbare partners die meedenken over uw personeelsbehoeften. Van tijdelijke ondersteuning tot structurele oplossingen.
                  </p>
                  <div className="mt-6">
                    <Link href="/opdrachtgevers">
                      <ScaleIn delay={600} duration={700}>
                        <MovingBorder
                          duration={8000}
                          className="bg-[#1C3364] hover:bg-[#2a4a8f] text-white px-6 py-3 font-bold w-full"
                          containerClassName="w-full"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span>Meer informatie</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </MovingBorder>
                      </ScaleIn>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F37325] to-[#d96420] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <HeartHandshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C3364] mb-4">Voor zorgprofessionals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Een partner die uw carrière serieus neemt. We luisteren naar uw wensen en vinden de perfecte werkplek voor u.
                  </p>
                  <br />
                  <div className="mt-6">
                    <Link href="/zorgprofessionals">
                      <ScaleIn delay={700} duration={700}>
                        <MovingBorder
                          duration={10000}
                          className="bg-[#F37325] hover:bg-[#d96420] text-white px-6 py-3 font-bold w-full"
                          containerClassName="w-full"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span>Meer informatie</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </MovingBorder>
                      </ScaleIn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
