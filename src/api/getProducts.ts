import { Product } from "../types/api";
import { api } from "../utils/api";

export const getProducts = async (args: { limit: number; offset: number }) => {
  const data = await api<Product[]>({
    url: "https://api.escuelajs.co/api/v1/products",
    params: {
      limit: args.limit,
      offset: args.offset,
    },
  });

  return data;
};
