import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/api/apiThunks";

export default function Header() {
  const { items } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
      dispatch(getAllCategories());
  }, [dispatch]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={style.burgerBox}>
        <div className={style.menu}>
          <input
            type="checkbox"
            id="burger-checkbox"
            className={style.burgerCheckbox}
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <label htmlFor="burger-checkbox" className={style.burger}></label>
          <ul className={style.menuList}>
            <li>
              <Link to={"/"} className={style.menuItem} onClick={handleMenuItemClick}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to={"/categories"} className={style.menuItem} onClick={handleMenuItemClick}>
                Categories
              </Link>
            </li>
            <li>
              <Link to={"/products"} className={style.menuItem} onClick={handleMenuItemClick}>
                All products
              </Link>
            </li>
            <li>
              <Link to={"/sales"} className={style.menuItem} onClick={handleMenuItemClick}>
                All sales
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" className={style.logoImg} />
        </Link>
      </div>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link to={"/"}>Main Page</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"/products"}>All products</Link>
          </li>
          <li>
            <Link to={"/sales"}>All sales</Link>
          </li>
        </ul>
      </nav>
      <Link to={"/cart"} className={style.cartBox}>
        <img src={cartIcon} alt="cartIcon" className={style.cartIcon} />
        {totalQuantity > 0 && (
          <div className={style.cartSchild}>
            <span className={style.cartSchildText}>{totalQuantity}</span>
          </div>
        )}
      </Link>
    </header>
  );
}
