import { UserEntity } from "./user";

export interface CategoryEntity {
  id: number;
  keyword: string;
  customer_status?: string;
  content: string;
  author: UserEntity
  createdAt: Date;
}