import React from "react";
import Button from "../Buttons/Button/Button";
import style from "./OrderDetailsForm.module.css";
import { useSelector } from "react-redux";
import { countTotalQuantity, countTotalPrice } from "../../helpers/countTotal";

export default function OrderDetailsForm() {
  const { items } = useSelector((state) => state.cart);
  const itemsQuantity = countTotalQuantity(items);
  return (
    <form className={style.form}>
      <div>
        <p className={style.title}>Order details</p>
        <p className={style.total}>
          {itemsQuantity} {itemsQuantity > 1 ? "items" : "item"}
        </p>
        <div className={style.priceLine}>
          <p className={style.total}>Total</p>
          <p className={style.price}>${countTotalPrice(items)},00</p>
        </div>
      </div>
      <div className={style.inputBox}>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
      </div>
      <Button style={{ width: "100%" }}>Order</Button>
    </form>
  );
}
