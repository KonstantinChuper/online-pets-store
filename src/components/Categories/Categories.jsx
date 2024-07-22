import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import HeaderWithLinks from "../HeaderWithLinks/HeaderWithLinks";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((responce) => {
        setCategories(responce.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={style.categoriesSection}>
      {isHome && (
        <HeaderWithLinks header={"Categories"} path={"categories"}>
          All categories
        </HeaderWithLinks>
      )}
      <div className={style.linksBox}>
        {isHome
          ? categories.slice(0, 4).map((category) => {
              return (
                <Link
                  to={`/categories/${category.title}`}
                  key={category.id}
                  state={{ categoryId: category.id, categoryTitle: category.title }}
                >
                  <img className={style.categoryImage} src={`http://localhost:3333${category.image}`} alt={category.title} />
                  <span>{category.title}</span>
                </Link>
              );
            })
          : categories.map((category) => {
              return (
                <Link
                  to={`/categories/${category.title}`}
                  key={category.id}
                  state={{ categoryId: category.id, categoryTitle: category.title }}
                >
                  <img className={style.categoryImage} src={`http://localhost:3333${category.image}`} alt={category.title} />
                  <span>{category.title}</span>
                </Link>
              );
            })}

        {/* <Link to={"/categories/:categoryId"}>
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
        </Link> */}
      </div>
    </section>
  );
}
