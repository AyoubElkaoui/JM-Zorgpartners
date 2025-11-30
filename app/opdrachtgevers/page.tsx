'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Building2, Users, Clock, TrendingUp, Shield, CheckCircle2,
  Phone, Mail, MapPin, FileText, ArrowRight
} from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { MovingBorder } from '@/components/aceternity/moving-border'

export default function ZorginstellingenPage() {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    functie: '',
    organisatie: '',
    vestigingsplaats: '',
    telefoon: '',
    email: '',
    voorkeur: 'geen',
    toelichting: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: API call
  }

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
                  <Building2 className="h-5 w-5 text-[#F37325]" />
                  <span className="text-lg font-semibold text-[#1C3364]">Voor Zorginstellingen</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                  Continuïteit in uw zorgorganisatie begint bij de juiste <GradientText>mensen</GradientText>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wij leveren zorgprofessionals die passen bij uw organisatie en werkwijze.
                  Professioneel, betrokken en altijd betrouwbaar wanneer u ons nodig heeft
                </p>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-[#F37325]/20 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Professioneel, betrokken en altijd betrouwbaar wanneer u ons nodig heeft
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="tel:033303304200">
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
                  <Link href="/contact">
                    <ScaleIn delay={500} duration={700}>
                      <MovingBorder
                        duration={10000}
                        className="bg-white hover:bg-orange-50 text-[#1C3364] px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Contact</span>
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
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                  alt="Professioneel zorgteam"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Wat Wij Bieden Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              Wat wij <GradientText>bieden</GradientText>
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4">
              Flexibele oplossingen voor al uw personeelsbehoeften
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, titel: 'Zorgprofessionals voor verschillende functies en niveaus', beschrijving: 'Van helpende tot specialist, wij hebben de juiste professional voor uw zorgvraag.', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80' },
              { icon: Clock, titel: 'Inzetbaar op korte én langdurige opdrachten', beschrijving: 'Van enkele dagen tot maandenlang, flexibel inzetbaar naar uw behoefte.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
              { icon: TrendingUp, titel: 'Dag-, nacht- of weekenddiensten', beschrijving: '24/7 beschikbaarheid voor alle diensten die uw organisatie nodig heeft.', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80' },
              { icon: Shield, titel: 'Oplossingen bij ziekte, piekdrukte of verlof', beschrijving: 'Directe vervanging bij onverwachte situaties of geplande afwezigheid.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
              { icon: FileText, titel: 'Inzetbaar via payroll of als zzp\'er', beschrijving: 'Keuze uit verschillende contractvormen die passen bij uw organisatie.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80' },
              { icon: CheckCircle2, titel: 'Snel inzetbaar, zorgvuldig geselecteerd', beschrijving: 'Professionele screening en snelle plaatsing voor optimale zorgcontinuïteit.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80' },
            ].map((dienst, idx) => (
              <ScaleIn key={dienst.titel} delay={idx * 0.1}>
                <CardSpotlight>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="w-12 h-12 bg-[#F37325]/10 rounded-lg flex items-center justify-center mb-6">
                      <dienst.icon className="h-6 w-6 text-[#F37325]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C3364] mb-3">{dienst.titel}</h3>
                    <p className="text-gray-600 leading-relaxed">{dienst.beschrijving}</p>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F37325]/10 rounded-full">
              <Clock className="h-5 w-5 text-[#F37325]" />
              <span className="text-lg font-semibold text-[#1C3364]">24/7 bereikbaar voor spoedaanvragen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze Section met Video */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              Hoe <GradientText>werkt</GradientText> het?
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4">
              In vier eenvoudige stappen naar de juiste zorgprofessional
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
                    poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                  >
                    <source src="/videos/JM Zorgpartner klant video.mp4" type="video/mp4" />
                    Uw browser ondersteunt deze video niet.
                  </video>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  Bekijk hoe onze klanten de samenwerking ervaren
                </p>
              </div>
            </FadeContent>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stap: '1',
                titel: 'U doet een aanvraag',
                tekst: 'Vertel ons wat u nodig heeft — type functie, dagen/tijden, duur, enz.'
              },
              {
                stap: '2',
                titel: 'Wij zoeken de juiste match',
                tekst: 'Binnen ons netwerk zoeken we gericht naar iemand die bij uw team en doelgroep past.'
              },
              {
                stap: '3',
                titel: 'U ontvangt een voorstel',
                tekst: 'U ontvangt een overzicht met één of meerdere kandidaten: inclusief profiel, ervaring en beschikbaarheid.'
              },
              {
                stap: '4',
                titel: 'Start van de samenwerking',
                tekst: 'Na akkoord regelen wij alles rondom de plaatsing. U heeft er geen omkijken naar.'
              },
            ].map((stap, idx) => (
              <ScaleIn key={stap.stap} delay={idx * 0.15}>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl h-full">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#1C3364] to-[#2a4a8f] rounded-full flex items-center justify-center text-white font-black text-xl">
                      {stap.stap}
                    </div>
                    <h3 className="text-xl font-bold text-[#1C3364] mb-3 mt-4">{stap.titel}</h3>
                    <p className="text-gray-600 leading-relaxed">{stap.tekst}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Kiezen Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <Image
            src="/images/zorg-team.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <AnimatedTitle>
                  Waarom kiezen voor <GradientText>JM Zorgpartners?</GradientText>
                </AnimatedTitle>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Goede zorg vraagt om zorgprofessionals die passen bij uw organisatie.
                    Daarom selecteren wij onze medewerkers zorgvuldig en kijken wij verder dan alleen beschikbaarheid.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Wij leveren zorgprofessionals op basis van zowel payroll als zelfstandige inzet.
                    Met duidelijke afspraken, persoonlijk contact en een efficiënte planning zorgen wij voor continuïteit binnen uw organisatie.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Onze professionals zijn gediplomeerd, ervaren en inzetbaar wanneer uw organisatie ondersteuning nodig heeft, zowel bij reguliere aanvragen als bij spoedsituaties.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Met JM Zorgpartners kiest u voor een betrouwbare samenwerkingspartner die meedenkt, snel schakelt en altijd streeft naar de Juiste Match.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#F37325]/10 to-[#1C3364]/10 rounded-2xl border border-[#F37325]/20">
                  <p className="text-lg text-[#1C3364] font-semibold text-center">
                    Met JM Zorgpartners kiest u voor een betrouwbare samenwerkingspartner die meedenkt, snel schakelt en altijd streeft naar de Juiste Match.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800"
                  alt="Professioneel zorgteam aan het werk"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              Veelgestelde <GradientText>vragen</GradientText>
            </AnimatedTitle>
          </div>

          <div className="space-y-4">
            {[
              {
                vraag: 'Hoe snel kunnen jullie een zorgprofessional inzetten?',
                antwoord: 'In veel gevallen kunnen wij dezelfde dag nog ondersteunen. Bij spoedsituaties zijn wij direct bereikbaar via onze Spoedlijn op 06 53 474 474'
              },
              {
                vraag: 'Werken jullie met zowel payroll als zelfstandigen?',
                antwoord: 'Ja. Wij leveren zorgprofessionals in loondienst én zelfstandigen. Samen bepalen we welke constructie het beste aansluit op uw organisatie.'
              },
              {
                vraag: 'Hoe zorgen jullie voor kwaliteit en betrouwbaarheid?',
                antwoord: 'Al onze zorgprofessionals zijn gediplomeerd, ervaren en zorgvuldig gescreend. Wij controleren bevoegdheden, referenties en relevante werkervaring.'
              },
              {
                vraag: 'Kunnen jullie ondersteuning bieden bij complexe zorgvragen?',
                antwoord: 'Ja. Wij leveren zorgprofessionals die stevig in hun schoenen staan en ervaring hebben met complexe doelgroepen, waaronder GGZ, jeugdzorg en intensieve begeleiding.'
              },
              {
                vraag: 'Hoe werkt jullie planning?',
                antwoord: 'Wij stemmen de inzet af op uw behoefte. Duidelijke afspraken, heldere communicatie en snel schakelen staan altijd centraal.'
              },
              {
                vraag: 'Kunnen jullie helpen bij zowel korte als langere opdrachten?',
                antwoord: 'Ja. Wij bieden ondersteuning voor korte diensten, tijdelijke vervanging en langdurige inzet.'
              },
              {
                vraag: 'Hoe verloopt het contact tijdens een opdracht?',
                antwoord: 'U heeft altijd een duidelijk aanspreekpunt. Wij blijven beschikbaar voor afstemming, evaluatie en eventuele bijsturing.'
              },
            ].map((faq, idx) => (
              <FadeContent key={idx} delay={idx * 0.1}>
                <details className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-lg">
                  <summary className="text-lg font-bold text-[#1C3364] cursor-pointer hover:text-[#F37325] transition-colors flex items-center justify-between">
                    {faq.vraag}
                    <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.antwoord}</p>
                </details>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <AnimatedTitle>
              Klaar voor de juiste <GradientText>match?</GradientText>
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Wilt u meer informatie of direct zorgprofessionals aanvragen?
              Gebruik het onderstaande online contactformulier.
              Wij nemen snel contact met u op.
              Bellen of mailen kan natuurlijk ook
            </p>
            <div className="mt-6 p-4 bg-[#F37325]/10 rounded-xl border border-[#F37325]/20">
              <p className="text-lg text-[#1C3364] font-semibold">
                T. 06 53 474 474 E. info@jmzorgpartners.nl
              </p>
              <p className="text-lg text-[#1C3364] font-semibold">
                Heeft u een urgente zorgvraag? Neem dan contact op met onze Spoedlijn 06 53 474 474
              </p>
              <p className="text-lg text-[#1C3364] font-semibold">
                Wij denken graag met u mee. Online aanmeldingsformulier
              </p>
            </div>
          </div>

          <FadeContent delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {/* Contactpersoon */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2 mb-6">
                  Contactpersoon
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.voornaam}
                      onChange={(e) => setFormData({...formData, voornaam: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.achternaam}
                      onChange={(e) => setFormData({...formData, achternaam: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Functie *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.functie}
                      onChange={(e) => setFormData({...formData, functie: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Organisatiegegevens */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2 mb-6">
                  Organisatiegegevens
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam organisatie *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisatie}
                      onChange={(e) => setFormData({...formData, organisatie: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vestigingsplaats
                    </label>
                    <input
                      type="text"
                      value={formData.vestigingsplaats}
                      onChange={(e) => setFormData({...formData, vestigingsplaats: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Contactinformatie */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2 mb-6">
                  Contactinformatie
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefoon}
                      onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Contactvoorkeur */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2 mb-6">
                  Contactvoorkeur
                </h3>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="voorkeur"
                      value="telefoon"
                      checked={formData.voorkeur === 'telefoon'}
                      onChange={(e) => setFormData({...formData, voorkeur: e.target.value})}
                      className="w-5 h-5 text-[#F37325] focus:ring-[#F37325]"
                    />
                    <span className="text-gray-700">Bel mij terug</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="voorkeur"
                      value="email"
                      checked={formData.voorkeur === 'email'}
                      onChange={(e) => setFormData({...formData, voorkeur: e.target.value})}
                      className="w-5 h-5 text-[#F37325] focus:ring-[#F37325]"
                    />
                    <span className="text-gray-700">Stuur mij een e-mail</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="voorkeur"
                      value="geen"
                      checked={formData.voorkeur === 'geen'}
                      onChange={(e) => setFormData({...formData, voorkeur: e.target.value})}
                      className="w-5 h-5 text-[#F37325] focus:ring-[#F37325]"
                    />
                    <span className="text-gray-700">Geen voorkeur</span>
                  </label>
                </div>
              </div>

              {/* Toelichting */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#1C3364] border-b-2 border-[#F37325]/20 pb-2 mb-6">
                  Toelichting
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Waarmee kunnen we u helpen? Of wat wilt u bespreken?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.toelichting}
                    onChange={(e) => setFormData({...formData, toelichting: e.target.value})}
                    placeholder="Vertel ons meer over uw personeelsbehoefte..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-[#F37325] to-[#ff8c42] text-white rounded-xl font-semibold hover:from-[#d96420] hover:to-[#F37325] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Verstuur aanvraag
              </button>
            </form>
          </FadeContent>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#F37325]/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-[#F37325]" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Telefoon</p>
                <p className="font-semibold text-[#1C3364]">06 53 474 474</p>
                <p className="text-xs text-gray-500">24/7 spoedlijn</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#F37325]/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#F37325]" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">E-mail</p>
                <p className="font-semibold text-[#1C3364]">info@jmzorgpartners.nl</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#F37325]/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#F37325]" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Adres</p>
                <p className="font-semibold text-[#1C3364]">De Windturbine 7</p>
                <p className="font-semibold text-[#1C3364]">3815KP Amersfoort</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}