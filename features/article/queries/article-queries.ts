import { queryOptions } from "@tanstack/react-query";
import { articleKeys } from "./article-keys";
import { getArticles } from "../api/get-articles";
import { getArticle } from "../api/get-article";

export const getArticlesQueryOptions = () =>
  queryOptions({
    queryFn: getArticles,
    queryKey: articleKeys.all,
    staleTime: 1000 * 60 * 5,
  });

export const getArticleBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryFn: () => getArticle(slug),
    queryKey: articleKeys.detail(slug),
    staleTime: 1000 * 60 * 5,
  });
