import { api } from "@/lib/api/axios";
import { Article } from "../types/article";

export const getArticle = async (slug: string): Promise<Article> => {
  const { data } = await api.get(`/articles/${slug}`);

  return data;
};
