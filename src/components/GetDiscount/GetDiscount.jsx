import React, { useState } from 'react'
import style from './GetDiscount.module.css';
import GetDiscountImage from "../../assets/GetDiscountImage.png";
import Button from "../Buttons/ButtonBanner";

export default function GetDiscount() {
    const [buttonText, setButtonText] = useState("Get a discount");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setButtonText("Request submitted");
      setIsButtonDisabled(true);
    };

  return (
    <section className={style.getDiscount}>
      <h3 className={style.header}>5% off on the first order</h3>
      <img className={style.image} src={GetDiscountImage} alt="Pets" />
      <form className={style.form}>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
        <Button onClick={handleClick} disabled={isButtonDisabled}>
          {buttonText}
        </Button>
      </form>
    </section>
  );
}
