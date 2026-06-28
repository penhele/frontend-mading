import { Category } from "@/features/category/types/category";

export interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  slug: string;
  status: string;
  categories: Category[];
  createdAt: Date;
  updatedAt: string;
}
