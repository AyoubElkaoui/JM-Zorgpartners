'use client'

import Link from 'next/link'
import { Phone, Mail, Clock, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import { MovingBorder } from '@/components/aceternity/moving-border'

export default function CTASection() {
  return (
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
            <Link href="tel:0333033042">
              <ScaleIn delay={200} duration={700}>
                <MovingBorder
                  duration={7000}
                  className="bg-[#F37325] hover:bg-[#d96420] text-white px-10 py-5 font-black text-lg"
                  containerClassName="w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-6 h-6" />
                    <span>Bel 033 303 30 42</span>
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
  )
}