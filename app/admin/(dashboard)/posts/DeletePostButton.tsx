'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({ postId, postTitle }: { postId: string; postTitle: string }) {
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async () => {
    if (!confirm(`Hapus artikel "${postTitle}"?`)) return

    await supabase.from('blog_posts').delete().eq('id', postId)
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 text-sm font-medium"
    >
      Hapus
    </button>
  )
}
