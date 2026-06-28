import { queryOptions } from "@tanstack/react-query";
import { getCategories } from "../api/get-categories";
import { categoryKeys } from "./category-keys";

export const getCategoriesQueryOptions = () =>
  queryOptions({
    queryFn: getCategories,
    queryKey: categoryKeys.all,
    staleTime: 1000 * 60 * 5,
  });
