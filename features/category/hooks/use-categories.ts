import { useQuery } from "@tanstack/react-query";
import { getCategoriesQueryOptions } from "../queries/category-queries";

export const useCategories = () => useQuery(getCategoriesQueryOptions());
