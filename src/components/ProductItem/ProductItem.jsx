import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../features/api/apiThunks";
import { Link } from "react-router-dom";
import React from "react";
import { addToCart } from "../../features/cart/cartSlice";
import countDiscount from "../../helpers/countDiscount";
import style from "./ProductItem.module.css";

export default function ProductItem({ product, categoryTitle }) {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);

  const isInCart = itemsInCart.some((item) => item.id === product.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInCart) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          discont_price: product.discont_price,
          quantity: 1,
        })
      );
    }
  };

  return (
    <Link
      to={`/categories/${categoryTitle}/${product.title}`}
      key={product.id}
      className={style.card}
      state={{ productId: product.id, productTitle: product.title }}
    >
      <img className={style.categoryImage} src={`${API_URL}${product.image}`} alt={product.title} />
      {product.discont_price && <div className={style.discount}>-{countDiscount(product.price, product.discont_price)}%</div>}
      <button className={`${style.productBtn} ${isInCart ? style.addedToCartBtn : ""}`} onClick={handleClick}>
        {isInCart ? "Added" : "Add to cart"}
      </button>
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
