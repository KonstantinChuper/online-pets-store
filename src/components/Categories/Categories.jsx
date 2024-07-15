import React from "react";
import style from "./Categories.module.css";
import HeaderWithLinks from "../HeaderWithLinks/HeaderWithLinks";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className={style.categoriesSection}>
      <HeaderWithLinks header={"Categories"} linkText={"categories"} />
      <div className={style.linksBox}>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
      </div>
    </section>
  );
}
