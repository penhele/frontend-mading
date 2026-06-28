import { queryOptions } from "@tanstack/react-query";
import { articleKeys } from "./article-keys";
import { getArticles } from "../api/get-articles";

export const getArticlesQueryOptions = () =>
  queryOptions({
    queryFn: getArticles,
    queryKey: articleKeys.all,
    staleTime: 1000 * 60 * 5,
  });
