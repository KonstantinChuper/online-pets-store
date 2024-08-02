import React from "react";
import style from "./CartItem.module.css";
import ProductCountButtons from "../Buttons/ProductCountButtons/ProductCountButtons";
import { API_URL } from "../../features/api/apiThunks";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id) 
  const quantity = cartItem ? cartItem.quantity : 1;

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className={style.cartItem}>
      <img src={`${API_URL}${product.image}`} alt={product.title} className={style.cartImg} />
      <div className={style.cartItemBox}>
        <div>
          <p className={style.cartTitle}>{product.title}</p>
          <div className={style.cartItemBtnBox}>
            <ProductCountButtons productId={product.id} />
            <div className={style.priceLine}>
              <p className={style.price}>
                {product.discont_price ? `$${product.discont_price * quantity}` : `$${product.price * quantity}`}
              </p>
              {product.discont_price && <p className={style.oldPrice}>${product.price * quantity}</p>}
            </div>
          </div>
        </div>
        <button className={style.closeBtn} onClick={handleRemove}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
