import { categoriesStore } from "@stores/category";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import CategoryCard from "./components/CategoryCard";
import style from "./CategoryPage.module.scss";

const CategoryPage = observer(() => {
  useEffect(() => {
    categoriesStore.loadCategories();
  }, []);

  return (
    <div className={style.categoryPage}>
      <div className={style.cardCategoryText}>
        Categories
        <span className={style.quantityProductsCategory}>
          {categoriesStore.categories.length}
        </span>
      </div>
      <div className={style.categoriCard}>
        {categoriesStore.categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.name}
              image={category.image}
            />
          );
        })}
        ;
      </div>
    </div>
  );
});

export default CategoryPage;
