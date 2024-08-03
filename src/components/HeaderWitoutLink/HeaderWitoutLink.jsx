import React from "react";
import style from "./HeaderWitoutLink.module.css";

export default function HeaderWitoutLink({ children, paddingTop }) {
  return (
    <h3
      className={style.header}
      style={{
        paddingTop: paddingTop,
      }}
    >
      {children}
    </h3>
  );
}
