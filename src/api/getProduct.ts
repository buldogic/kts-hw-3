import { BASE_URL } from "./config";
import { Product } from "./types";
import { api } from "../utils/api";

export const getProduct = async (args: { id: number }) => {
  const data = await api<Product>({
    url: `${BASE_URL}/products/${args.id}`,
  });

  return data;
};
