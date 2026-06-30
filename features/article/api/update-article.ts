import { api } from "@/lib/api/axios";
import { UpdateArticlePayload } from "../types/update-article-payload";

export const updateArticle = async (slug: string, body: UpdateArticlePayload) => {
  const { data } = await api.patch(`/articles/${slug}`, body);

  return data;
};
