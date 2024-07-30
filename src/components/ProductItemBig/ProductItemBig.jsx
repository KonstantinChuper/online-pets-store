import React, { useState } from "react";
import style from "./ProductItemBig.module.css";
import countDiscount from "../../helpers/countDiscount";
import ProductCountButtons from "../Buttons/ProductCountButtons/ProductCountButtons";
import Button from "../Buttons/Button/Button";
import { API_URL } from "../../features/api/apiThunks";

export default function ProductItemBig({ product }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={style.productBox}>
      <img className={style.categoryImage} src={`${API_URL}${product.image}`} alt={product.title} />
      <div className={style.productCardBox}>
        <h3 className={style.productName}>{product.title}</h3>
        <div className={style.priceLine}>
          <span className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</span>
          {product.discont_price && <span className={style.oldPrice}>${product.price}</span>}
          {product.discont_price && <div className={style.discount}>-{countDiscount(product.price, product.discont_price)}%</div>}
        </div>
        <div className={style.btnBox}>
          <ProductCountButtons />
          <Button style={{ width: "60%" }}>Add to cart</Button>
        </div>
        <div className={style.descriptionBox}>
          <p className={style.descriptionTitle}>Description</p>
          <p className={`${style.description} ${expanded ? style.expanded : ""}`}>{product.description}</p>
          <button
            className={style.descriptionBtn}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
