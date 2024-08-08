import React, { useState } from "react";
import style from "./GetDiscount.module.css";
import GetDiscountImage from "../../assets/GetDiscountImage.png";
import Button from "../Buttons/ButtonBanner";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";

export default function GetDiscount() {
  const [buttonText, setButtonText] = useState("Get a discount");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post(`${API_URL}/sale/send`, data);
      setButtonText("Request submitted");
      setIsButtonDisabled(true);
      reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  }

  return (
    <section className={style.getDiscount}>
      <h3 className={style.header}>5% off on the first order</h3>
      <div className={style.formBox}>
          <img className={style.image} src={GetDiscountImage} alt="Pets" />
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" disabled={isButtonDisabled}>
            {buttonText}
          </Button>
        </form>
      </div>
    </section>
  );
}
