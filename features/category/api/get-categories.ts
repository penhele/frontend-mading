import { api } from "@/lib/api/axios";
import { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get("/categories");

  return data;
};
