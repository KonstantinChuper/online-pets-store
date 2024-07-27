import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import SortLine from '../components/SortLine/SortLine';
import HeaderWitoutLink from '../components/HeaderWitoutLink/HeaderWitoutLink';
import Container from "@mui/material/Container";
import ProductCards from '../components/ProductCards/ProductCards';

export default function Sales() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <HeaderWitoutLink paddingTop="40px">Discounted items</HeaderWitoutLink>
        <SortLine />
        <ProductCards />
      </Container>
    </div>
  );
}
