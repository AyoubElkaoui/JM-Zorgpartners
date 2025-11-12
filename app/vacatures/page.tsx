import Link from 'next/link'
import { getVacatures } from '@/lib/content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn, ScaleIn } from '@/components/animations'
import { MapPin, Briefcase, GraduationCap, Clock, ArrowRight, Search } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function VacaturesPage() {
  const vacatures = getVacatures()
  const featured = vacatures.filter(v => v.featured)
  const other = vacatures.filter(v => !v.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Actuele Vacatures
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vind jouw droombaan in de zorg. Bekijk onze uitgebreide vacaturebank en solliciteer direct!
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Zoek op functie, locatie..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button size="lg">
                    Zoeken
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Vacatures */}
      {featured.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Uitgelichte Vacatures</h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((vacature, index) => (
                <ScaleIn key={vacature.slug} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <CardTitle className="text-xl">{vacature.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {vacature.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        {vacature.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                        {vacature.education}
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-lg font-semibold text-primary">{vacature.salary}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/vacatures/${vacature.slug}`}>
                          Bekijk Vacature
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Vacatures */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              {featured.length > 0 ? 'Alle Vacatures' : 'Beschikbare Vacatures'}
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(featured.length > 0 ? other : vacatures).map((vacature, index) => (
              <ScaleIn key={vacature.slug} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{vacature.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {vacature.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {vacature.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                      {vacature.education}
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-lg font-semibold text-primary">{vacature.salary}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Geplaatst: {formatDate(vacature.posted)}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/vacatures/${vacature.slug}`}>
                        Meer Info
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScaleIn>
            ))}
          </div>

          {vacatures.length === 0 && (
            <FadeIn>
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  Er zijn momenteel geen vacatures beschikbaar. Kom binnenkort terug!
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Niet gevonden wat je zocht?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Stuur ons een open sollicitatie! We denken graag met je mee over de mogelijkheden.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Open Sollicitatie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
