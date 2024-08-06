import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CategoriesElement from "../components/Categories/Categories";
import Container from "@mui/material/Container";
import HeaderWitoutLink from "../components/HeaderWitoutLink/HeaderWitoutLink";

export default function Categories() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="2.5rem">Categories</HeaderWitoutLink>
        <CategoriesElement />
      </Container>
    </div>
  );
}
