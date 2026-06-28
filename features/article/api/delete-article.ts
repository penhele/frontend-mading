import { api } from "@/lib/api/axios";

export const deleteArticle = async (id: string) => {
  const { data } = await api.delete(`/articles/${id}`);

  return data;
};
