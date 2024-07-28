import React from "react";
import style from "./ProductCountButtons.module.css";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

export default function ProductCountButtons({ counter }) {
  return (
    <div className={style.countBox}>
      <button className={`${style.minusBtn} ${style.btn}`}>
        <img src={minus} alt="minus" />
      </button>
      <span className={style.counter}>1</span>
      <button className={`${style.plusBtn} ${style.btn}`}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
