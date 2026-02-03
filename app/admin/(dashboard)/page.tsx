import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const [
    { count: postsCount },
    { count: publishedCount },
    { count: draftCount },
    { count: categoriesCount },
  ] = await Promise.all([
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
    supabase.from('blog_categories').select('*', { count: 'exact', head: true }),
  ])

  const { data: recentPosts } = await supabase
    .from('blog_posts')
    .select('id, title, status, created_at, views_count')
    .order('created_at', { ascending: false })
    .limit(5)

  const stats = [
    { label: 'Total Artikel', value: postsCount ?? 0, color: 'bg-blue-500' },
    { label: 'Dipublikasi', value: publishedCount ?? 0, color: 'bg-green-500' },
    { label: 'Draft', value: draftCount ?? 0, color: 'bg-yellow-500' },
    { label: 'Kategori', value: categoriesCount ?? 0, color: 'bg-purple-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <span className="text-white text-xl font-bold">{stat.value}</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Artikel Terbaru</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <div key={post.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{post.views_count} views</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : post.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.status === 'published' ? 'Publik' : post.status === 'draft' ? 'Draft' : 'Arsip'}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-400">
              Belum ada artikel. Mulai buat artikel pertama Anda.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
