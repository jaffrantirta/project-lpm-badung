import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import DeletePostButton from './DeletePostButton'

export const dynamic = 'force-dynamic'

export default async function PostsListPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, status, views_count, created_at, blog_categories(name)')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <Link
          href="/admin/posts/create"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Buat Artikel
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Judul</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Kategori</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Views</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Tanggal</th>
                <th className="text-right px-6 py-3 text-sm font-semibold text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 line-clamp-1">{post.title}</p>
                      <p className="text-xs text-gray-400 mt-1">/{post.slug}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {(post.blog_categories as unknown as { name: string } | null)?.name ?? '-'}
                    </td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{post.views_count}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(post.created_at).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Edit
                        </Link>
                        <DeletePostButton postId={post.id} postTitle={post.title} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    Belum ada artikel. Klik &quot;Buat Artikel&quot; untuk memulai.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
