import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, color, btnType, disabled, type, ...props }) {
  const buttonClass = `${styles.button} ${styles[color]} ${styles[btnType]}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  color: "primary",
  type: "common",
};
