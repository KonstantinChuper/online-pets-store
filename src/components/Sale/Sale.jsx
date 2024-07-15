import React from 'react'
import style from './Sale.module.css';
import HeaderWithLinks from '../HeaderWithLinks/HeaderWithLinks';
import { Link } from "react-router-dom";
import ProductCard from '../ProductCard/ProductCard';

export default function Sale() {
  return (
    <section className={style.saleSection}>
      <HeaderWithLinks header={"Sale"} linkText={"sales"} />
      <div className={style.linksBox}>

        <ProductCard />

        {/* <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <div className={style.priceBox}>
            <span className={style.productName}>Dry Dog Food for Adult Dogs ерфе равои</span>
            <div className={style.priceLine}>
              <span className={style.price}>$80</span>
              <span className={style.oldPrice}>$100</span>
            </div>
          </div>
        </Link> */}

        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
        <Link to={"/Dry & Wet Food"}>
          <img
            className={style.categoryImage}
            src="https://img.freepik.com/free-photo/cute-dog-in-city_23-2151002720.jpg?size=626&ext=jpg&ga=GA1.1.1930886316.1720954216&semt=ais_user"
            alt="Dog"
          />
          <span>Dry & Wet Food</span>
        </Link>
      </div>
    </section>
  );
}
