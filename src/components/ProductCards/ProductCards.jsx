import React, { useState, useEffect } from "react";
import style from "./ProductCards.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import schuffleProducts from "../../helpers/schuffleProducts";
import SortLine from "../SortLine/SortLine";
import filterProducts from "../../helpers/filterProducts";
import sortProducts from "../../helpers/sortProducts";

export default function ProductCards() {
  const location = useLocation();
  const categoryTitle = location.state?.categoryTitle;
  const pathName = location.pathname;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/products/all`)
      .then((responce) => {
        setProducts(responce.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const filteredProducts = filterProducts(products, searchParams);
  const sortedProducts = sortProducts(filteredProducts, searchParams);

  const renderProducts = () => {
    const discountedProducts = products.filter((product) => product.discont_price !== null);
    switch (pathName) {
      case "/":
        return (
          <div className={style.productBox}>
            {schuffleProducts(discountedProducts)
              .slice(0, 4)
              .map((product) =>
                product.discont_price ? <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} /> : null
              )}
          </div>
        );
      case "/sales":
        return (
          <>
            <SortLine setSearchParams={setSearchParams} searchParams={searchParams} />
            <div className={style.productBox}>
              {sortedProducts.map((product) =>
                product.discont_price ? <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} /> : null
              )}
            </div>
          </>
        );
      default:
        return (
          <>
            <SortLine setSearchParams={setSearchParams} searchParams={searchParams} />
            <div className={style.productBox}>
              {sortedProducts.map((product) => (
                <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />
              ))}
            </div>
          </>
        );
    }
  };

  return renderProducts();
}
