import { BASE_URL } from "./config";
import { Category } from "./types";
import { api } from "../utils/api";

export const getCategories = async () => {
  const data = await api<Category[]>({
    url: `${BASE_URL}/categories`,
  });

  return data;
};
