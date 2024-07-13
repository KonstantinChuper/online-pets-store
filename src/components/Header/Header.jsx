import React from 'react'
import logo from '../../assets/logo.svg'
import cartIcon from "../../assets/cartIcon.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">All products</a>
          </li>
          <li>
            <a href="#">All sales</a>
          </li>
        </ul>
      </nav>
      <a href="">
        <img src={cartIcon} alt="" />
      </a>
    </header>
  );
}
