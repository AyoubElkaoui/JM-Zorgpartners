import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Tag, Phone, FileText, Clock, HeartHandshake, CheckCircle2, BookOpen } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { AnimatedTitle, GradientText } from '@/components/aceternity/animated-title'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import { MovingBorder } from '@/components/aceternity/moving-border'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'
import ScrollToTop from '@/components/scroll-to-top'

export default function BlogPage() {
  const posts = getBlogPosts()
  const featured = posts.filter(p => p.featured)
  const other = posts.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-white pt-32">
      {/* Hero Section - EXACT zoals Opdrachtgevers */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeContent>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37325]/10 rounded-full">
                  <BookOpen className="h-5 w-5 text-[#F37325]" />
                  <span className="text-lg font-semibold text-[#1C3364]">Kennis & Inspiratie</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-black text-[#1C3364] leading-tight">
                  Blog & <GradientText>Nieuws</GradientText>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ontdek de laatste trends, tips en verhalen uit de zorgsector. Van praktische sollicitatietips tot inspirerende succesverhalen.
                </p>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-[#F37325]/20 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Blijf op de hoogte van <span className="font-bold text-[#1C3364]">carrièremogelijkheden</span>, 
                    <span className="font-bold text-[#1C3364]"> werkgeluk</span> en 
                    <span className="font-bold text-[#1C3364]"> ontwikkelingen</span> in de zorg.
                  </p>
                </div>
              </div>
            </FadeContent>
            
            <FadeContent delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800"
                  alt="Blog Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <FadeContent>
                <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
                  Uitgelichte <GradientText>Artikelen</GradientText>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Onze meest gelezen en waardevolle artikelen speciaal voor jou geselecteerd
                </p>
              </FadeContent>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((post, index) => (
                <ScaleIn key={post.slug} delay={index * 0.1}>
                  <CardSpotlight className="h-full group">
                    <div className="h-48 bg-gradient-to-br from-[#1C3364]/20 to-[#F37325]/20 rounded-t-xl" />
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Tag className="h-3 w-3 text-[#F37325]" />
                        <span className="text-xs font-semibold text-[#F37325]">{post.category}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#1C3364] group-hover:text-[#F37325] transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                      
                      <Button size="sm" className="mt-2 bg-[#F37325] hover:bg-[#F37325]/90" asChild>
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                          Lees Meer
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardSpotlight>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeContent>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
                {featured.length > 0 ? (
                  <>Meer <GradientText>Artikelen</GradientText></>
                ) : (
                  <>Alle <GradientText>Artikelen</GradientText></>
                )}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Blijf op de hoogte van de laatste ontwikkelingen in de zorgsector
              </p>
            </FadeContent>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(featured.length > 0 ? other : posts).map((post, index) => (
              <ScaleIn key={post.slug} delay={index * 0.1}>
                <CardSpotlight className="h-full group">
                  <div className="h-48 bg-gradient-to-br from-[#F37325]/20 to-[#1C3364]/20 rounded-t-xl" />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-[#F37325]" />
                      <span className="text-sm font-semibold text-[#F37325]">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#1C3364] group-hover:text-[#F37325] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3 text-sm">{post.excerpt}</p>
                    
                    <Button variant="ghost" size="sm" className="text-[#F37325] hover:bg-[#F37325]/10" asChild>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Lees Meer
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardSpotlight>
              </ScaleIn>
            ))}
          </div>

          {posts.length === 0 && (
            <FadeContent>
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  Er zijn momenteel geen blogposts beschikbaar. Kom binnenkort terug!
                </p>
              </div>
            </FadeContent>
          )}
        </div>
      </section>

      {/* CTA Section - Zoals Homepage */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeContent>
            <h2 className="text-5xl lg:text-6xl font-black text-[#1C3364] mb-4">
              Op zoek naar een baan in de zorg? <span className="text-[#F37325]">Meld je nu aan</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Meld je eenvoudig aan via ons formulier. Binnen 24 uur hoor je van ons.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact">
                <ScaleIn delay={0.2}>
                  <MovingBorder
                    duration={7000}
                    className="bg-[#F37325] hover:bg-[#d96420] text-white px-8 py-4 font-bold text-lg"
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
                    className="bg-white hover:bg-gray-50 text-[#1C3364] px-8 py-4 font-bold text-lg border-2 border-[#1C3364]"
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

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <Clock className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Binnen 24 uur reactie</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <HeartHandshake className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Persoonlijk advies</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#F37325] mx-auto mb-3" />
                <p className="font-bold text-[#1C3364]">Geen verplichtingen</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
      <ScrollToTop />
    </main>
  )
}
