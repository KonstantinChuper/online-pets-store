import React from 'react'
import style from './Sale.module.css';
import HeaderWithLinks from '../HeaderWithLinks/HeaderWithLinks';
import ProductCard from '../ProductCard/ProductCard';

export default function Sale() {
  return (
    <section className={style.saleSection}>
      <HeaderWithLinks header={"Sale"} path={"sales"}>
        Sales
      </HeaderWithLinks>
      <div className={style.linksBox}>
        <ProductCard />
      </div>
    </section>
  );
}
