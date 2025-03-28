import { CustomersDTO } from "@/dto/customers";
import { api } from "@/utils/api";

export function createCustomer(data: CustomersDTO) {
  return api(`/api/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export function getCustomers({ search, page, pageSize }: { search?: string, page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (search) params.append('search', search.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  return api(`/api/customers?${params.toString()}`);
}

export function updateCustomer({ id, data }: { id: number, data: CustomersDTO }) {
  return api(`/api/customers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export function deleteCustomer(id: number) {
  return api(`/api/customers/${id}`, {
    method: 'DELETE',
  })
}

export function createBulkCustomers(data: CustomersDTO[]) {
  return api(`/api/bulk-customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

