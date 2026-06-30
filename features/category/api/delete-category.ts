import { api } from "@/lib/api/axios";

export const deleteCategory = async (id: number) => {
  const { data } = await api.delete(`/categories/${id}`);

  return data;
};
