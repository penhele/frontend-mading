import { api } from "@/lib/api/axios";
import { CreateArticlePayload } from "../types/create-article-payload";

export const addArticle = async (body: CreateArticlePayload) => {
  const { data } = await api.post("/articles", body);

  return data;
};
