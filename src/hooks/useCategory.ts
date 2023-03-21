import { useCallback } from "react";

import { useSearchParams } from "react-router-dom";

const CATEGORY_KEY = "categoryId";

export const useCategory = () => {
  const [categoryParams, setCategoryParams] = useSearchParams();

  const categoryId = categoryParams.get(CATEGORY_KEY) ?? "";

  const setCategory = useCallback(
    (nextValue: string | null) =>
      setCategoryParams((currentCategoryParams) => {
        const nextCategoryParams = new URLSearchParams(currentCategoryParams);

        if (nextValue === null || !nextValue.length) {
          nextCategoryParams.delete(CATEGORY_KEY);
        } else {
          nextCategoryParams.set(CATEGORY_KEY, nextValue);
        }

        return nextCategoryParams;
      }),
    [setCategoryParams]
  );

  return [categoryId, setCategory] as const;
};
