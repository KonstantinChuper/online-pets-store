import React from "react";
import style from "./CartItem.module.css";
import ProductCountButtons from "../Buttons/ProductCountButtons/ProductCountButtons";
import { API_URL } from "../../features/api/apiThunks";
import CloseIcon from "@mui/icons-material/Close";

export default function CartItem({ product }) {
  return (
    <div className={style.cartItem}>
      <img src={`${API_URL}${product.image}`} alt={product.title} className={style.cartImg} />
      <div className={style.cartItemBox}>
        <div>
          <p className={style.cartTitle}>{product.title}</p>
          <div className={style.cartItemBtnBox}>
            <ProductCountButtons />
            <div className={style.priceLine}>
              <p className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</p>
              {product.discont_price && <p className={style.oldPrice}>${product.price}</p>}
            </div>
          </div>
        </div>
        <button className={style.closeBtn}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
