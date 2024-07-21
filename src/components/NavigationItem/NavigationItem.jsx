import React from "react";
import { Link } from "react-router-dom";
import style from "./NavigationItem.module.css";

export default function NavigationItem({ path, children, isActive }) {
  return (
    <Link
      to={`/${path}`}
      className={style.categoryName}
      style={{
        color: isActive ? "#282828" : "#8b8b8b",
      }}
    >
      {children}
    </Link>
  );
}
