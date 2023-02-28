import Button from "@components/Button";
import { Slider } from "@components/Slider";

import style from "./ProductsDetailCard.module.scss";

export type Prod = {
  /** URL изображения */
  images: string[];

  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;

  price: number;
};

const ProductsDetailCard = (props: Prod) => {
  const { price, images, title, subtitle, content, onClick } = props;

  return (
    <div className={style.card} onClick={onClick}>
      {" "}
      <Slider images={images} className={style.slider} />
      <div>
        <div className={style.titleText}>{title}</div>
        <div className={style.subtitleText}>{subtitle}</div>
        <div>{content}</div>
        <div className={style.priceText}>${price} </div>
        <div>
          <Button className={style.buttonBuy}>Buy Now</Button>
          <Button className={style.buttonAdd}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailCard;
