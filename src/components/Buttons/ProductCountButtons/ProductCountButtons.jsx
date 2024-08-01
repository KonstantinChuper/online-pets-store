// import React, { useState } from "react";
// import style from "./ProductCountButtons.module.css";
// import minus from "../../../assets/minus.svg";
// import plus from "../../../assets/plus.svg";

// export default function ProductCountButtons() {
//     const [counter, setCounter] = useState(1)
//   return (
//     <div className={style.countBox}>
//       <button className={`${style.minusBtn} ${style.btn}`} onClick={() => setCounter(Math.max(1, counter - 1))}>
//         <img src={minus} alt="minus" />
//       </button>
//       <span className={style.counter}>{counter}</span>
//       <button className={`${style.plusBtn} ${style.btn}`} onClick={() => setCounter(counter + 1)}>
//         <img src={plus} alt="plus" />
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ProductCountButtons.module.css";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";
import { increaseQuantity, decreaseQuantity } from "../../../features/cart/cartSlice";

export default function ProductCountButtons({ productId }) {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      setCounter(item.quantity);
    }
  }, [cartItems, productId]);

  const handleIncrease = () => {
    setCounter((prev) => {
      const newQuantity = prev + 1;
      dispatch(increaseQuantity({ id: productId }));
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    setCounter((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        dispatch(decreaseQuantity({ id: productId }));
        return newQuantity;
      }
      return prev;
    });
  };

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
