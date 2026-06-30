import { queryOptions } from "@tanstack/react-query";
import { getMe } from "../api/get-me";
import { authKeys } from "./auth-keys";

export const getMeQueryOptions = () =>
  queryOptions({
    queryFn: getMe,
    queryKey: authKeys.me(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
