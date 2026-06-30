import { useQuery } from "@tanstack/react-query";
import { getCategoryByIdQueryOptions } from "../queries/category-queries";

export const useCategory = (id: number) => useQuery(getCategoryByIdQueryOptions(id));
