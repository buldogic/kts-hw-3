import { Link } from "react-router-dom";

import style from "./MenuHeader.module.scss";

const MenuHeader = () => {
  return (
    <div className={style.menuHeader}>
      <div>
        <Link to="/products" className={style.menuHeader_text}>
          Products
        </Link>
      </div>
      <div>
        <Link to="/categories" className={style.menuHeader_text}>
          Categories
        </Link>
      </div>
    </div>
  );
};

export default MenuHeader;
