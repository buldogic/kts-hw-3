import { Link } from "react-router-dom";

import style from "./ProductsCard.module.scss";

export type Prod = {
  id: number;
  /** URL изображения */
  image: string;

  category?: string;

  price: number;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle?: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

const ProductsCard = (props: Prod) => {
  const { price, category, image, title, subtitle, content, onClick } = props;

  return (
    <div className={style.card} onClick={onClick}>
      {" "}
      <img className={style.img} src={image} alt="" />
      <div className={style.categoryText}>{category}Cupboard</div>
      <div className={style.title}>
        <Link to={`/SomePage2/${props.id}`} className={style.titleText}>
          {title}
        </Link>
      </div>
      <div>{subtitle}</div>
      <div className={style.combinationText}>Combination of wood and wool</div>
      <div>{content}</div>
      <div className={style.priceText}>${price}</div>
    </div>
  );
};

export default ProductsCard;
