import { Category } from "@/features/category/types/category";
import { User } from "@/features/user/types/user";

export interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  slug: string;
  status: string;
  user: User;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
