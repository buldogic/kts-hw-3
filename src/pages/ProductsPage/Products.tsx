import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import FilterButton from "./components/FilterButton";
import MainName from "./components/MainName";
import ProductsCard from "./components/productsCard";
import SearchForm from "./components/SearchForm";
import style from "./Products.module.scss";
import { getProducts } from "../../api/getProducts";
import { Product } from "../../types/api";

const LIMIT = 9;

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const data = await getProducts({
      limit: LIMIT,
      offset: products.length,
    });

    if (LIMIT !== data.length) setHasMore(false);

    setProducts((products) => [...products, ...data]);
  };

  return (
    <div className={style.productPage}>
      <MainName />
      <div className={style.search}>
        {" "}
        <SearchForm />
        <FilterButton />
      </div>
      <div>
        <div className={style.cardText}>
          Total Products
          <span className={style.quantityProducts}>{products.length}</span>
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={loadMore}
          hasMore={hasMore}
          loader={"Loading..."}
          className={style.card}
        >
          {products.map((prod) => (
            <ProductsCard
              key={prod.id}
              id={prod.id}
              title={prod.title}
              image={prod.images[0]}
              price={prod.price}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ProductsPage;
