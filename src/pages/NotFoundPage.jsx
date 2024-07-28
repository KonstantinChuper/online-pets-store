import React from "react";
import style from "./NotFoundPage.module.css";
import img404 from "../assets/img404.png";
import digit from "../assets/4digit.svg";
import LinkButton from "../components/Buttons/LinkButton/LinkButton";

export default function NotFoundPage() {
  return (
    <section className={style.notFoundSection}>
      <div className={style.notFoundBox}>
        <img src={digit} alt="4digit" />
        <img src={img404} alt="dog and cat" />
        <img src={digit} alt="4digit" />
      </div>
      <div className={style.pageNotFoundTextBox}>
        <h2>Page Not Found</h2>
        <p>
          We’re sorry, the page you requested could not be found. <br /> Please go back to the homepage.
        </p>
      </div>
      <LinkButton to={"/"}>
        Go Home
      </LinkButton>
    </section>
  );
}
