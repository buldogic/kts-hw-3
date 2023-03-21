import { getProduct } from "@api/getProduct";
import { getProducts } from "@api/getProducts";
import { Product } from "@api/types";
import { normalizeList } from "@utils/normalizeList";
import { makeObservable, observable, action } from "mobx";

const LIMIT = 9;

type Ids = number[];
type Entities = Record<number, Product | undefined>;
type Related = Record<number, Ids | undefined>;

class ProductsStore {
  ids: Ids = [];
  related: Related = {};
  entities: Entities = {};
  hasMore = true;

  constructor() {
    makeObservable(this, {
      ids: observable.ref,
      entities: observable.ref,
      related: observable.ref,
      hasMore: observable,
      loadMore: action,
      loadProduct: action,
      loadRelated: action,
      reload: action,
    });
  }

  loadMore = async (search: string, category: string) => {
    const data = await getProducts({
      limit: LIMIT,
      offset: this.ids.length,
      search: search,
      categoryId: category,
    });

    const { ids, entities } = normalizeList(data);

    if (LIMIT !== ids.length) this.hasMore = false;

    this.ids = [...this.ids, ...ids];
    this.entities = { ...this.entities, ...entities };
  };

  loadProduct = async (id: number) => {
    if (id in this.entities) return;

    const product = await getProduct({ id });

    this.entities = { ...this.entities, [product.id]: product };
  };

  loadRelated = async (id: number) => {
    if (id in this.related) return;

    const relatedProducts = await getProducts({
      offset: 0,
      limit: 3,
    });

    const { ids, entities } = normalizeList(relatedProducts);

    this.related = { ...this.related, [id]: ids };
    this.entities = { ...this.entities, ...entities };
  };

  reload = () => {
    this.ids = [];
    this.hasMore = true;
  };
}

export const productsStore = new ProductsStore();
