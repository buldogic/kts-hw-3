import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ProductsDetailCard from "./components/ProductsCard/ProductsDetailCard";
import style from "./Product.module.scss";
import { getProduct } from "../../api/getProduct";
import { getProducts } from "../../api/getProducts";
import { Product } from "../../types/api";
import ProductsCard from "../ProductsPage/components/productsCard/ProductsCard";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = async () => {
      // TODO show error
      if (id === undefined) return;

      const productPromise = getProduct({ id });
      const relatedProductsPromise = getProducts({ limit: 3, offset: 0 });

      const [product, relatedProducts] = await Promise.all([
        productPromise,
        relatedProductsPromise,
      ]);

      setProduct(product);
      setRelatedProducts(relatedProducts);
    };

    load();
  }, [id]);

  return (
    <div className={style.mainPage}>
      <div className={style.cardDetail}>
        {product && (
          <ProductsDetailCard
            title={product.title}
            images={product.images}
            subtitle={product.description}
            price={product.price}
          />
        )}
      </div>
      <div className={style.relatedItemsText}>Related Items</div>
      <div className={style.relatedProductCard}>
        {relatedProducts?.map((p) => (
          <ProductsCard
            key={p.id}
            title={p.title}
            id={p.id}
            image={p.images[0]}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
