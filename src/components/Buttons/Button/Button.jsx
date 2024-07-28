import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, color, type, ...props }) {
  const buttonClass = `${styles.button} ${styles[color]} ${styles[type]}`;

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  color: "primary",
  type: "common",
};
