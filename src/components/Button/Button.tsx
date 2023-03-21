import cn from "classnames";

import style from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
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
