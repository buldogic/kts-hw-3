import style from "./FilterButton.module.scss";
import logo from "./filterImg.svg";
import Button from "../../../../components/Button";

const FilterButton = () => {
  return (
    <div>
      <Button className={style.filterButton}>
        <img className={style.filterImg} src={logo} alt="filter" />
        Filter
      </Button>
    </div>
  );
};

export default FilterButton;
