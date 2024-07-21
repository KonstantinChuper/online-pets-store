import React, { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderWithoutLink from "../components/HeaderWitoutLink/HeaderWitoutLink";
import Container from "@mui/material/Container";
import SortLine from "../components/SortLine/SortLine";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Categorie() {
  const location = useLocation();
  const categoryId = location.state?.categoryId;

  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWithoutLink paddingTop="40px">Dry & Wet Food</HeaderWithoutLink>
        <SortLine />
        <ProductCard />
 

        {/* <div className={style.productBox}>
          {isHome
            ? products.slice(0, 4).map((product) => {
                return (
                  <Link to={`/products/${product.title}`} key={product.id}>
                    <img className={style.productImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                    <span>{product.title}</span>
                  </Link>
                );
              })
            : products.map((product) => {
                return (
                  <Link to={`/products/${product.title}`} key={product.id}>
                    <img className={style.productImage} src={`http://localhost:3333${product.image}`} alt={product.title} />
                    <span>{product.title}</span>
                  </Link>
                );
              })}
        </div> */}
      </Container>
    </div>
  );
}
