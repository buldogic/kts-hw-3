import { useEffect } from "react";

import { useSearch } from "@hooks/useSearch";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import { productsStore } from "@stores/products";

import FilterButton from "./components/FilterButton";
import MainName from "./components/MainName";
import ProductsCard from "./components/productsCard";
import SearchForm from "./components/SearchForm";
import style from "./Products.module.scss";

const ProductsPage = observer(() => {
  const [search] = useSearch();

  useEffect(() => {
    productsStore.reload();
  }, [search]);

  const next = () => productsStore.loadMore(search);

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
          <span className={style.quantityProducts}>
            {productsStore.ids.length}
          </span>
        </div>
        <InfiniteScroll
          dataLength={productsStore.ids.length}
          next={next}
          hasMore={productsStore.hasMore}
          loader={"Loading..."}
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
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
});

export default ProductsPage;
