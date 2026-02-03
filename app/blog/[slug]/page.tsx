import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) return { title: 'Artikel Tidak Ditemukan' }

  return {
    title: `${post.title} - LPM Kabupaten Badung`,
    description: post.excerpt ?? undefined,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*, blog_categories(name, slug), profiles(full_name)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) notFound()

  // Increment views (fire and forget)
  supabase.rpc('increment_post_views', { post_id: post.id }).then()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-900">Beranda</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-900">Blog</Link>
              <span>/</span>
              <span className="text-gray-900 line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Header */}
          <header className="mb-8">
            {(post.blog_categories as unknown as { name: string; slug: string } | null) && (
              <Link
                href={`/blog?kategori=${(post.blog_categories as unknown as { slug: string }).slug}`}
                className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition"
              >
                {(post.blog_categories as unknown as { name: string }).name}
              </Link>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              {(post.profiles as unknown as { full_name: string } | null) && (
                <span>Oleh {(post.profiles as unknown as { full_name: string }).full_name}</span>
              )}
              <span>
                {new Date(post.published_at ?? post.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span>{post.views_count} views</span>
            </div>
          </header>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
