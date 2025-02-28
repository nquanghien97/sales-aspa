import { api } from "@/utils/api";
import { CATEGORY, PROPOSAL_STATUS } from "@prisma/client";

export function createProposal({ keyword, category }: { keyword: string, category: CATEGORY }) {
  return api(`/api/proposal`, {
    method: 'POST',
    body: JSON.stringify({ keyword, category }),
  })
}

export function getProposals({ keyword, page, pageSize, status }: { keyword?: string, page?: number, pageSize?: number, status?: PROPOSAL_STATUS }) {
  const params = new URLSearchParams();
  if (keyword) params.append('keyword', keyword.toString());
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (status) params.append('status', status.toString());
  return api(`/api/proposal?${params.toString()}`);
}

export function updateProposal({ id, data } : { id: number, data: { keyword: string } }) {
  return api(`/api/proposal/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deleteProposal(id: number) {
  return api(`/api/proposal/${id}`, {
    method: 'DELETE',
  })
}

export function approveProposal({ keyword, category, content, proposalId }: { keyword: string, category: CATEGORY, content: string, proposalId: number }) {
  return api(`/api/proposal-category`, {
    method: 'POST',
    body: JSON.stringify({ keyword, category, content, proposalId }),
  })
}
