import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, onClick, color, size, ...props }) {
  const buttonClass = `${styles.button} ${styles[color]} ${styles[size]}`;

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  onClick: () => {},
  color: "primary",
  size: "medium",
};
