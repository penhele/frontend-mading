import { api } from "@/lib/api/axios";
import { Category } from "../types/category";

export const getCategory = async (id: number): Promise<Category> => {
    const { data } = await api.get(`/categories/${id}`);
  
    return data;
  };
  