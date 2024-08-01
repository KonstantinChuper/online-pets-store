import React, { useState } from "react";
import style from "./ProductItemBig.module.css";
import countDiscount from "../../helpers/countDiscount";
import ProductCountButtons from "../Buttons/ProductCountButtons/ProductCountButtons";
import Button from "../Buttons/Button/Button";
import { API_URL } from "../../features/api/apiThunks";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductItemBig({ product }) {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        discont_price: product.discont_price,
        quantity,
      })
    );
  }

  return (
    <div className={style.productBox}>
      <img className={style.categoryImage} src={`${API_URL}${product.image}`} alt={product.title} />
      <div className={style.productCardBox}>
        <h3 className={style.productName}>{product.title}</h3>
        <div className={style.priceLine}>
          <p className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</p>
          {product.discont_price && <p className={style.oldPrice}>${product.price}</p>}
          {product.discont_price && <div className={style.discount}>-{countDiscount(product.price, product.discont_price)}%</div>}
        </div>
        <div className={style.btnBox}>
          <ProductCountButtons productId={product.id} />
          <Button style={{ width: "100%" }} onClick={handleClick}>
            Add to cart
          </Button>
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
