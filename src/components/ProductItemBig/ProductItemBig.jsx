import React, { useEffect, useRef, useState } from "react";
import style from "./ProductItemBig.module.css";
import countDiscount from "../../helpers/countDiscount";
import ProductCountButtons from "../Buttons/ProductCountButtons/ProductCountButtons";
import Button from "../Buttons/Button/Button";
import { API_URL } from "../../features/api/apiThunks";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductItemBig({ product }) {
  const [expanded, setExpanded] = useState(false);
  const [counter, setCounter] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
  const descriptionRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function checkIfReadMoreVisible() {
      if (descriptionRef.current) {
        const lineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight);
        const maxLines = 8;
        const maxHeight = lineHeight * maxLines;
        setIsReadMoreVisible(descriptionRef.current.scrollHeight > maxHeight);
      }
    };

    checkIfReadMoreVisible();
    window.addEventListener("resize", checkIfReadMoreVisible);

    return () => window.removeEventListener("resize", checkIfReadMoreVisible);
  }, [product.description]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        discont_price: product.discont_price,
        quantity: counter,
      })
    );
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
    setCounter(1);
  }

  function handleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrease() {
    setCounter((prev) => (prev > 1 ? prev - 1 : prev));
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
          <ProductCountButtons counter={counter} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
          <Button style={{ width: "100%" }} onClick={handleClick} btnType={isAdded ? "added" : null} disabled={isAdded}>
            {isAdded ? "Added" : "Add to cart"}
          </Button>
        </div>
        <div className={style.descriptionBox}>
          <p className={style.descriptionTitle}>Description</p>
          <p ref={descriptionRef} className={`${style.description} ${expanded ? "" : style.expanded}`}>
            {product.description}
          </p>
          {isReadMoreVisible && (
            <button className={style.descriptionBtn} onClick={() => setExpanded(!expanded)}>
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
