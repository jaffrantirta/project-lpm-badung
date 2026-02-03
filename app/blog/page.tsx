import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog - LPM Kabupaten Badung',
  description: 'Berita dan artikel terbaru dari LPM Kabupaten Badung',
}

export const dynamic = 'force-dynamic'

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>
}) {
  const { kategori } = await searchParams
  const supabase = await createClient()

  let postsQuery = supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, cover_image, created_at, category_id, blog_categories(id, name, slug)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const { data: categories } = await supabase
    .from('blog_categories')
    .select('id, name, slug')
    .order('name')

  // Filter by category slug if provided
  if (kategori && categories) {
    const matchedCategory = categories.find((c) => c.slug === kategori)
    if (matchedCategory) {
      postsQuery = postsQuery.eq('category_id', matchedCategory.id)
    }
  }

  const { data: posts } = await postsQuery

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog & Berita</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Informasi terbaru seputar kegiatan dan program LPM Kabupaten Badung
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        {categories && categories.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  !kategori
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                Semua
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?kategori=${cat.slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    kategori === cat.slug
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group"
                >
                  {post.cover_image ? (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}

                  <div className="p-5">
                    {(post.blog_categories as unknown as { name: string; slug: string } | null) && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {(post.blog_categories as unknown as { name: string }).name}
                      </span>
                    )}
                    <h2 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2 group-hover:text-blue-900 transition">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm line-clamp-3">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(post.created_at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-400 text-lg">
                {kategori ? 'Tidak ada artikel dalam kategori ini.' : 'Belum ada artikel yang dipublikasikan.'}
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
