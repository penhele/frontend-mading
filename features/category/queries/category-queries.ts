import { queryOptions } from "@tanstack/react-query";
import { getCategories } from "../api/get-categories";
import { categoryKeys } from "./category-keys";
import { getCategory } from "../api/get-category";

export const getCategoriesQueryOptions = () =>
  queryOptions({
    queryFn: getCategories,
    queryKey: categoryKeys.all,
    staleTime: 1000 * 60 * 5,
  });

export const getCategoryByIdQueryOptions = (id: number) =>
  queryOptions({
    queryFn:()=> getCategory(id),
    queryKey: categoryKeys.detail(id),
    staleTime: 1000 * 60 * 5,
  });
