import React from "react";
import { Link } from "react-router-dom";

export default function NavigationItem({path, children}) {
  return (
    <Link to={`/${path}`} className={style.categoryName}>
      {children}
    </Link>
  );
}
