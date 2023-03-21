export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category
};

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};
