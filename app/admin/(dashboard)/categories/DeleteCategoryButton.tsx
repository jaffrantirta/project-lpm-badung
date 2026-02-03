'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DeleteCategoryButton({
  categoryId,
  categoryName,
}: {
  categoryId: string
  categoryName: string
}) {
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async () => {
    if (!confirm(`Hapus kategori "${categoryName}"?`)) return

    await supabase.from('blog_categories').delete().eq('id', categoryId)
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
