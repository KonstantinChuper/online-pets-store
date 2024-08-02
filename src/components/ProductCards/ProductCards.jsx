import React, { useState, useEffect } from "react";
import style from "./ProductCards.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import schuffleProducts from "../../helpers/schuffleProducts";
import SortLine from "../SortLine/SortLine";

export default function ProductCards() {
  const location = useLocation();
  const categoryTitle = location.state?.categoryTitle;
  const pathName = location.pathname;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === "checkbox" ? checked : value);
    setSearchParams(newSearchParams);
  }

  const filteredProducts = products.filter((product) => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const includeDiscount = searchParams.get("includeDiscount") === "true";
    const priceToCheck = product.discont_price ? product.discont_price : product.price;
    if (minPrice && priceToCheck < Number(minPrice)) {
      return false;
    }
    if (maxPrice && priceToCheck > Number(maxPrice)) {
      return false;
    }
    if (includeDiscount && !product.discont_price) {
      return false;
    }
    return true;
  });

  const sortProducts = (productsToSort) => {
    const sortBy = searchParams.get("sortBy") || "byDefault";
    switch (sortBy) {
      case "priceHighToLow":
        return productsToSort.slice().sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });
      case "priceLowToHigh":
        return productsToSort.slice().sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });
      case "newest":
        return productsToSort.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return productsToSort;
    }
  };

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

  const sortedProducts = sortProducts(filteredProducts);

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
            <SortLine handleChange={handleChange} searchParams={searchParams} />
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
            <SortLine handleChange={handleChange} searchParams={searchParams} />
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
