import React, { useState, useEffect } from "react";
import style from "./ProductCards.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_URL, getAllCategories } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import schuffleProducts from "../../helpers/schuffleProducts";
import SortLine from "../SortLine/SortLine";
import filterProducts from "../../helpers/filterProducts";
import sortProducts from "../../helpers/sortProducts";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loading/Loader";

export default function ProductCards() {
  const location = useLocation();
  const pathName = location.pathname;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { items: categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
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
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category.title;
  };

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
                product.discont_price ? (
                  <ProductItem key={product.id} product={product} categoryTitle={getCategoryName(product.categoryId)} />
                ) : null
              )}
          </div>
        );
      case "/sales":
        return (
          <>
            <SortLine setSearchParams={setSearchParams} searchParams={searchParams} />
            <div className={style.productBox}>
              {sortedProducts.map((product) =>
                product.discont_price ? (
                  <ProductItem key={product.id} product={product} categoryTitle={getCategoryName(product.categoryId)} />
                ) : null
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
                <ProductItem key={product.id} product={product} categoryTitle={getCategoryName(product.categoryId)} />
              ))}
            </div>
          </>
        );
    }
  };

  return renderProducts();
}
