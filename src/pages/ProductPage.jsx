import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import style from "./ProductPage.module.css";
import ProductItemBig from "../components/ProductItemBig/ProductItemBig";

export default function ProductPage() {
  const location = useLocation();
  const productId = location.state?.productId;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/products/${productId}`)
      .then((responce) => {
        setProducts(responce.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <BreadCrumbs />
      {products.map((product) => {
        return (
          <section className={style.productCard}>
            <Container maxWidth={"xl"}>
              <ProductItemBig key={product.id} product={product}/>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
