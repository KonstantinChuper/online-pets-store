import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderWithoutLink from "../components/HeaderWitoutLink/HeaderWitoutLink";
import Container from "@mui/material/Container";
import SortLine from "../components/SortLine/SortLine";
import ProductCards from "../components/ProductCards/ProductCards";

export default function Categorie() {

  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWithoutLink paddingTop="40px">Dry & Wet Food</HeaderWithoutLink>
        <SortLine />
        <ProductCards />
      </Container>
    </div>
  );
}
