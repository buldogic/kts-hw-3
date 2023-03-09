import style from "./MainName.module.scss";

const MainName = () => {
  return (
    <div className={style.mainName}>
      <h1 className={style.mainTitle}>Products</h1>
      <p className={style.mainText}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
    </div>
  );
};

export default MainName;
