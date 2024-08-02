import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderWitoutLink from "../components/GetDiscount/HeaderWitoutLink/HeaderWitoutLink";
import Container from "@mui/material/Container";
import ProductCards from "../components/ProductCards/ProductCards";

export default function Sales() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="40px">Discounted items</HeaderWitoutLink>
        <ProductCards />
      </Container>
    </div>
  );
}
