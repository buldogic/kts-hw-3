import style from "./Basket.module.scss";
import logo from "./logo.svg";

const Basket = () => {
  return (
    <div className={style.basket}>
      <img src={logo} alt="Basket" />
    </div>
  );
};

export default Basket;
