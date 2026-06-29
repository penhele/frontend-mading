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

export const getArticleByIdQueryOptions = (id: string) =>
  queryOptions({
    queryFn: () => getArticle(id),
    queryKey: articleKeys.detail(id),
    staleTime: 1000 * 60 * 5,
  });
