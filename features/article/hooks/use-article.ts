import { useQuery } from "@tanstack/react-query";
import { getArticleBySlugQueryOptions } from "../queries/article-queries";

export const useArticle = (slug: string) =>
  useQuery(getArticleBySlugQueryOptions(slug));
