import cn from "classnames";

import style from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader.
   * Также кнопка должна переходить в состояние disabled
   */
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { loading, children, disabled, className, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      disabled={disabled || loading}
      className={cn(
        className,
        style.button,
        loading === true && style.button_disabled,
        disabled === true && style.button_disabled
      )}
    >
      {children}
    </button>
  );
};

export default Button;
