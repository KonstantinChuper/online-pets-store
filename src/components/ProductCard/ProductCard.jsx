import React, { useState, useEffect } from 'react'
import style from './ProductCard.module.css';
import Button from '../Buttons/Button';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import countDiscount from "../../helpers/countDiscount";

export default function ProductCard() {
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
            return (
              product.discont_price && (
                <Link to={`/categories/${categoryTitle}/${product.title}`} key={product.id} className={style.card}>
                  <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                  {product.discont_price && (
                    <div className={style.discount}>{countDiscount(product.price, product.discont_price)}%</div>
                  )}
                  <button className={style.productBtn}>Add to cart</button>
                  <div className={style.priceBox}>
                    <span className={style.productName}>{product.title}</span>
                    <div className={style.priceLine}>
                      <span className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</span>
                      {product.discont_price && <span className={style.oldPrice}>${product.price}</span>}
                    </div>
                  </div>
                </Link>
              )
            );
          })
        : filteredProducts.map((product) => {
            return (
              <Link to={`/categories/${categoryTitle}/${product.title}`} key={product.id} className={style.card}>
                <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                {product.discont_price && <div className={style.discount}>{countDiscount(product.price, product.discont_price)}%</div>}
                <button className={style.productBtn}>Add to cart</button>
                <div className={style.priceBox}>
                  <span className={style.productName}>{product.title}</span>
                  <div className={style.priceLine}>
                    <span className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</span>
                    {product.discont_price && <span className={style.oldPrice}>${product.price}</span>}
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}
