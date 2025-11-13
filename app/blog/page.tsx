import Link from 'next/link'
import { getBlogPosts } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { AnimatedTitle } from '@/components/aceternity/animated-title'
import { CardSpotlight } from '@/components/aceternity/card-spotlight'
import FadeContent from '@/components/react-bits/FadeContent'
import ScaleIn from '@/components/react-bits/ScaleIn'

export default function BlogPage() {
  const posts = getBlogPosts()
  const featured = posts.filter(p => p.featured)
  const other = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1C3364]/5 via-white to-[#F37325]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeContent>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1C3364] mb-4">
                Blog & Nieuws
              </h1>
              <p className="text-base text-gray-600">
                Tips, trends en verhalen uit de zorgsector. Blijf op de hoogte van het laatste nieuws!
              </p>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeContent>
              <h2 className="text-3xl font-bold text-[#1C3364] mb-12">Uitgelichte Artikelen</h2>
            </FadeContent>
            
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
          <FadeContent>
            <h2 className="text-3xl font-bold text-[#1C3364] mb-12">
              {featured.length > 0 ? 'Meer Artikelen' : 'Alle Artikelen'}
            </h2>
          </FadeContent>
          
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
    </div>
  )
}
