import { api } from "@/utils/api";

export function createConfirm(data: { keyword: string, content: string  }) {
  return api(`/api/confirms`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function getConfirms({ search, page, pageSize }: { search?: string, page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (search) params.append('search', search.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  return api(`/api/confirms?${params.toString()}`);
}

export function updateConfirm({ id, data } : { id: number, data: { keyword: string, content: string } }) {
  return api(`/api/confirms/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteConfirm(id: number) {
  return api(`/api/confirms/${id}`, {
    method: 'DELETE',
  })
}
