import { api } from "@/lib/api/axios";
import { User } from "@/features/user/types/user";

export const getMe = async (): Promise<User> => {
  const { data } = await api.get("/auth/me");
  return data;
};
