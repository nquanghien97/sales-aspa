import { api } from "@/utils/api";
import { FILE_CATEGORY } from "@prisma/client";

export function getFiles({ category, page, pageSize, search, slug }: { category?: FILE_CATEGORY, page?: number, pageSize?: number, search?: string, slug?: string }) {
  const params = new URLSearchParams();
  if (category) params.append('category', category.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search.toString());
  if (slug) params.append('slug', slug.toString());

  return api(`/api/get-files?${params.toString()}`);
}

export function createFiles({ category, data }: { category: FILE_CATEGORY, data: FormData }) {
  return api(`/api/files/${category}`,
    {
      method: 'POST',
      body: data,
    }
  )
}

export function deleteFile({ id } : { id: number }) {
  return api(`/api/delete-file/${id}`, {
    method: 'DELETE',
  })
}