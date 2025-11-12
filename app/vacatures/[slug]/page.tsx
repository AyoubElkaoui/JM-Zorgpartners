import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getVacatureBySlug, getVacatures } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/animations'
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Clock, DollarSign, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const vacatures = getVacatures()
  return vacatures.map((vacature) => ({
    slug: vacature.slug,
  }))
}

export default function VacatureDetailPage({ params }: { params: { slug: string } }) {
  const vacature = getVacatureBySlug(params.slug)

  if (!vacature) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/vacatures"
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar vacatures
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {vacature.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                {vacature.location}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                {vacature.type}
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                {formatDate(vacature.posted)}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <Card>
                  <CardContent className="prose prose-lg max-w-none pt-6">
                    <MDXRemote source={vacature.content} />
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Functiedetails</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Salaris</p>
                        <p className="font-semibold">{vacature.salary}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Dienstverband</p>
                        <p className="font-semibold">{vacature.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Opleiding</p>
                        <p className="font-semibold">{vacature.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Ervaring</p>
                        <p className="font-semibold">{vacature.experience}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                  <CardHeader>
                    <CardTitle>Direct Solliciteren</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/90">
                      Ben je enthousiast over deze functie? Neem contact met ons op!
                    </p>
                    <Button size="lg" variant="secondary" className="w-full" asChild>
                      <Link href="/contact">Solliciteer Nu</Link>
                    </Button>
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm text-white/80 mb-2">Of bel ons direct:</p>
                      <p className="text-xl font-bold">+31 (0) 123 456 789</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
