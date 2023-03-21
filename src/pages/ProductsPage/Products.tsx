import { useEffect } from "react";

import { useSearch } from "@hooks/useSearch";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import { productsStore } from "@stores/products";

import MainName from "./components/MainName";
import ProductsCard from "./components/productsCard";
import SearchForm from "./components/SearchForm";
import style from "./Products.module.scss";
import { useCategory } from "@hooks/useCategory";
import Filter from "./components/Filter";

const ProductsPage = observer(() => {
  const [search] = useSearch();
  const [category] = useCategory();

  useEffect(() => {
    productsStore.reload();
  }, [search, category]);

  const next = () => productsStore.loadMore(search, category);

  return (
    <div className={style.productPage}>
      <MainName />
      <div className={style.search}>
        {" "}
        <SearchForm />
        <Filter />
      </div>

      <div className={style.cardText}>
        Total Products
        <span className={style.quantityProducts}>
          {productsStore.ids.length}
        </span>
      </div>

      <InfiniteScroll
        dataLength={productsStore.ids.length}
        next={next}
        hasMore={productsStore.hasMore}
        loader={<span className={style.loader}></span>}
        className={style.card}
      >
        {productsStore.ids.map((id) => {
          const p = productsStore.entities[id];

          if (!p) return null;

          return (
            <ProductsCard
              key={id}
              id={id}
              title={p.title}
              image={p.images[0]}
              price={p.price}
              category={p.category.name}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
});

export default ProductsPage;
