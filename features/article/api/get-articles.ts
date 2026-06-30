import { api } from "@/lib/api/axios";
import { Article } from "../types/article";

export const getArticles = async (): Promise<Article[]> => {
  const { data } = await api.get("/articles");

  return (data || []).map((item: any) => ({
    ...item,
    imageUrl: item.imageUrl || item.image_url,
  }));
};
