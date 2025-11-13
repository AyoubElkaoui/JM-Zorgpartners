'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, Clock } from 'lucide-react'
import { AnimatedTitle } from '@/components/aceternity/animated-title'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
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
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeContent>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-4">
                Neem Contact Op
              </h1>
              <p className="text-base text-gray-600">
                Heb je vragen of wil je meer weten over onze diensten? We helpen je graag verder!
              </p>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeContent>
              <CardSpotlight className="p-6">
                <h2 className="text-2xl font-bold text-[#1C3364] mb-2">Stuur ons een bericht</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Vul het formulier in en we nemen zo snel mogelijk contact met je op.
                </p>
                
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
                  <h3 className="text-2xl font-bold text-[#1C3364] mb-6">Contactgegevens</h3>
                  
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
                <CardSpotlight className="p-8 bg-gradient-to-br from-[#F37325] to-[#F37325]/80 text-white">
                  <h3 className="text-2xl font-bold mb-2">24/7 Spoedlijn</h3>
                  <p className="text-white/90 mb-4">
                    Voor acute zorgvragen buiten kantooruren
                  </p>
                  <p className="text-3xl font-bold mb-2">+31 (0) 6 987 654 321</p>
                  <p className="text-sm text-white/80">
                    Direct beschikbaar voor spoedgevallen
                  </p>
                </CardSpotlight>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
