import { FILE_CATEGORY } from "@prisma/client";
import { UserEntity } from "./user";

export interface FilesEntity {
  id: number;
  category: FILE_CATEGORY;
  insightMotherId: number;
  authorId: number;
  url: string;
  fileCategorySlug: string;
  type: 'image' | 'video'
  fileName: string;
  author: UserEntity
}