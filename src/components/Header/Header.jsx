import React from "react";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className={styles.navList}>
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
      <Link to={"/cart"}>
        <img src={cartIcon} alt="" />
      </Link>
    </header>
  );
}
