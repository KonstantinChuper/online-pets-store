import React, { useState, useEffect } from "react";
import style from "./ProductCards.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import schuffleProducts from "../../helpers/schuffleProducts";

export default function ProductCards() {
  const location = useLocation();
  const categoryTitle = location.state?.categoryTitle;
  const [products, setProducts] = useState([]);
  const pathName = location.pathname;

  useEffect(() => {
    axios
      .get(`${API_URL}/products/all`)
      .then((responce) => {
        setProducts(responce.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderProducts = () => {
    const discountedProducts = products.filter((product) => product.discont_price !== null);
    switch (pathName) {
      case "/":
        return schuffleProducts(discountedProducts)
          .slice(0, 4)
          .map((product) =>
            product.discont_price ? <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} /> : null
          );
      case "/sales":
        return products.map((product) =>
          product.discont_price ? <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} /> : null
        );
      default:
        return products.map((product) => <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />);
    }
  };

  return <div className={style.productBox}>{renderProducts()}</div>;
}
