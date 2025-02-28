import { CATEGORY, PROPOSAL_STATUS } from "@prisma/client";
import { UserEntity } from "./user";

export interface ProposalEntity {
  id: number;
  authorId: number;
  keyword: string;
  author: UserEntity
  createdAt: Date
  categoryType: CATEGORY
  status: PROPOSAL_STATUS
}