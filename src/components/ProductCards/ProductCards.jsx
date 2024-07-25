import React, { useState, useEffect } from "react";
import style from "./ProductCards.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getAllCategories } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductCards() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const categoryId = location.state?.categoryId;
  const categoryTitle = location.state?.categoryTitle;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/products/all")
      .then((responce) => {
        setProducts(responce.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredProducts = categoryId ? products.filter((product) => product.categoryId === categoryId) : products;

  return (
    <div className={style.productBox}>
      {isHome
        ? filteredProducts.slice(0, 8).map((product) => {
            return product.discont_price && <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />;
          })
        : filteredProducts.map((product) => {
            return <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />;
          })}
    </div>
  );
}
