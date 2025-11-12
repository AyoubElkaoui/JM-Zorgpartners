import Link from 'next/link'
import { getBlogPosts } from '@/lib/content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn, ScaleIn } from '@/components/animations'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  const posts = getBlogPosts()
  const featured = posts.filter(p => p.featured)
  const other = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Blog & Nieuws
              </h1>
              <p className="text-xl text-gray-600">
                Tips, trends en verhalen uit de zorgsector. Blijf op de hoogte van het laatste nieuws!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Uitgelichte Artikelen</h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((post, index) => (
                <ScaleIn key={post.slug} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{post.category}</span>
                      </div>
                      <CardTitle className="text-2xl hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Lees Meer
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              {featured.length > 0 ? 'Meer Artikelen' : 'Alle Artikelen'}
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(featured.length > 0 ? other : posts).map((post, index) => (
              <ScaleIn key={post.slug} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-secondary/20 to-primary/20" />
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Lees Meer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>

          {posts.length === 0 && (
            <FadeIn>
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  Er zijn momenteel geen blogposts beschikbaar. Kom binnenkort terug!
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  )
}
