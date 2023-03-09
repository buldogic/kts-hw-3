import { useState } from "react";

import cn from "classnames";

import styles from "./Slider.module.scss";

type Props = {
  images: string[];
  className?: string;
};

export const Slider = (props: Props) => {
  const [index, setIndex] = useState(0);

  const handleNext = () =>
    setIndex((current) => {
      if (current === props.images.length - 1) return 0;
      return current + 1;
    });

  const handlePrev = () =>
    setIndex((current) => {
      if (current === 0) return props.images.length - 1;
      return current - 1;
    });

  const url = props.images[index];

  return (
    <div className={cn(styles.root, props.className)}>
      <button className={cn(styles.button, styles.left)} onClick={handlePrev} />
      <img className={styles.img} src={url} alt="" />
      <button
        className={cn(styles.button, styles.right)}
        onClick={handleNext}
      />
    </div>
  );
};
