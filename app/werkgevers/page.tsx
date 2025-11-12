import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations'
import { 
  Building2, 
  UserCheck, 
  Clock, 
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react'

export default function WerkgeversPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  <Building2 className="h-4 w-4" />
                  <span>Voor Werkgevers</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Vind de Perfecte Zorgprofessional
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Wij begrijpen de uitdagingen in de zorg. Laat ons jouw partner zijn in het vinden 
                  van gekwalificeerd en gemotiveerd zorgpersoneel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Bespreek je Behoefte
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+31123456789">
                      <Phone className="mr-2 h-5 w-5" />
                      Bel Direct
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative h-full w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="h-32 w-32 text-primary mx-auto mb-4 animate-float" />
                    <p className="text-2xl font-semibold text-gray-800">Jouw Partner in Zorg</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Onze Diensten */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Onze Diensten
              </h2>
              <p className="text-xl text-gray-600">
                Complete HR-oplossingen voor de zorgsector
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: 'Werving & Selectie',
                description: 'Wij vinden de perfecte kandidaat voor jouw organisatie. Van screening tot plaatsing.',
                features: [
                  'Uitgebreide kandidaatscreening',
                  'Referentiecheck',
                  'Skill assessment',
                  'Persoonlijke matching',
                ],
              },
              {
                icon: Clock,
                title: 'Flexibele Detachering',
                description: 'Tijdelijk personeel voor elke situatie. Van enkele dagen tot langdurige opdrachten.',
                features: [
                  'Korte en lange termijn',
                  'Vervanging bij ziekte',
                  'Piekbelasting opvangen',
                  'Snelle plaatsing mogelijk',
                ],
              },
              {
                icon: Shield,
                title: '24/7 Spoedlijn',
                description: 'Voor acute personeelstekorten kun je altijd op ons rekenen, dag en nacht.',
                features: [
                  'Direct beschikbaar personeel',
                  'Kwaliteit gegarandeerd',
                  'Binnen 4 uur reactie',
                  'Weekend en feestdagen',
                ],
              },
            ].map((service, index) => (
              <ScaleIn key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Ons */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor JM Zorgpartners?
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="space-y-8">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Snel & Efficiënt',
                    description: 'We begrijpen de urgentie. Onze gemiddelde tijd van aanvraag tot plaatsing is 48 uur.',
                  },
                  {
                    icon: Shield,
                    title: 'Kwaliteitsgarantie',
                    description: 'Alle kandidaten zijn gescreend, BIG-geregistreerd en beschikken over actuele referenties.',
                  },
                  {
                    icon: UserCheck,
                    title: 'Persoonlijke Aanpak',
                    description: 'Vaste contactpersoon die jouw organisatie kent en begrijpt wat jullie nodig hebben.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Geen Zorgen Garantie',
                    description: 'Niet tevreden? We bieden vervangingsgarantie zonder extra kosten.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Onze Aanpak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Kennismaken',
                      description: 'We leren jouw organisatie en specifieke behoeften kennen.',
                    },
                    {
                      step: '2',
                      title: 'Profiel Opstellen',
                      description: 'Samen bepalen we het ideale kandidaatprofiel.',
                    },
                    {
                      step: '3',
                      title: 'Zoeken & Selecteren',
                      description: 'Wij zoeken en screenen geschikte kandidaten uit ons netwerk.',
                    },
                    {
                      step: '4',
                      title: 'Presentatie',
                      description: 'Je krijgt een shortlist met de beste matches.',
                    },
                    {
                      step: '5',
                      title: 'Begeleiding',
                      description: 'We begeleiden het hele proces tot succesvolle plaatsing.',
                    },
                  ].map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">{step.title}</h4>
                        <p className="text-sm text-white/80">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Tarieven */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Transparante Tarieven
              </h2>
              <p className="text-xl text-gray-600">
                Eerlijke prijzen zonder verborgen kosten
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    'Geen vooruitbetaling of inschrijfkosten',
                    'Concurrerende uurtarieven',
                    'Maatwerk in facturatie mogelijk',
                    'Volume kortingen beschikbaar',
                    'Vervangingsgarantie inbegrepen',
                    'Transparante kostopbouw',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t text-center">
                  <p className="text-gray-600 mb-4">
                    Wil je een offerte op maat? Neem contact met ons op.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Vraag Offerte Aan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Klaar om de Beste Zorgprofessionals te Vinden?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Neem vandaag nog contact op en ervaar het verschil van persoonlijke service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Plan een Gesprek
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="tel:+31123456789">
                    <Phone className="mr-2 h-5 w-5" />
                    +31 (0) 123 456 789
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
