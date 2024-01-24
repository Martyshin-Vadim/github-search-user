import React from "react";
import styles from "./Button.module.css";

type ButtonType = "button" | "submit" | "reset";
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  buttonType?: ButtonType;
}

export default function Button({
  children,
  onClick,
  disabled,
  buttonType,
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={buttonType}
    >
      {children}
    </button>
  );
}
