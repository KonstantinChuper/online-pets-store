import React from "react";
import { Link } from "react-router-dom";
import countDiscount from "../../helpers/countDiscount";
import style from "./ProductItem.module.css";

export default function ProductItem({ product, categoryTitle }) {
  return (
    <Link
      to={`/categories/${categoryTitle}/${product.title}`}
      key={product.id}
      className={style.card}
      state={{ productId: product.id, productTitle: product.title }}
    >
      <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
      {product.discont_price && <div className={style.discount}>-{countDiscount(product.price, product.discont_price)}%</div>}
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
}
