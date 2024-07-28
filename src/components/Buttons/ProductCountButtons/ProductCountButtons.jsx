import React, { useState } from "react";
import style from "./ProductCountButtons.module.css";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

export default function ProductCountButtons() {
    const [counter, setCounter] = useState(1)
  return (
    <div className={style.countBox}>
      <button className={`${style.minusBtn} ${style.btn}`} onClick={() => setCounter(Math.max(1, counter - 1))}>
        <img src={minus} alt="minus" />
      </button>
      <span className={style.counter}>{counter}</span>
      <button className={`${style.plusBtn} ${style.btn}`} onClick={() => setCounter(counter + 1)}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
