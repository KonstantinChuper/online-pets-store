import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderWitoutLink from "../components/HeaderWitoutLink/HeaderWitoutLink";
import Container from "@mui/material/Container";
import ProductCards from "../components/ProductCards/ProductCards";

export default function Sales() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="2.5rem">Discounted items</HeaderWitoutLink>
        <ProductCards />
      </Container>
    </div>
  );
}
