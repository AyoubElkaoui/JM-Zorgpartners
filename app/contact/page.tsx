'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, Clock, FileText, ArrowRight, HeartHandshake, CheckCircle2, MessageSquare, Users, Zap } from 'lucide-react'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { MovingBorder } from '@/components/aceternity/moving-border'
import { GradientText } from '@/components/aceternity/animated-title'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      alert('Er ging iets mis. Probeer het opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Zoals Andere Paginas */}
      <section className="relative py-32 bg-gradient-to-br from-[#1C3364] via-[#1C3364]/95 to-[#F37325]/30 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F37325] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full backdrop-blur-sm border border-white/20">
                  <MessageSquare className="h-5 w-5 text-[#F37325]" />
                  <span className="text-base font-semibold text-white">We Helpen Je Graag</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  Neem <GradientText>Contact</GradientText> Op
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed">
                  Heb je vragen over onze diensten? Of wil je direct starten met jouw nieuwe uitdaging in de zorg? 
                  Ons team staat voor je klaar!
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Clock className="h-5 w-5 text-[#F37325]" />
                    <span className="text-white font-semibold">24u Reactie</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Users className="h-5 w-5 text-[#F37325]" />
                    <span className="text-white font-semibold">Persoonlijk Contact</span>
                  </div>
                </div>
              </div>
            </FadeContent>
            
            <FadeContent delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/contact-hero.jpg"
                  alt="Contact Hero"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3364]/60 to-transparent" />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeContent>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full mb-4">
                <Send className="h-5 w-5 text-[#F37325]" />
                <span className="text-base font-semibold text-[#1C3364]">Direct Contact</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1C3364] mb-4">
                Stuur ons een <GradientText>Bericht</GradientText>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Vul het formulier in of bel ons direct. We reageren binnen 24 uur op je bericht!
              </p>
            </div>
          </FadeContent>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeContent>
              <CardSpotlight className="p-8">{/* Removed duplicate title */}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Naam *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Je volledige naam"
                      required
                      disabled={isSubmitting}
                      className="border-[#1C3364]/20 focus:border-[#F37325]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1C3364] mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="je@email.nl"
                      required
                      disabled={isSubmitting}
                      className="border-[#1C3364]/20 focus:border-[#F37325]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Telefoonnummer *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+31 6 12345678"
                      required
                      disabled={isSubmitting}
                      className="border-[#1C3364]/20 focus:border-[#F37325]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Onderwerp *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Waar gaat je vraag over?"
                      required
                      disabled={isSubmitting}
                      className="border-[#1C3364]/20 focus:border-[#F37325]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1C3364] mb-2">
                      Bericht *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Je bericht..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="border-[#1C3364]/20 focus:border-[#F37325]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#F37325] hover:bg-[#F37325]/90 text-white" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Versturen...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Verstuurd!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Verstuur Bericht
                      </>
                    )}
                  </Button>
                </form>
              </CardSpotlight>
            </FadeContent>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScaleIn delay={0.1}>
                <CardSpotlight className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#F37325]/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#F37325]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#1C3364]">Contactgegevens</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-[#F37325]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#F37325]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C3364] mb-1">Telefoon</h4>
                        <p className="text-gray-600 font-medium">+31 (0) 123 456 789</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          Ma-Vr: 08:00 - 18:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-[#F37325]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#F37325]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C3364] mb-1">E-mail</h4>
                        <p className="text-gray-600 font-medium">info@jmzorgpartners.nl</p>
                        <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-[#F37325]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#F37325]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C3364] mb-1">Adres</h4>
                        <p className="text-gray-600">
                          Straatnaam 123<br />
                          1234 AB Amsterdam<br />
                          Nederland
                        </p>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
              </ScaleIn>

              <ScaleIn delay={0.2}>
                <CardSpotlight className="p-8 bg-gradient-to-br from-[#F37325] to-[#F37325]/80 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">24/7 Spoedlijn</h3>
                    </div>
                    <p className="text-white/90 mb-4 text-lg">
                      Voor acute zorgvragen buiten kantooruren
                    </p>
                    <p className="text-4xl font-black mb-2">06 53 474 474</p>
                    <p className="text-base text-white/80">
                      Direct beschikbaar voor spoedgevallen
                    </p>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Zoals Homepage */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
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
                <ScaleIn delay={0.2}>
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
                <ScaleIn delay={0.3}>
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
    </div>
  )
}
