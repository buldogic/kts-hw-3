import { useState } from "react";

import Button from "@components/Button";
import { useSearch } from "@hooks/useSearch";
import { observer } from "mobx-react-lite";

import style from "./SearchForm.module.scss";
import logo from "./searchImg.svg";

const SearchForm = observer(() => {
  const [search, setSearch] = useSearch();

  const [bufferValue, setBufferValue] = useState(search);

  return (
    <form
      className={style.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(bufferValue);
      }}
    >
      <img className={style.searchImg} src={logo} alt="search" />
      <input
        placeholder="Search property"
        className={style.searchInput}
        value={bufferValue}
        onChange={(e) => setBufferValue(e.target.value)}
      />
      <div className={style.searchButton}>
        <Button className={style.button}>Find Now</Button>
      </div>
    </form>
  );
});

export default SearchForm;
