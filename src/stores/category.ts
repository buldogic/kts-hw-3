import { getCategories } from "@api/getCategories";
import { Category } from "@api/types";
import { action, makeObservable, observable } from "mobx";

class CategoriesStore {
  categories: Category[] = [];

  constructor() {
    makeObservable(this, {
      categories: observable.ref,
      loadCategories: action,
    });
  }

  loadCategories = async () => {
    if(this.categories.length !== 0 ) return
    const data = await getCategories();
    this.categories = data;
  };
}

export const categoriesStore = new CategoriesStore();
