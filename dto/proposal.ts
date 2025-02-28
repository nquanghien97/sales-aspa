import { PROPOSAL_STATUS } from "@prisma/client";

export interface ProposalParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: PROPOSAL_STATUS
}