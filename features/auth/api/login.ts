import { api } from "@/lib/api/axios";
import { Login } from "../types/login";
import Cookies from "js-cookie";

export const login = async (body: Login) => {
  const { data } = await api.post("/auth/login", body);

  Cookies.set("access_token", data.accessToken);

  return data;
};
