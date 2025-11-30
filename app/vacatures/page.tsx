import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn, ScaleIn } from '@/components/animations'
import { MapPin, Briefcase, GraduationCap, Clock, ArrowRight, Phone, Mail, Users, Stethoscope, CheckCircle2 } from 'lucide-react'
import CTASection from '@/components/cta-section'

export default function VacaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full mb-6">
                <Briefcase className="h-5 w-5 text-[#F37325]" />
                <span className="text-lg font-semibold text-[#1C3364]">Vacatures</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight mb-6">
                Werken bij <span className="text-[#F37325]">JM Zorgpartners</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Bij JM Zorgpartners bieden wij afwisselende opdrachten binnen verschillende zorgsectoren.
                Of je nu op zoek bent naar korte diensten, tijdelijke opdrachten of langere inzet, wij
                koppelen je aan werk dat écht bij jou past.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Bekijk hieronder onze actuele vacatures en meld je eenvoudig aan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 text-lg" asChild>
                  <Link href="#vacatures">
                    Bekijk Vacatures
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#1C3364] text-[#1C3364] hover:bg-[#1C3364] hover:text-white px-8 py-4 text-lg" asChild>
                  <Link href="/zorgprofessionals">
                    Direct Aanmelden
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Beschikbare Functies */}
      <section id="vacatures" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-6">
                Beschikbare functies
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Verzorgende IG (VIG) */}
            <ScaleIn delay={0.1}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-[#F37325]/20">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <CardTitle className="text-2xl text-center text-[#1C3364]">Verzorgende IG (VIG)</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Sectoren: Ouderenzorg, gehandicaptenzorg, GGZ, jeugdzorg
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Dienstverband:</strong> Loondienst of zelfstandige inzet
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C3364] mb-3">Wat wij bieden:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Opdrachten die passen bij jouw ervaring
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Flexibele planning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Betrouwbare en duidelijke afspraken
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#F37325] hover:bg-[#d96420] text-white" asChild>
                    <Link href="/zorgprofessionals">
                      Bekijk vacature / Direct aanmelden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScaleIn>

            {/* Verpleegkundige (MBO/HBO) */}
            <ScaleIn delay={0.2}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-[#F37325]/20">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <CardTitle className="text-2xl text-center text-[#1C3364]">Verpleegkundige (MBO/HBO)</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Sectoren: Ouderenzorg, GGZ, jeugdzorg, verslavingszorg
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Dienstverband:</strong> Loondienst of zelfstandige inzet
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C3364] mb-3">Wat wij bieden:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Professionele ondersteuning vanuit ons team
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Afwisseling of juist langere opdrachten
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Marktconforme beloning
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#F37325] hover:bg-[#d96420] text-white" asChild>
                    <Link href="/zorgprofessionals">
                      Bekijk vacature / Direct aanmelden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScaleIn>

            {/* Begeleider (niveau 3 of 4) */}
            <ScaleIn delay={0.3}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-[#F37325]/20">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <CardTitle className="text-2xl text-center text-[#1C3364]">Begeleider (niveau 3 of 4)</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Sectoren: Gehandicaptenzorg, jeugdzorg, speciaal onderwijs, opvang
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Dienstverband:</strong> Loondienst of zelfstandige inzet
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C3364] mb-3">Wat wij bieden:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Opdrachten die aansluiten bij jouw persoonlijkheid
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Werken met diverse doelgroepen
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#F37325] mr-2 mt-0.5 flex-shrink-0" />
                        Snel starten zodra jouw dossier compleet is
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#F37325] hover:bg-[#d96420] text-white" asChild>
                    <Link href="/zorgprofessionals">
                      Bekijk vacature / Direct aanmelden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Waarom werken via JM Zorgpartners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-6">
                Waarom werken via JM Zorgpartners?
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Persoonlijk contact</h3>
                  <p className="text-gray-600">
                    Wij nemen de tijd voor jou en luisteren naar jouw wensen en behoeften.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Duidelijke afspraken</h3>
                  <p className="text-gray-600">
                    Transparante communicatie en heldere afspraken over werktijden en voorwaarden.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Snelle en betrouwbare planning</h3>
                  <p className="text-gray-600">
                    Flexibele planning die aansluit bij jouw beschikbaarheid en wensen.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.4}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Werk dat aansluit bij jouw kwaliteiten</h3>
                  <p className="text-gray-600">
                    Opdrachten die perfect matchen met jouw ervaring en competenties.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.5}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-[#F37325]/10 flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-[#F37325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Altijd bereikbaar</h3>
                  <p className="text-gray-600">
                    Wanneer je ons nodig hebt, zijn wij er voor je met ondersteuning en advies.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Zo meld je je aan */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-6">
                  Zo meld je je aan
                </h2>
                <p className="text-xl text-gray-600">
                  Aanmelden is eenvoudig. Vul het aanmeldformulier in en wij nemen snel persoonlijk contact met je op.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F37325] text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1C3364] mb-2">Vul het aanmeldformulier in</h3>
                      <p className="text-gray-600">
                        Neem een paar minuten de tijd om ons online formulier in te vullen met jouw gegevens en voorkeuren.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F37325] text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1C3364] mb-2">Wij nemen contact op</h3>
                      <p className="text-gray-600">
                        Ons team bekijkt jouw profiel en neemt binnen 24 uur contact met je op voor een persoonlijk gesprek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F37325] text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1C3364] mb-2">Start met werken</h3>
                      <p className="text-gray-600">
                        Zodra alles compleet is, kun je direct starten met passende opdrachten die bij jou passen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#1C3364] mb-4">Direct contact?</h3>
                  <p className="text-gray-600 mb-6">
                    Liever direct contact? Tijdens kantooruren kun je ons ook bellen of mailen.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#F37325]" />
                      <span className="text-[#1C3364]">T. 033 303 30 42</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#F37325]" />
                      <span className="text-[#1C3364]">E. info@jmzorgpartners.nl</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-[#F37325] hover:bg-[#d96420] text-white" asChild>
                      <Link href="/zorgprofessionals">
                        Naar aanmeldformulier
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
