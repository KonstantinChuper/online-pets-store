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

  return (
    <div className={style.productBox}>
      {isHome
        ? products.slice(0, 8).map((product) => {
            return (product.discont_price &&
              <Link to={`/products/${product.title}`} key={product.id} className={style.card}>
                <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                {product.discont_price && <div className={style.discount}>{countDiscount(product.price, product.discont_price)}%</div>}
                <Button type="hidden">Add to cart</Button>
                <div className={style.priceBox}>
                  <span className={style.productName}>{product.title}</span>
                  <div className={style.priceLine}>
                    <span className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</span>
                    {product.discont_price && <span className={style.oldPrice}>${product.price}</span>}
                  </div>
                </div>
              </Link>
            );
          })
        : products.map((product) => {
            return (
                <Link to={`/products/${product.title}`} key={product.id} className={style.card}>
                  <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                  {product.discont_price && (
                    <div className={style.discount}>{countDiscount(product.price, product.discont_price)}%</div>
                  )}
                  <Button type="card">Add to cart</Button>
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
