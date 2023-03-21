import cn from "classnames";
import { useState } from "react";

import style from "./DropDown.module.scss";

type Key = string;

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: Key;
  /** Значение варианта, отображается пользователю */
  value: string;
};

export type DropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Key | null;
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Key | null) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
};

const DropDown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { options, value, onChange, disabled } = props;

  const menuText = options.map((option) => {
    const isSelected = value === option.key;

    return (
      <div
        className={cn(style.item, isSelected && style.item__selected)}
        onClick={() => {
          if( isSelected) {
            onChange(null)
            return
          }
          onChange(option.key);
        }}
        key={option.key}
      >
        {option.value}
      </div>
    );
  });

  const handleClick = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const selectedOption = options.find((option) => {
    return value === option.key;
  });

  return (
    <div className={style.root}>
      <div
        onClick={disabled ? undefined : handleClick}
        className={style.category}
      >
        {selectedOption?.value ?? "Filter"}
      </div>

      {isOpen && !disabled && (
        <div className={style.menuCategory}>{menuText}</div>
      )}
    </div>
  );
};

export default DropDown;
