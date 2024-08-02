import React from "react";
import style from "./ProductCountButtons.module.css";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

export default function ProductCountButtons({ counter, handleIncrease, handleDecrease }) {

  return (
    <div className={style.countBox}>
      <button className={`${style.minusBtn} ${style.btn}`} onClick={handleDecrease}>
        <img src={minus} alt="minus" />
      </button>
      <span className={style.counter}>{counter}</span>
      <button className={`${style.plusBtn} ${style.btn}`} onClick={handleIncrease}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
