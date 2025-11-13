'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Briefcase, Brain, Users, Baby, Heart, GraduationCap, Globe, 
  Clock, CheckCircle2, FileText, UserCircle, Phone, MapPin, Shield, Award, ArrowRight, HeartHandshake, Stethoscope
} from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { MovingBorder } from '@/components/aceternity/moving-border'

const sectoren = [
  { icon: Brain, naam: 'GGZ', beschrijving: 'Geestelijke gezondheidszorg' },
  { icon: Users, naam: 'Gehandicaptenzorg', beschrijving: 'Begeleiding en ondersteuning' },
  { icon: Baby, naam: 'Jeugdzorg', beschrijving: 'Zorg voor kinderen en jongeren' },
  { icon: Heart, naam: 'Ouderenzorg', beschrijving: 'Woon- en thuiszorg' },
  { icon: Globe, naam: 'Vluchtelingenopvang', beschrijving: 'Begeleiding en opvang' },
  { icon: Baby, naam: 'Kinderopvang', beschrijving: 'Dagopvang en BSO' },
  { icon: GraduationCap, naam: 'Speciaal onderwijs', beschrijving: 'Onderwijsondersteuning' },
]

const vereisten = [
  { icon: Award, titel: 'Relevant diploma', tekst: 'Erkende opleiding in de zorg' },
  { icon: Shield, titel: 'Geldige VOG', tekst: 'Verklaring Omtrent Gedrag' },
  { icon: Clock, titel: '3 jaar ervaring', tekst: 'Minimaal 3 jaar werkervaring' },
  { icon: Heart, titel: 'Betrokken houding', tekst: 'Professioneel en gemotiveerd' },
]

const voordelen = [
  'Jij bepaalt wanneer en waar je werkt',
  'Eerlijke en snelle uitbetaling',
  'Persoonlijke begeleiding – altijd bereikbaar',
  'Duurzame samenwerking waarin je gehoord wordt',
  'Diversiteit aan opdrachten en sectoren',
  'Geen lange wachttijden – snel aan de slag',
]

