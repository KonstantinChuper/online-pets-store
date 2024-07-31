import React, { useEffect, useState } from "react";
import BreadCrumbsDirect from "../components/BreadCrumbs/BreadCrumpsDirect";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import style from "./ProductPage.module.css";
import ProductItemBig from "../components/ProductItemBig/ProductItemBig";
import { API_URL } from "../features/api/apiThunks";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const location = useLocation();
  const productId = location.state?.productId;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { items: categories } = useSelector((state) => state.categories);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((responce) => {
        setProducts(responce.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const product = products[0];
  const categoryName = categories.find((item) => item.id === product.categoryId);

  return (
    <div>
      <BreadCrumbsDirect
        breadcrumbs={[
          {
            to: "categories",
            label: "Categories",
          },
          {
            to: `categories/${categoryName.title}`,
            label: categoryName.title,
          },
          { to: `categories/${categoryName.title}/${product.title}`, label: product.title },
        ]}
      />
      {products.map((product) => (
        <section className={style.productCard}>
          <Container maxWidth={"xl"}>
            <ProductItemBig key={product.id} product={product} />
          </Container>
        </section>
      ))}
    </div>
  );
}
