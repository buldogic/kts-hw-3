import DropDown from "@components/DropDown";
import { useCategory } from "@hooks/useCategory";
import { categoriesStore } from "@stores/category";
import { observer } from "mobx-react-lite";
import logo from "./filterImg.svg";
import { useEffect } from "react";
import style from './Filter.module.scss'

const Filter = observer(() => {
  const [categoryId, setCategoryId] = useCategory();

  useEffect(() => {
    categoriesStore.loadCategories();
  }, []);

  return (
    <div className={style.filterButton }>
       <img src={logo} alt="filter" />
       <div className={style.dporDown}>
    <DropDown 
      options={categoriesStore.categories.map((category) => {
        return {
          key: String(category.id),
          value: category.name,
        };
      })}
      value={categoryId}
      onChange={(categoryId) => {
        setCategoryId(categoryId);
      }}
    /></div>
    </div>
  );
});

export default Filter;
