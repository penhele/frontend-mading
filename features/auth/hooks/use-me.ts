import { useQuery } from "@tanstack/react-query";
import { getMeQueryOptions } from "../queries/auth-queries";

export const useMe = () => useQuery(getMeQueryOptions());
