'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, Mail, ArrowRight, Clock, Shield, Users, Heart, 
  Brain, Accessibility, Baby, Globe, School, Building2, 
  MapPin, CheckCircle2, Zap, Target, HeartHandshake, Star
} from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import CountUp from '@/components/react-bits/CountUp'
import GlareCard from '@/components/react-bits/GlareCard'
import ScaleIn from '@/components/react-bits/ScaleIn'
import ScrollToTop from '@/components/scroll-to-top'
import { Spotlight } from '@/components/aceternity/spotlight'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { TiltCard } from '@/components/aceternity/tilt-card'
import { TextReveal } from '@/components/aceternity/text-reveal'
import { BackgroundGrid, AnimatedBeam } from '@/components/aceternity/background-grid'
import { MovingBorder } from '@/components/aceternity/moving-border'
import { HoverCard } from '@/components/aceternity/hover-card'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollToTop />

      {/* Hero - Clean & Professional */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Advanced Background */}
        <BackgroundGrid dotSize={1.5} gap={30} />
        <Spotlight className="top-0 left-0 md:left-60 md:top-10" fill="#F37325" />
        
        {/* Animated Beams - Smooth */}
        <AnimatedBeam className="top-32 left-0" width="60%" delay={0} />
        <AnimatedBeam className="top-48 right-0" color="#1C3364" width="45%" delay={1.5} />
        <AnimatedBeam className="top-64 left-0" width="70%" delay={3} />
        <AnimatedBeam className="bottom-32 right-0" color="#ff8c4d" width="50%" delay={4.5} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Links - Content */}
            <FadeContent blur duration={1000}>
              <div>
                <TextReveal 
                  text="Gekwalificeerd zorgpersoneel, binnen 24 uur"
                  className="text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#1C3364]"
                />
                
                <p className="text-xl mb-10 text-gray-600 leading-relaxed">
                  Van verpleegkundigen tot verzorgenden - wij leveren gescreende professionals die direct inzetbaar zijn voor jouw zorgorganisatie.
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
                          <span>Bel 085 - 0000000</span>
                        </div>
                      </MovingBorder>
                    </ScaleIn>
                  </Link>
                  <Link href="/vacatures">
                    <ScaleIn delay={500} duration={700}>
                      <MovingBorder
                        duration={10000}
                        className="bg-white hover:bg-orange-50 text-[#1C3364] px-8 py-4 font-bold"
                        containerClassName="w-full sm:w-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Bekijk vacatures</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </MovingBorder>
                    </ScaleIn>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#F37325]" />
                    </div>
                    <div>
                      <p className="font-black text-[#1C3364]">24 uur</p>
                      <p className="text-sm text-gray-600">Reactietijd</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#F37325]" />
                    </div>
                    <div>
                      <p className="font-black text-[#1C3364]">100%</p>
                      <p className="text-sm text-gray-600">Gescreend</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#F37325]" />
                    </div>
                    <div>
                      <p className="font-black text-[#1C3364]">500+</p>
                      <p className="text-sm text-gray-600">Professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>

            {/* Rechts - Image */}
            <FadeContent blur delay={200} duration={1000}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Zorgprofessionals aan het werk"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>


        </div>
      </section>

      {/* USP Section - Met subtiele achtergrond */}
      <section className="py-32 relative overflow-hidden">
        {/* Subtiele achtergrond image */}
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/images/zorg-team.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-gray-50/95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Waarom zorginstellingen voor <GradientText>ons</GradientText> kiezen
              </h2>
            </AnimatedTitle>
            <FadeContent blur duration={800}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meer dan alleen personeel - echte partners in zorg
              </p>
            </FadeContent>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Snelle plaatsing',
                desc: 'Binnen 24 uur gekwalificeerde kandidaten beschikbaar voor jouw zorginstelling',
                color: 'from-[#F37325] to-[#ff8c4d]'
              },
              {
                icon: Shield,
                title: '100% Gescreend',
                desc: 'Alle professionals zijn volledig gescreend op kwalificaties, ervaring en betrouwbaarheid',
                color: 'from-[#1C3364] to-[#2a4a7c]'
              },
              {
                icon: HeartHandshake,
                title: 'Persoonlijke match',
                desc: 'Wij kijken verder dan het CV en zorgen voor een match die bij jouw organisatie past',
                color: 'from-[#F37325] to-[#ff8c4d]'
              },
              {
                icon: Users,
                title: 'Groot netwerk',
                desc: 'Toegang tot 500+ gekwalificeerde zorgprofessionals door heel Nederland',
                color: 'from-[#1C3364] to-[#2a4a7c]'
              },
              {
                icon: Clock,
                title: '24/7 Bereikbaar',
                desc: 'Bij spoedvragen zijn wij altijd bereikbaar om snel te kunnen schakelen',
                color: 'from-[#F37325] to-[#ff8c4d]'
              },
              {
                icon: Target,
                title: 'Transparante tarieven',
                desc: 'Heldere afspraken over tarieven en voorwaarden. Geen verborgen kosten',
                color: 'from-[#1C3364] to-[#2a4a7c]'
              }
            ].map((item, index) => (
              <FadeContent key={index} blur delay={index * 100} duration={1000}>
                <CardSpotlight className="group h-full bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#F37325]/30 transition-all duration-500 hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1C3364] mb-4 group-hover:text-[#F37325] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </CardSpotlight>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontale Flow */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeContent blur duration={800} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
              Zo snel regelen wij <span className="text-[#F37325]">jouw personeel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van personeelsaanvraag tot succesvolle plaatsing in 4 eenvoudige stappen
            </p>
          </FadeContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Intake', desc: 'We luisteren naar jouw specifieke zorgbehoefte', icon: Phone },
              { number: '02', title: 'Selectie', desc: 'Binnen 24u presenteren we de beste kandidaten', icon: Users },
              { number: '03', title: 'Kennismaking', desc: 'Ontmoet de professionals en maak je keuze', icon: HeartHandshake },
              { number: '04', title: 'Plaatsing', desc: 'Start met begeleiding en nazorg', icon: CheckCircle2 }
            ].map((step, index) => (
              <FadeContent key={index} blur delay={index * 150} duration={1000}>
                <div className="relative group">
                  {/* Connecting line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#F37325] to-[#F37325]/20 -z-10"></div>
                  )}
                  
                  <div className="relative">
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#F37325] to-[#ff8c4d] flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform z-10">
                      {step.number}
                    </div>
                    
                    <GlareCard className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#F37325] transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
                      <step.icon className="w-12 h-12 text-[#1C3364] mb-6 group-hover:text-[#F37325] group-hover:scale-110 transition-all" />
                      <h3 className="text-2xl font-black text-[#1C3364] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </GlareCard>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Met zorg image */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeContent blur duration={1000}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Zorgteam samenwerking"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>

            {/* Stats */}
            <FadeContent blur delay={200} duration={1000}>
              <div>
                <AnimatedTitle delay={0.2}>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-6">
                    Vertrouwen door <GradientText>resultaat</GradientText>
                  </h2>
                </AnimatedTitle>
                <p className="text-xl text-gray-600 mb-12">
                  Al jaren het vertrouwde zorgbureau voor instellingen door heel Nederland
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: 500, suffix: '+', label: 'Geplaatste professionals', icon: Users },
                    { value: 98, suffix: '%', label: 'Klanttevredenheid', icon: Star },
                    { value: 24, suffix: 'u', label: 'Reactietijd', icon: Clock },
                    { value: 50, suffix: '+', label: 'Partner zorginstellingen', icon: Building2 }
                  ].map((stat, index) => (
                    <HoverCard key={index} containerClassName="h-full">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full">
                        <stat.icon className="w-10 h-10 text-[#F37325] mb-4" />
                        <div className="text-4xl font-black text-[#1C3364] mb-2">
                          <CountUp end={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </HoverCard>
                  ))}
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Voor wie wij werken - Preview secties */}
      <section className="py-32 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden">
        {/* Subtiele achtergrond met gradient */}
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/images/hero-zorg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        {/* Animated beams door de sectie */}
        <AnimatedBeam className="top-20 left-0" width="50%" color="#F37325" delay={0} />
        <AnimatedBeam className="bottom-20 right-0" width="40%" color="#1C3364" delay={2} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Ontdek hoe wij <GradientText>jou</GradientText> kunnen helpen
              </h2>
            </AnimatedTitle>
            <FadeContent blur duration={800}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Of je nu zorgprofessional bent of een zorginstelling leidt, wij staan voor je klaar
              </p>
            </FadeContent>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Voor Zorgprofessionals */}
            <FadeContent blur delay={100} duration={1000}>
              <TiltCard containerClassName="h-full">
                <Link href="/zorgprofessionals">
                  <CardSpotlight className="group h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#F37325] transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                      alt="Voor Zorgprofessionals"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3364]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">Voor Zorgprofessionals</h3>
                      <p className="text-white/90 text-sm">Ben je op zoek naar een nieuwe uitdaging?</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Vind de baan die bij je past. Wij bieden flexibele opdrachten bij mooie zorginstellingen door heel Nederland.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Flexibele opdrachten</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Persoonlijke begeleiding</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Aantrekkelijke voorwaarden</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Bekijk vacatures
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  </CardSpotlight>
                </Link>
              </TiltCard>
            </FadeContent>

            {/* Voor Werkgevers */}
            <FadeContent blur delay={200} duration={1000}>
              <TiltCard containerClassName="h-full">
                <Link href="/werkgevers">
                  <CardSpotlight className="group h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#F37325] transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                      alt="Voor Werkgevers"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3364]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">Voor Werkgevers</h3>
                      <p className="text-white/90 text-sm">Zoek je gekwalificeerd zorgpersoneel?</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Binnen 24 uur de juiste professionals voor jouw zorgorganisatie. Volledig gescreend en klaar om te starten.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Binnen 24u kandidaten</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">100% gescreend</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Transparante tarieven</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Meer informatie
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  </CardSpotlight>
                </Link>
              </TiltCard>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Onze Garanties - 3 Kolommen met Icons */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeContent blur duration={800} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
              Wat u van ons mag <span className="text-[#F37325]">verwachten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geen opvulling, maar versterking. Zorgprofessionals die écht passen bij uw organisatie en teamcultuur.
            </p>
          </FadeContent>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeContent blur delay={100} duration={1000}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F37325] to-[#F37325]/80 mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#1C3364] mb-4">Binnen 24 uur inzetbaar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acute personeelstekorten? Wij schakelen razendsnel en leveren gekwalificeerde professionals binnen 24 uur.
                </p>
              </div>
            </FadeContent>

            <FadeContent blur delay={200} duration={1000}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1C3364] to-[#1C3364]/80 mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#1C3364] mb-4">Volledig gescreend</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle professionals zijn gescreend op VOG, diploma&apos;s en werkervaring. U werkt alleen met gekwalificeerd personeel.
                </p>
              </div>
            </FadeContent>

            <FadeContent blur delay={300} duration={1000}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F37325] to-[#F37325]/80 mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#1C3364] mb-4">Eén vast aanspreekpunt</h3>
                <p className="text-gray-600 leading-relaxed">
                  Korte lijnen, duidelijke communicatie en persoonlijke begeleiding. Ook na plaatsing blijven wij betrokken.
                </p>
              </div>
            </FadeContent>
          </div>

          {/* Extra Garanties Grid */}
          <FadeContent blur delay={400} duration={1000}>
            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F37325] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-[#1C3364] mb-1">Payroll of ZZP</h4>
                    <p className="text-sm text-gray-600">Flexibel inzetbaar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F37325] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-[#1C3364] mb-1">Landelijke dekking</h4>
                    <p className="text-sm text-gray-600">Door heel Nederland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F37325] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-[#1C3364] mb-1">24/7 bereikbaar</h4>
                    <p className="text-sm text-gray-600">Ook bij spoed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F37325] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-[#1C3364] mb-1">Korte & lange termijn</h4>
                    <p className="text-sm text-gray-600">Tijdelijk of vast</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Zorgsectoren - Icon Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/images/zorg-team.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedTitle>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
                Actief in <GradientText>alle zorgsectoren</GradientText>
              </h2>
            </AnimatedTitle>
            <FadeContent blur duration={800}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij ondersteunen zorginstellingen door heel Nederland. Waar een zorgvraag is, springen wij bij.
              </p>
            </FadeContent>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            <FadeContent blur delay={50} duration={800}>
              <CardSpotlight className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Brain className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">GGZ</h3>
              </CardSpotlight>
            </FadeContent>

            <FadeContent blur delay={100} duration={800}>
              <CardSpotlight className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Accessibility className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Gehandicaptenzorg</h3>
              </CardSpotlight>
            </FadeContent>

            <FadeContent blur delay={150} duration={800}>
              <CardSpotlight className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Baby className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Jeugdzorg</h3>
              </CardSpotlight>
            </FadeContent>

            <FadeContent blur delay={200} duration={800}>
              <CardSpotlight className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Heart className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Ouderenzorg</h3>
              </CardSpotlight>
            </FadeContent>

            <FadeContent blur delay={250} duration={800}>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Globe className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Vluchtelingenopvang</h3>
              </div>
            </FadeContent>

            <FadeContent blur delay={300} duration={800}>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <Baby className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Kinderopvang</h3>
              </div>
            </FadeContent>

            <FadeContent blur delay={350} duration={800}>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#F37325] hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1C3364]/5 mb-4">
                  <School className="w-8 h-8 text-[#1C3364]" />
                </div>
                <h3 className="font-black text-[#1C3364]">Speciaal onderwijs</h3>
              </div>
            </FadeContent>

            <FadeContent blur delay={400} duration={800}>
              <Link href="/contact">
                <div className="bg-gradient-to-br from-[#F37325] to-[#F37325]/80 rounded-2xl p-6 text-center border border-[#F37325] hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 mb-4">
                    <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-black text-white">Andere sector?</h3>
                  <p className="text-white/90 text-sm mt-2">Neem contact op</p>
                </div>
              </Link>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Vacatures & Blog - Horizontal Scroll */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <FadeContent blur duration={800}>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364]">
                Ontdek meer <span className="text-[#F37325]">mogelijkheden</span>
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Actuele vacatures en handige carrière tips
              </p>
            </FadeContent>
            <div className="hidden md:flex gap-4">
              <Link href="/vacatures">
                <button className="px-6 py-3 rounded-xl border-2 border-[#1C3364] text-[#1C3364] font-bold hover:bg-[#1C3364] hover:text-white transition-all">
                  Alle vacatures
                </button>
              </Link>
              <Link href="/blog">
                <button className="px-6 py-3 rounded-xl bg-[#F37325] text-white font-bold hover:bg-[#d96420] transition-all">
                  Naar blog
                </button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeContent blur delay={100} duration={1000}>
              <Link href="/vacatures">
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#F37325] hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                      alt="Vacature"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-[#F37325] text-white text-sm font-bold">
                        Nieuw
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>Amsterdam</span>
                    </div>
                    <h3 className="text-xl font-black text-[#1C3364] mb-2 group-hover:text-[#F37325] transition-colors">
                      Verpleegkundige GGZ
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Ben jij een betrokken verpleegkundige die graag werkt in de GGZ? Wij zoeken professionals voor mooie opdrachten.
                    </p>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Lees meer
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeContent>

            <FadeContent blur delay={200} duration={1000}>
              <Link href="/blog">
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#F37325] hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                      alt="Blog"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-[#1C3364] text-white text-sm font-bold">
                        Tips
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>5 min lezen</span>
                    </div>
                    <h3 className="text-xl font-black text-[#1C3364] mb-2 group-hover:text-[#F37325] transition-colors">
                      Sollicitatietips voor de zorg
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Zo maak je indruk tijdens je sollicitatiegesprek in de zorgsector. Handige tips van onze recruiters.
                    </p>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Lees artikel
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeContent>

            <FadeContent blur delay={300} duration={1000}>
              <Link href="/blog">
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#F37325] hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80"
                      alt="Blog"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-[#1C3364] text-white text-sm font-bold">
                        Blog
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>8 min lezen</span>
                    </div>
                    <h3 className="text-xl font-black text-[#1C3364] mb-2 group-hover:text-[#F37325] transition-colors">
                      Werkgeluk in de zorg
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Hoe vind je een werkplek waar je écht gelukkig van wordt? Ontdek wat echt belangrijk is in jouw carrière.
                    </p>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Lees artikel
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Succesverhalen uit de praktijk */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeContent blur duration={800} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
              Succesverhalen uit de <span className="text-[#F37325]">praktijk</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoe wij zorginstellingen helpen met de juiste professionals op het juiste moment
            </p>
          </FadeContent>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeContent blur delay={100} duration={1000}>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#F37325] text-[#F37325]" />
                  ))}
                </div>
                <p className="text-gray-700 text-xl leading-relaxed mb-8 font-medium">
                  &quot;Binnen 24 uur hadden we twee verzorgenden op locatie. Snel, professioneel en prettig in de samenwerking. Ze begrijpen echt wat er nodig is.&quot;
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1C3364] to-[#1C3364]/80 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[#1C3364] font-black text-lg">Maria van den Berg</p>
                    <p className="text-gray-600">Zorgmanager Ouderenzorg</p>
                    <p className="text-gray-500 text-sm mt-1">Breda</p>
                  </div>
                </div>
              </div>
            </FadeContent>

            <FadeContent blur delay={200} duration={1000}>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#F37325] text-[#F37325]" />
                  ))}
                </div>
                <p className="text-gray-700 text-xl leading-relaxed mb-8 font-medium">
                  &quot;JM kijkt echt mee met onze zorgvraag. Niet alleen leveren, maar ook meedenken over de beste match. Dat maakt het verschil.&quot;
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F37325] to-[#F37325]/80 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[#1C3364] font-black text-lg">Pieter Jansen</p>
                    <p className="text-gray-600">Regiocoördinator Jeugdzorg</p>
                    <p className="text-gray-500 text-sm mt-1">Rotterdam</p>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Over Ons Preview - Licht thema zoals "Ontdek" sectie */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Subtiele achtergrond */}
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="/images/zorg-professional.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeContent blur duration={800} className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-6">
              Wat maakt <span className="text-[#F37325]">JM Zorgpartners</span> anders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij bouwen aan langdurige relaties, niet alleen aan tijdelijke oplossingen
            </p>
          </FadeContent>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Over Ons Card */}
            <FadeContent blur delay={100} duration={1000}>
              <Link href="/over-ons">
                <GlareCard className="group h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#F37325] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                      alt="Over Ons"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3364]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">Ons Verhaal</h3>
                      <p className="text-white/90 text-sm">Leer JM Zorgpartners kennen</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Al jaren zijn wij het vertrouwde gezicht in de zorgsector. Onze persoonlijke aanpak en oog voor detail maken het verschil.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Heart className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Persoonlijke benadering</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Shield className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Jarenlange ervaring</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">Betrokken team</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Lees ons verhaal
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </GlareCard>
              </Link>
            </FadeContent>

            {/* Contact Card */}
            <FadeContent blur delay={200} duration={1000}>
              <Link href="/contact">
                <GlareCard className="group h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#F37325] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&q=80"
                      alt="Contact"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3364]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-black text-white mb-2">Kom in Contact</h3>
                      <p className="text-white/90 text-sm">We helpen je graag verder</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Heb je vragen of wil je vrijblijvend kennismaken? Neem direct contact op en ontdek hoe wij jou kunnen helpen.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">085 - 0000000</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">info@jmzorgpartners.nl</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="w-5 h-5 text-[#F37325]" />
                        <span className="font-medium">24/7 bereikbaar</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F37325] font-bold group-hover:gap-4 transition-all">
                      Neem contact op
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </GlareCard>
              </Link>
            </FadeContent>
          </div>
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
    </main>
  )
}
