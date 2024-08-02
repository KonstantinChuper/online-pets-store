import React, { useState } from "react";
import Button from "../Buttons/Button/Button";
import style from "./OrderDetailsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countTotalQuantity, countTotalPrice } from "../../helpers/countTotal";
import formatPrice from "../../helpers/formatPrice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";
import closeWindowIconWhite from "../../assets/closeWindowIconWhite.svg";
import { clearCart } from "../../features/cart/cartSlice";

export default function OrderDetailsForm() {
  const { items } = useSelector((state) => state.cart);
  const itemsQuantity = countTotalQuantity(items);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post(`${API_URL}/order/send`, data);
      reset();
      setModalVisible(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  }

  function onModalClose() {
    setModalVisible(false);
    dispatch(clearCart());
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className={style.title}>Order details</p>
          <p className={style.total}>
            {itemsQuantity} {itemsQuantity > 1 ? "items" : "item"}
          </p>
          <div className={style.priceLine}>
            <p className={style.total}>Total</p>
            <p className={style.price}>{formatPrice(countTotalPrice(items))}</p>
          </div>
        </div>
        <div className={style.inputBox}>
          <input
            type="text"
            placeholder="Name"
            className={errors.name ? style.errorInput : style.input}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 1,
                message: "Name must be at least 1 character",
              },
              pattern: {
                value: /^[A-Za-zА-Яа-я\s']+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
          />
          {errors.name && <p className={style.error}>{errors.name.message}</p>}

          <input
            type="text"
            placeholder="Phone Number"
            className={errors.phone ? style.errorInput : style.input}
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 6,
                message: "Phone number must be at least 6 characters",
              },
              pattern: {
                value: /^\+?[0-9]\d{5,14}$/,
                message: "Invalid phone number format",
              },
            })}
          />
          {errors.phone && <p className={style.error}>{errors.phone.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className={errors.email ? style.errorInput : style.input}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className={style.error}>{errors.email.message}</p>}
        </div>
        <Button type="submit" style={{ width: "100%" }}>
          Order
        </Button>
      </form>

      {modalVisible && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <div className={style.modalHeaderBox}>
              <h4>Congratulations!</h4>
              <button onClick={onModalClose}>
                <img src={closeWindowIconWhite} alt="closeWindowIconWhite" />
              </button>
            </div>
            <div className={style.modalTextBox}>
              <p>Your order has been successfully placed on the website.</p>
              <p>A manager will contact you shortly to confirm your order.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
