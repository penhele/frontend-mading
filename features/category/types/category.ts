import { CategoryCount } from "./category-count";

export interface Category {
  id: number;
  name: string;
  slug: string;
  _count: CategoryCount;
  createdAt: Date;
  updatedAt: string;
}
