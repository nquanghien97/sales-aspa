import { api } from "@/utils/api";
import { CATEGORY } from "@prisma/client";

export function createCategory(data: { keyword: string, content: string, category: CATEGORY }) {
  return api(`/api/category`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function getCategories({ search, page, pageSize, category }: { search?: string, page?: number, pageSize?: number, category: CATEGORY }) {
  const params = new URLSearchParams();
  if (search) params.append('search', search.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (category) params.append('category', category.toString());
  return api(`/api/category?${params.toString()}`);
}

export function updateCategory({ id, data } : { id: number, data: { keyword: string } }) {
  return api(`/api/category/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteCategory(id: number) {
  return api(`/api/category/${id}`, {
    method: 'DELETE',
  })
}
