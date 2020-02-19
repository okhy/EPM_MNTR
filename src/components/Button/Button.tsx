import * as React from "react";
import * as styles from "./Button.styles.css";
import * as cx from "classnames";

interface IButton {
  label: string;
  variant?: "primary" | "white" | "negative" | "disabled"; // css variants
  type?: "submit" | "reset"; // html button type prop
  disabled?: boolean; // is diabled
  icon?: string; // full fontawesome class set -> "fab fa-font-awesome-flag"
  size?: "small";
  clickAction?(e: React.MouseEvent): void;
}

const Button: React.FC<IButton> = props => {
  const { type, disabled, icon, variant, size, label, clickAction } = props;
  const isSmall: boolean = !!size;
  const mainClass: string = cx(styles.main, {
    [styles.basic]: !variant,
    [styles.white]: !disabled && variant && variant === "white",
    [styles.primary]: !disabled && variant && variant === "primary",
    [styles.negative]: !disabled && variant && variant === "negative",
    [styles.disabled]: !!disabled,
    [styles.small]: isSmall
  });

  return (
    <button
      className={mainClass}
      disabled={!!disabled}
      type={type}
      onClick={clickAction}
    >
      {icon && (
        <i className={`${isSmall ? styles.smallIcon : styles.icon} ${icon}`} />
      )}
      <span className={isSmall ? styles.smallLabel : styles.label}>
        {label}
      </span>
    </button>
  );
};

export default Button;
