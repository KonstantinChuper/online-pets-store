import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderWithoutLink from "../components/GetDiscount/HeaderWitoutLink/HeaderWitoutLink";
import Container from "@mui/material/Container";
import SortLine from "../components/SortLine/SortLine";
import ProductCardsByCategories from "../components/ProductCardsByCategories/ProductCardsByCategories";

export default function Categorie() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWithoutLink paddingTop="40px">Dry & Wet Food</HeaderWithoutLink>
        <ProductCardsByCategories />
      </Container>
    </div>
  );
}
