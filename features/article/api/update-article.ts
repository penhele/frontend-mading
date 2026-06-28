import { api } from "@/lib/api/axios";
import { UpdateArticlePayload } from "../types/update-article-payload";

export const updateArticle = async (id: string, body: UpdateArticlePayload) => {
  const { data } = await api.patch(`/articles/${id}`, body);

  return data;
};
