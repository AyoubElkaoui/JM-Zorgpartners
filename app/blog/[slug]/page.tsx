import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/animations'
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar blog
            </Link>
            
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">{post.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-600">
              <span className="flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                {formatDate(post.date)}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card>
              <CardContent className="prose prose-lg max-w-none pt-8">
                <MDXRemote source={post.content} />
              </CardContent>
            </Card>
          </FadeIn>

          {/* Share */}
          <FadeIn delay={0.2}>
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Deel dit artikel</h3>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Delen
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <Card className="mt-12 bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Wil je meer weten?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Neem contact met ons op voor persoonlijk advies of bekijk onze actuele vacatures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Neem Contact Op</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                    <Link href="/vacatures">Bekijk Vacatures</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
