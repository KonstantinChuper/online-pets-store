import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import SortLine from "../components/SortLine/SortLine";
import Container from "@mui/material/Container";
import HeaderWitoutLink from "../components/GetDiscount/HeaderWitoutLink/HeaderWitoutLink";
import ProductCards from "../components/ProductCards/ProductCards";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="40px">All products</HeaderWitoutLink>
        <ProductCards />
      </Container>
    </div>
  );
}
