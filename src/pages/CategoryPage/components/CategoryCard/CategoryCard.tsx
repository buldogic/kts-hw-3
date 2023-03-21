import { Link } from "react-router-dom";

import style from "./CategoryCard.module.scss";

export type Category = {
  id: number;
  image: string;
  title: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const CategoryCard = (props: Category) => {
  const { image, title, onClick } = props;

  return (
    <div onClick={onClick}>
      <img className={style.img} src={image} alt="" />
      <div className={style.blockText}>
        <div className={style.title}>
          <Link to={`/products?categoryId=${props.id}`} className={style.titleText}>
            {title}
          </Link>
        </div>
        <div className={style.combinationText}>
          Combination of wood and wool
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
