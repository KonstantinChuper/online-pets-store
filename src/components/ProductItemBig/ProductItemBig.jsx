import React from "react";
import style from "./ProductItemBig.module.css";
import countDiscount from "../../helpers/countDiscount";
import ProductCountButtons from "../Buttons/ProductCountButtons";
import Button from "../Buttons/Button";

export default function ProductItemBig({ product }) {
  return (
    <div className={style.productBox}>
      <img className={style.categoryImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
      <div className={style.productCardBox}>
        <h3 className={style.productName}>{product.title}</h3>
        <div className={style.priceLine}>
          <span className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</span>
          {product.discont_price && <span className={style.oldPrice}>${product.price}</span>}
          {product.discont_price && <div className={style.discount}>-{countDiscount(product.price, product.discont_price)}%</div>}
        </div>
        <div className={style.btnBox}>
          <ProductCountButtons />
          <Button style={{ width: "65%" }}>Add to cart</Button>
        </div>
        <div className={style.descriptionBox}>
          <p className={style.descriptionTitle}>Description</p>
          <p className={style.description}>{product.description}</p>
          <button className={style.descriptionBtn}>Read more</button>
        </div>
      </div>
    </div>
  );
}
