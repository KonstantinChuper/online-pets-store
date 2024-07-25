import React from 'react'
import style from './Sale.module.css';
import HeaderWithLinks from '../HeaderWithLinks/HeaderWithLinks';
import ProductCards from '../ProductCards/ProductCards';

export default function Sale() {
  return (
    <section className={style.saleSection}>
      <HeaderWithLinks header={"Sale"} path={"sales"}>
        Sales
      </HeaderWithLinks>
      <div className={style.linksBox}>
        <ProductCards />
      </div>
    </section>
  );
}
