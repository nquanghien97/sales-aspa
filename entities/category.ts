import { UserEntity } from "./user";

export interface CategoryEntity {
  id: number;
  keyword: string;
  content: string;
  author: UserEntity
  createdAt: Date;
}