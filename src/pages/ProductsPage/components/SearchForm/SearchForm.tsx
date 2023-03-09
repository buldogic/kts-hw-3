import Button from "@components/Button";

import style from "./SearchForm.module.scss";
import logo from "./searchImg.svg";

const SearchForm = () => {
  return (
    <div className={style.searchForm}>
      <img className={style.searchImg} src={logo} alt="search" />
      <input placeholder="Search property" className={style.searchInput} />
      <div className={style.searchButton}>
        <Button className={style.button}>Find Now</Button>
      </div>
    </div>
  );
};

export default SearchForm;
