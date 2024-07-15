import React from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Sale from "../components/Sale/Sale";
import GetDiscount from "../components/GetDiscount/GetDiscount";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container maxWidth="xl">
        <Categories />
        <GetDiscount />
        <Sale />
      </Container>
    </div>
  );
}
