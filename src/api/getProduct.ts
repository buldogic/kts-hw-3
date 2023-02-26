import { Product } from "../types/api";
import { api } from "../utils/api";

export const getProduct = async (args: { id: string }) => {
  const data = await api<Product>({
    url: `https://api.escuelajs.co/api/v1/products/${args.id}`,
  });

  return data;
};