export default function ZorgprofessionalsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                  <Stethoscope className="h-5 w-5 text-[#F37325]" />
                  <span className="text-base font-semibold text-[#1C3364]">Voor Zorgprofessionals</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-black text-[#1C3364] leading-tight">
                  Werken via <span className="text-[#F37325]">JM Zorgpartners</span>
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ben jij een zorgprofessional met ervaring, betrokkenheid en een groot hart voor de zorg? 
                  Dan zijn wij op zoek naar jou.
                </p>
                
                <p className="text-base text-gray-600">
                  Bij JM Zorgpartners <span className="font-semibold text-[#1C3364]">bepaal jij hoe je wilt werken</span> – 
                  losse diensten of vaste opdrachten, overdag, 's nachts of in het weekend. 
                  Wij luisteren naar jouw voorkeuren en zoeken werk dat écht bij je past – professioneel én persoonlijk.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <MovingBorder duration={8000}>
                    <Link
                      href="#aanmelden"
                      className="px-8 py-4 bg-[#F37325] text-white rounded-xl font-semibold hover:bg-[#d96420] transition-all inline-flex items-center gap-2"
                    >
                      <FileText className="h-5 w-5" />
                      Direct aanmelden
                    </Link>
                  </MovingBorder>
                  
                  <Link
                    href="#sectoren"
                    className="px-8 py-4 border-2 border-[#1C3364] text-[#1C3364] rounded-xl font-semibold hover:bg-[#1C3364] hover:text-white transition-all"
                  >
                    Bekijk sectoren
                  </Link>
                </div>
              </div>
            </FadeContent>
            
            <FadeContent delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
                  alt="Zorgprofessional aan het werk"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Sectoren Section */}
      <section id="sectoren" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364] mb-4">
              In welke <span className="text-[#F37325]">sectoren</span> kun je aan de slag?
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              Via JM Zorgpartners kun je aan de slag in uiteenlopende zorgsectoren. 
              Of je nu korte opdrachten zoekt of langere trajecten – wij zorgen voor een plek die bij jou past.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectoren.map((sector, idx) => (
              <ScaleIn key={sector.naam} delay={idx * 0.1}>
                <CardSpotlight className="h-full">
                  <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#F37325] to-[#ff8c42] rounded-xl flex items-center justify-center">
                        <sector.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-[#1C3364]">{sector.naam}</h3>
                      <p className="text-sm text-gray-600">{sector.beschrijving}</p>
                    </div>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vereisten Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364] mb-4">
              Wat <span className="text-[#F37325]">vragen</span> wij van jou?
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              Wij staan voor kwaliteit en betrouwbaarheid – dat verwachten wij van onze zorgprofessionals, 
              en dat mag jij ook van ons verwachten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vereisten.map((item, idx) => (
              <FadeContent key={item.titel} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F37325] transition-all duration-300 hover:shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#1C3364] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C3364] mb-2">{item.titel}</h3>
                  <p className="text-sm text-gray-600">{item.tekst}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364] mb-4">
              Zo <span className="text-[#F37325]">werkt</span> het
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stap: '1', titel: 'Kennismaken', tekst: 'We plannen een kort gesprek waarin we jouw ervaring, wensen en voorkeuren in kaart brengen.' },
              { stap: '2', titel: 'Aanmelden', tekst: 'Vul ons inschrijfformulier in en upload je documenten. Liever langskomen? Dat kan natuurlijk ook.' },
              { stap: '3', titel: 'Juiste match', tekst: 'We zoeken opdrachten die passen bij jouw profiel. Jij kiest zelf wat bij je past.' },
              { stap: '4', titel: 'Aan de slag!', tekst: 'Ben je akkoord? Dan regelen wij de rest. Jij kunt aan het werk.' },
            ].map((stap, idx) => (
              <ScaleIn key={stap.stap} delay={idx * 0.15}>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F37325] transition-all duration-300 hover:shadow-lg h-full">
                    <div className="absolute -top-5 left-6 w-10 h-10 bg-gradient-to-br from-[#F37325] to-[#ff8c42] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {stap.stap}
                    </div>
                    <h3 className="text-base font-bold text-[#1C3364] mb-2 mt-3">{stap.titel}</h3>
                    <p className="text-sm text-gray-600">{stap.tekst}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"
                  alt="Team van zorgprofessionals"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>

            <FadeContent delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364]">
                  Waarom werken via <span className="text-[#F37325]">JM Zorgpartners?</span>
                </h2>
                
                <p className="text-base text-gray-600">
                  Bij JM Zorgpartners werk je niet alleen voor ons — je werkt <span className="font-semibold text-[#1C3364]">mét ons</span>.
                </p>

                <div className="space-y-3">
                  {voordelen.map((voordeel, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#F37325] transition-all duration-300 hover:shadow-md"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#F37325] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{voordeel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Vacatures Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364] mb-4">
              Actuele <span className="text-[#F37325]">vacatures</span>
            </h2>
            <p className="text-base text-gray-600 mt-4">
              Bekijk onze openstaande vacatures en vind de perfecte match voor jou
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                titel: 'Verpleegkundige Amsterdam',
                locatie: 'Amsterdam',
                type: 'Fulltime / Parttime',
                uren: '24-36 uur p/w',
                beschrijving: 'Werk als verpleegkundige in de thuiszorg of woonzorg in Amsterdam en omgeving.'
              },
              {
                titel: 'Verzorgende IG Rotterdam',
                locatie: 'Rotterdam',
                type: 'Fulltime',
                uren: '32-40 uur p/w',
                beschrijving: 'Zorg voor ouderen in een verpleeghuis of woonzorgcentrum in Rotterdam.'
              },
              {
                titel: 'Wijkverpleegkundige Utrecht',
                locatie: 'Utrecht',
                type: 'Parttime',
                uren: '20-32 uur p/w',
                beschrijving: 'Begeleid cliënten in hun thuissituatie als wijkverpleegkundige in Utrecht.'
              },
            ].map((vacature, idx) => (
              <ScaleIn key={vacature.titel} delay={idx * 0.1}>
                <CardSpotlight>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F37325] to-[#ff8c42] rounded-xl flex items-center justify-center">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-[#F37325]/10 text-[#F37325] text-xs font-semibold rounded-full">
                          {vacature.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1C3364]">{vacature.titel}</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{vacature.locatie}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{vacature.uren}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">{vacature.beschrijving}</p>
                      
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#F37325] font-semibold hover:gap-3 transition-all group"
                      >
                        Solliciteer direct
                        <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C3364] text-white rounded-xl font-semibold hover:bg-[#2a4a8f] transition-all"
            >
              Bekijk alle vacatures
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Zoals Homepage */}
      <section id="aanmelden" className="py-24 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeContent>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1C3364] mb-4">
              Klaar om te beginnen? <span className="text-[#F37325]">Meld je nu aan</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Meld je eenvoudig aan via ons formulier. Binnen 24 uur hoor je van ons.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/contact">
                  <ScaleIn delay={200}>
                    <MovingBorder
                      duration={7000}
                      className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold text-base"
                      containerClassName="w-full sm:w-auto"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5" />
                        <span>Open aanmeldformulier</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </MovingBorder>
                  </ScaleIn>
                </Link>
                
                <Link href="tel:0653474474">
                  <ScaleIn delay={300}>
                    <MovingBorder
                      duration={9000}
                      className="bg-white hover:bg-gray-50 text-[#1C3364] px-8 py-4 font-bold text-base"
                      containerClassName="w-full sm:w-auto"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span>Bel 06 53 474 474</span>
                      </div>
                    </MovingBorder>
                  </ScaleIn>
                </Link>
              </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <Clock className="w-7 h-7 text-[#F37325] mx-auto mb-2" />
                <p className="font-bold text-[#1C3364] text-sm">Binnen 24 uur reactie</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <HeartHandshake className="w-7 h-7 text-[#F37325] mx-auto mb-2" />
                <p className="font-bold text-[#1C3364] text-sm">Persoonlijk advies</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-7 h-7 text-[#F37325] mx-auto mb-2" />
                <p className="font-bold text-[#1C3364] text-sm">Geen verplichtingen</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    </main>
  )
}
