import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import SortLine from '../components/SortLine/SortLine';
import Container from "@mui/material/Container";
import HeaderWitoutLink from '../components/HeaderWitoutLink/HeaderWitoutLink';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Products() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="40px">All products</HeaderWitoutLink>
        <SortLine />
        <ProductCard />
      </Container>
    </div>
  );
}
