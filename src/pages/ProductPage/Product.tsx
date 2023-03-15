import { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { Navigate, useParams } from "react-router-dom";
import { productsStore } from "@stores/products";

import ProductsDetailCard from "./components/ProductsCard/ProductsDetailCard";
import style from "./Product.module.scss";
import ProductsCard from "../ProductsPage/components/productsCard/ProductsCard";

const ProductPage = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    productsStore.loadProduct(Number(id));
    productsStore.loadRelated(Number(id));
  }, [id]);

  if (id === undefined) return <Navigate to="/products" />;

  const product = productsStore.entities[Number(id)];
  const relatedProductIds = productsStore.related[Number(id)];

  // TODO loader
  if (!product) return <>Loading ...</>;

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
        {relatedProductIds?.map((id) => {
          const p = productsStore.entities[id];

          if (!p) return null;

          return (
            <ProductsCard
              key={id}
              id={id}
              title={p.title}
              image={p.images[0]}
              price={p.price}
            />
          );
        })}
      </div>
    </div>
  );
});

export default ProductPage;
