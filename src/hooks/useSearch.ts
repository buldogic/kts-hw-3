import { useCallback } from "react";

import { useSearchParams } from "react-router-dom";

const SEARCH_KEY = "search";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get(SEARCH_KEY) ?? "";

  const setSearch = useCallback(
    (nextValue: string) =>
      setSearchParams((currentSearchParams) => {
        const nextSearchParams = new URLSearchParams(currentSearchParams);

        if (!nextValue.length) {
          nextSearchParams.delete(SEARCH_KEY);
        } else {
          nextSearchParams.set(SEARCH_KEY, nextValue);
        }

        return nextSearchParams;
      }),
    [setSearchParams]
  );

  return [search, setSearch] as const;
};
