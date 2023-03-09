import Basket from "./Basket";
import style from "./Header.module.scss";
import logo from "./logo.svg";
import MenuHeader from "./MenuHeader";
import User from "./User";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" />
      <div>
        <MenuHeader />
      </div>
      <div className={style.userInterfaceHeader}>
        <Basket />
        <User />
      </div>
    </div>
  );
};

export default Header;
