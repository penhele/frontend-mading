import { api } from "@/lib/api/axios";
import { UpdateCategoryPayload } from "../types/update-category-payload";

export const updateCategory = async (id: number, body: UpdateCategoryPayload) => {
  const { data } = await api.post(`/categories/${id}`, body);

  return data;
};
