import { api } from "@/utils/api";
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from "@prisma/client";

export function createCustomerInsight(data: { time: CUSTOMER_INSIGHT_TIME, age: CUSTOMER_INSIGHT_AGE, customerStatus: string, conclude: string, solution: string  }) {
  return api(`/api/customer-insight`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function getCustomerInsight({ time, age, page, pageSize }: { time?: CUSTOMER_INSIGHT_TIME, age?: CUSTOMER_INSIGHT_AGE, page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (time) params.append('time', time.toString());
  if (age) params.append('age', age.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  return api(`/api/customer-insight?${params.toString()}`);
}

export function updateCustomerInsight({ id, data } : { id: number, data: { time?: CUSTOMER_INSIGHT_TIME, age?: CUSTOMER_INSIGHT_AGE, customerStatus?: string, conclude?: string, solution?: string  } }) {
  return api(`/api/customer-insight/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteCustomerInsight(id: number) {
  return api(`/api/customer-insight/${id}`, {
    method: 'DELETE',
  })
}
