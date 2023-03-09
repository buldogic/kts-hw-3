import { Link } from "react-router-dom";

import style from "./MenuHeader.module.scss";

const MenuHeader = () => {
  return (
    <div className={style.menuHeader}>
      <div>
        <Link to="/Products" className={style.menuHeader_text}>
          Products
        </Link>
      </div>
      <div>
        <Link to="/Categories" className={style.menuHeader_text}>
          Categories
        </Link>
      </div>
      <div>
        <Link to="/About Us" className={style.menuHeader_text}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default MenuHeader;
