import React from "react";
import style from "./LinkButton.module.css";
import { Link } from "react-router-dom";

export default function LinkButton({ children, to, ...props }) {
  return (
    <Link className={style.linkBtn} to={to} {...props}>
      {children}
    </Link>
  );
}
