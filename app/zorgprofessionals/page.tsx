'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Briefcase, Brain, Users, Baby, Heart, GraduationCap, Globe, 
  Clock, CheckCircle2, FileText, Phone, MapPin, Shield, ArrowRight, HeartHandshake, Stethoscope, Send
} from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { MovingBorder } from '@/components/aceternity/moving-border'
import CTASection from '@/components/cta-section'

const vereisten = [
  { icon: GraduationCap, titel: 'Een relevante diploma', tekst: 'Relevante diploma voor de zorgsector' },
  { icon: Shield, titel: 'Een geldige VOG', tekst: 'Verklaring Omtrent Gedrag' },
  { icon: Clock, titel: 'Minimaal 3 jaar werkervaring in de zorg', tekst: 'Ruime ervaring in de zorg' },
  { icon: Heart, titel: 'Een professionele, betrokken houding', tekst: 'Betrokken en professioneel' },
]

export default function ZorgprofessionalsPage() {
  return (
    <main className="min-h-screen  bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                  <Stethoscope className="h-5 w-5 text-[#F37325]" />
                  <span className="text-lg font-semibold text-[#1C3364]">Voor Zorgprofessionals</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                  Werken via <GradientText>JM Zorgpartners</GradientText>
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ben jij een zorgprofessional met ervaring, betrokkenheid en een groot hart voor de zorg? 
                  Dan zijn wij op zoek naar jou.
                </p>
                
                <p className="text-base text-gray-600">
                  Bij JM Zorgpartners <span className="font-semibold text-[#1C3364]">bepaal jij hoe je wilt werken</span> – 
                  losse diensten of vaste opdrachten, overdag, &apos;s nachts of in het weekend. 
                  Wij luisteren naar jouw voorkeuren en zoeken werk dat écht bij je past – professioneel én persoonlijk.
                </p>
                
                <p className="text-base text-gray-600">
                  Samen zorgen we voor de juiste match.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="tel:0850000000">
                    <ScaleIn delay={400} duration={700}>
                      <MovingBorder
                        duration={8000}
                        className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Phone className="w-5 h-5" />
                          <span>Bel 033 303 30 42</span>
                        </div>
                      </MovingBorder>
                    </ScaleIn>
                  </Link>
                  <Link href="/over-ons">
                    <ScaleIn delay={500} duration={700}>
                      <MovingBorder
                        duration={10000}
                        className="bg-white hover:bg-orange-50 text-[#1C3364] px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Over ons</span>
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
      <section id="sectoren" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/images/hero-zorg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
              In welke <span className="text-[#F37325]">sectoren</span> kun je aan de slag?
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              Via JM Zorgpartners kun je aan de slag in uiteenlopende zorgsectoren. 
              Of je nu korte opdrachten zoekt of langere trajecten – wij zorgen voor een plek die bij jou past.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Brain, naam: 'GGZ', beschrijving: 'Geestelijke gezondheidszorg', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&q=80' },
              { icon: Users, naam: 'Gehandicaptenzorg', beschrijving: 'Begeleiding en ondersteuning', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80' },
              { icon: Baby, naam: 'Jeugdzorg', beschrijving: 'Zorg voor kinderen en jongeren', image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&q=80' },
              { icon: Heart, naam: 'Ouderenzorg', beschrijving: 'Woon- en thuiszorg', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80' },
              { icon: Globe, naam: 'Vluchtelingenopvang', beschrijving: 'Begeleiding en opvang', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&q=80' },
              { icon: Baby, naam: 'Kinderopvang', beschrijving: 'Dagopvang en BSO', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=80' },
              { icon: GraduationCap, naam: 'Speciaal onderwijs', beschrijving: 'Onderwijsondersteuning', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&q=80' },
            ].map((sector, idx) => (
              <ScaleIn key={sector.naam} delay={idx * 0.1}>
                <CardSpotlight className="h-full">
                  <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5">
                        <sector.icon className="h-8 w-8 text-[#1C3364]" />
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
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
              Wat <span className="text-[#F37325]">vragen</span> wij van jou?
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              Wij staan voor kwaliteit en betrouwbaarheid – dat verwachten wij van onze zorgprofessionals, 
              en dat mag jij ook van ons verwachten. We zorgen dat alles goed geregeld is, zodat jij kunt doen waar je goed in bent.
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

      {/* Werkwijze Section met Video */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
              Zo <span className="text-[#F37325]">werkt</span> het
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              Bekijk onze recruitment video om te zien hoe wij zorgprofessionals helpen bij het vinden van de juiste baan
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <FadeContent>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                  <video
                    controls
                    className="w-full h-auto"
                    poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
                  >
                    <source src="/videos/JM Zorgpartners recruitment video .mp4" type="video/mp4" />
                    Uw browser ondersteunt deze video niet.
                  </video>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  Ontdek hoe wij jou helpen bij het vinden van de perfecte zorgbaan
                </p>
              </div>
            </FadeContent>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stap: '1', titel: 'Kennismaken', tekst: 'We plannen een kort gesprek waarin we jouw ervaring, wensen en voorkeuren in kaart brengen.' },
              { stap: '2', titel: 'Aanmelden', tekst: 'Ben je enthousiast? Vul dan ons inschrijfformulier in en upload je documenten. Liever langskomen? Dat kan natuurlijk ook – we maken graag tijd voor je.' },
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
                <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364]">
                  Waarom werken via <span className="text-[#F37325]">JM Zorgpartners?</span>
                </h2>
                
                <p className="text-base text-gray-600">
                  Bij JM Zorgpartners werk je niet alleen voor ons — je werkt <span className="font-semibold text-[#1C3364]">mét ons</span>.
                </p>

                <div className="space-y-3">
                  {[
                    'Jij bepaalt wanneer en waar je werkt',
                    'Eerlijke en snelle uitbetaling',
                    'Persoonlijke begeleiding – altijd bereikbaar',
                    'Duurzame samenwerking waarin je gehoord wordt',
                  ].map((voordeel, idx) => (
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
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/images/zorg-professional.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
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
                beschrijving: 'Werk als verpleegkundige in de thuiszorg of woonzorg in Amsterdam en omgeving.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
              },
              {
                titel: 'Verzorgende IG Rotterdam',
                locatie: 'Rotterdam',
                type: 'Fulltime',
                uren: '32-40 uur p/w',
                beschrijving: 'Zorg voor ouderen in een verpleeghuis of woonzorgcentrum in Rotterdam.',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80'
              },
              {
                titel: 'Wijkverpleegkundige Utrecht',
                locatie: 'Utrecht',
                type: 'Parttime',
                uren: '20-32 uur p/w',
                beschrijving: 'Begeleid cliënten in hun thuissituatie als wijkverpleegkundige in Utrecht.',
                image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80'
              },
            ].map((vacature, idx) => (
              <ScaleIn key={vacature.titel} delay={idx * 0.1}>
                <CardSpotlight>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1C3364]/5">
                          <Briefcase className="h-6 w-6 text-[#1C3364]" />
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

      {/* Aanmeldformulier Section */}
      <section id="aanmelden" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeContent>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full mb-4">
                <FileText className="h-5 w-5 text-[#F37325]" />
                <span className="text-lg font-semibold text-[#1C3364]">Direct Aanmelden</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
                Meld je <span className="text-[#F37325]">Aan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vul het formulier in en upload je documenten. We nemen binnen 24 uur contact met je op!
              </p>
            </div>
          </FadeContent>

          <ScaleIn delay={0.2}>
            <CardSpotlight className="p-8">
              <form className="space-y-6">
                {/* Persoonlijke Gegevens */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Persoonlijke Gegevens
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je voornaam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je achternaam"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Geboortedatum *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Woonplaats *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="Je woonplaats"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="je@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Ervaring en voorkeur */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Ervaring en voorkeur
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Opleidingsniveau *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer je opleidingsniveau</option>
                        <option value="helpende">Helpende</option>
                        <option value="verzorgende-ig">Verzorgende IG</option>
                        <option value="verpleegkundige">Verpleegkundige</option>
                        <option value="anders">Anders…</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                        Aantal jaren werkervaring *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer werkervaring</option>
                        <option value="0-2">0–2 jaar</option>
                        <option value="3-5">3–5 jaar</option>
                        <option value="6-10">6–10 jaar</option>
                        <option value="10+">10+ jaar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Sectoren waarin je wilt werken *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Ouderenzorg',
                        'GGZ',
                        'Jeugdzorg',
                        'Kinderopvang',
                        'Speciaal onderwijs',
                        'Vluchtelingenopvang',
                        'Gehandicaptenzorg'
                      ].map((sector) => (
                        <label key={sector} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-[#F37325] focus:ring-[#F37325]"
                          />
                          <span className="text-sm text-gray-700">{sector}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Documenten uploaden */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Documenten uploaden
                  </h3>

                  <div className="space-y-3">
                    {/* Diploma's Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-[#F37325]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1C3364]">Diploma&apos;s *</p>
                            <p className="text-sm text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                          </div>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                          className="hidden"
                        />
                        <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
                          Upload
                        </button>
                      </label>
                    </div>

                    {/* VOG Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-[#F37325]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1C3364]">VOG (Verklaring Omtrent Gedrag) *</p>
                            <p className="text-sm text-gray-500">PDF (max 5MB)</p>
                          </div>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf"
                          className="hidden"
                        />
                        <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
                          Upload
                        </button>
                      </label>
                    </div>

                    {/* CV Upload */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 hover:border-[#F37325] transition-colors">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-[#F37325]/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-[#F37325]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1C3364]">CV *</p>
                            <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                          </div>
                        </div>
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <button type="button" className="px-4 py-2 bg-[#1C3364] text-white rounded-lg text-sm font-semibold hover:bg-[#2a4a8f] transition-colors">
                          Upload
                        </button>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Toelichting */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2">
                    Toelichting (optioneel)
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Vertel iets over jezelf of geef je voorkeuren aan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F37325] focus:outline-none transition-colors"
                      placeholder="Vertel iets over jezelf of geef je voorkeuren aan..."
                    ></textarea>
                  </div>
                </div>

                {/* Privacy & Submit */}
                <div className="space-y-4 pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-[#F37325] focus:ring-[#F37325]"
                    />
                    <span className="text-sm text-gray-600">
                      Ik ga akkoord met de <Link href="/privacy" className="text-[#F37325] font-semibold hover:underline">privacyverklaring</Link> en 
                      het verwerken van mijn gegevens. *
                    </span>
                  </label>

                  <MovingBorder 
                    duration={8000}   
                    className="bg-[#F37325] hover:bg-[#d96420] text-white px-2 py-1 font-bold"
                      containerClassName="w-full sm:w-auto"
                      >
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[#F37325] text-white rounded-xl font-bold text-lg hover:bg-[#d96420] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Verstuur Aanmelding
                    </button>
                  </MovingBorder>

                  <p className="text-center text-sm text-gray-500">
                    * Verplichte velden
                  </p>
                </div>
              </form>
            </CardSpotlight>
          </ScaleIn>
        </div>
      </section>

      

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
