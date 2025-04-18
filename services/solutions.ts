import { api } from "@/utils/api";

export function createSolution(data: { keyword: string, content: string  }) {
  return api(`/api/solutions`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function getSolutions({ search, page, pageSize }: { search?: string, page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (search) params.append('search', search.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  return api(`/api/solutions?${params.toString()}`);
}

export function updateSolution({ id, data } : { id: number, data: { keyword: string, content: string } }) {
  return api(`/api/solutions/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteSolution(id: number) {
  return api(`/api/solutions/${id}`, {
    method: 'DELETE',
  })
}
