import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/api/apiThunks";
import style from "./Categories.module.css";
import HeaderWithLinks from "../HeaderWithLinks/HeaderWithLinks";
import { Link, useLocation } from "react-router-dom";
import { API_URL } from "../../features/api/apiThunks";
import Loader from "../Loading/Loader";

export default function Categories() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { items: categories, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllCategories());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={style.categoriesSection}>
      {isHome && (
        <HeaderWithLinks header={"Categories"} path={"categories"}>
          All categories
        </HeaderWithLinks>
      )}
      <div className={style.linksBox}>
        {isHome
          ? categories.slice(0, 4).map((category) => (
              <Link
                to={`/categories/${category.title}`}
                key={category.id}
                state={{ categoryId: category.id, categoryTitle: category.title }}
              >
                <img className={style.categoryImage} src={`${API_URL}${category.image}`} alt={category.title} />
                <span>{category.title}</span>
              </Link>
            ))
          : categories.map((category) => (
              <Link
                to={`/categories/${category.title}`}
                key={category.id}
                state={{ categoryId: category.id, categoryTitle: category.title }}
              >
                <img className={style.categoryImage} src={`${API_URL}${category.image}`} alt={category.title} />
                <span>{category.title}</span>
              </Link>
            ))}
      </div>
    </section>
  );
}
