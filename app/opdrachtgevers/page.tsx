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
    voorkeur: 'email',
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
                  Op zoek naar <GradientText>gekwalificeerd</GradientText> zorgpersoneel?
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Bij JM Zorgpartners leveren wij flexibel, betrouwbaar en deskundig personeel dat naadloos aansluit bij uw organisatie.
                </p>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-[#F37325]/20 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Of het nu gaat om <span className="font-bold text-[#1C3364]">tijdelijke vervanging</span>, 
                    <span className="font-bold text-[#1C3364]"> piekbelasting</span> of 
                    <span className="font-bold text-[#1C3364]"> langdurige vacatures</span> – wij staan voor u klaar.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <MovingBorder duration={8000}>
                    <Link
                      href="#contact"
                      className="px-8 py-4 bg-[#F37325] text-white rounded-xl font-semibold hover:bg-[#d96420] transition-all inline-flex items-center gap-2"
                    >
                      <FileText className="h-5 w-5" />
                      Neem contact op
                    </Link>
                  </MovingBorder>
                  
                  <a
                    href="tel:033303304200"
                    className="px-8 py-4 border-2 border-[#1C3364] text-[#1C3364] rounded-xl font-semibold hover:bg-[#1C3364] hover:text-white transition-all inline-flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    033 303 30 42
                  </a>
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

      {/* Diensten Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle>
              Onze <GradientText>diensten</GradientText> voor zorginstellingen
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4">
              Flexibele oplossingen voor al uw personeelsbehoeften
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, titel: 'Tijdelijke vervanging', beschrijving: 'Ziekte, zwangerschapsverlof of vakantie? Wij zorgen voor continuïteit.' },
              { icon: TrendingUp, titel: 'Piekbelasting opvangen', beschrijving: 'Extra personeel bij drukte of onverwachte situaties.' },
              { icon: Users, titel: 'Vaste vacatures invullen', beschrijving: 'Langetermijn oplossingen voor moeilijk vervulbare posities.' },
              { icon: Shield, titel: 'Gespecialiseerde professionals', beschrijving: 'Specifieke expertise voor unieke zorgbehoeften.' },
            ].map((dienst, idx) => (
              <ScaleIn key={dienst.titel} delay={idx * 0.1}>
                <CardSpotlight>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#F37325] to-[#ff8c42] rounded-xl flex items-center justify-center mb-6">
                      <dienst.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C3364] mb-3">{dienst.titel}</h3>
                    <p className="text-gray-600 leading-relaxed">{dienst.beschrijving}</p>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stap: '1',
                titel: 'Intake & analyse',
                tekst: 'We luisteren naar uw personeelsbehoefte. Welke functie, welke eisen, welke periode? We maken een volledig profiel.'
              },
              {
                stap: '2',
                titel: 'Zoeken & selecteren',
                tekst: 'Uit ons netwerk selecteren we professionals die passen bij uw organisatie. We screenen op kwalificaties en beschikbaarheid.'
              },
              {
                stap: '3',
                titel: 'Presenteren & matchen',
                tekst: 'U ontvangt kandidaatprofielen. Na goedkeuring regelen wij de kennismaking en contractafspraken.'
              },
              {
                stap: '4',
                titel: 'Plaatsing & begeleiding',
                tekst: 'De zorgprofessional start bij u. Wij blijven betrokken voor nazorg en eventuele aanpassingen.'
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <AnimatedTitle>
                  Waarom kiezen voor <GradientText>JM Zorgpartners?</GradientText>
                </AnimatedTitle>
                
                <div className="space-y-4">
                  {[
                    'Snel beschikbaar (binnen 24-48 uur bij spoed)',
                    'Zorgvuldig gescreend op diploma, VOG en ervaring',
                    'Persoonlijke matching met uw organisatiecultuur',
                    'Flexibele inzet: van dagdienst tot langdurige plaatsing',
                    '24/7 bereikbaar voor spoedvragen',
                    'Landelijke dekking in heel Nederland',
                  ].map((punt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#F37325] transition-all duration-300 hover:shadow-lg"
                    >
                      <CheckCircle2 className="h-6 w-6 text-[#F37325] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{punt}</p>
                    </div>
                  ))}
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
                vraag: 'Hoe snel kunnen jullie personeel leveren?',
                antwoord: 'Voor spoedaanvragen binnen 24 uur, voor reguliere aanvragen binnen 48 uur. Ons grote netwerk van direct beschikbare zorgprofessionals maakt dit mogelijk.'
              },
              {
                vraag: 'Zijn jullie professionals gescreend?',
                antwoord: 'Ja, absoluut. Alle professionals worden gescreend op diploma&apos;s, VOG, referenties en ervaring. Kwaliteit en veiligheid staan voorop.'
              },
              {
                vraag: 'Wat zijn de kosten?',
                antwoord: 'Onze tarieven zijn transparant en afhankelijk van de functie en duur van de plaatsing. Neem contact op voor een vrijblijvende offerte op maat.'
              },
              {
                vraag: 'Wat als het personeel niet past?',
                antwoord: 'Wij bieden een vervangingsgarantie. Als de match niet goed is, zoeken wij direct naar een passende vervanging zonder extra kosten.'
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
              Neem <GradientText>contact</GradientText> met ons op
            </AnimatedTitle>
            <p className="text-xl text-gray-600 mt-4">
              Vul het formulier in en wij nemen binnen 24 uur contact met u op
            </p>
          </div>

          <FadeContent delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
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

                <div>
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
                    Vestigingsplaats *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vestigingsplaats}
                    onChange={(e) => setFormData({...formData, vestigingsplaats: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F37325] focus:border-transparent transition-all"
                  />
                </div>

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

                <div className="md:col-span-2">
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

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact voorkeur *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="voorkeur"
                        value="email"
                        checked={formData.voorkeur === 'email'}
                        onChange={(e) => setFormData({...formData, voorkeur: e.target.value})}
                        className="w-5 h-5 text-[#F37325] focus:ring-[#F37325]"
                      />
                      <span className="text-gray-700">E-mail</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="voorkeur"
                        value="telefoon"
                        checked={formData.voorkeur === 'telefoon'}
                        onChange={(e) => setFormData({...formData, voorkeur: e.target.value})}
                        className="w-5 h-5 text-[#F37325] focus:ring-[#F37325]"
                      />
                      <span className="text-gray-700">Telefoon</span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Toelichting
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
                <p className="font-semibold text-[#1C3364]">033 303 30 42</p>
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
