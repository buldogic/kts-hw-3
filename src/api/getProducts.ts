import { BASE_URL } from "./config";
import { Product } from "./types";
import { api } from "../utils/api";

export const getProducts = async (args: {
  limit: number;
  offset: number;
  search?: string;
}) => {
  const data = await api<Product[]>({
    url: `${BASE_URL}/products`,
    params: {
      limit: args.limit,
      offset: args.offset,
      title: args.search ?? "",
    },
  });

  return data;
};
