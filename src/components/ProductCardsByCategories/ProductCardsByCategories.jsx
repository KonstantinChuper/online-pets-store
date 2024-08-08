import React, { useEffect, useState } from "react";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import axios from "axios";
import style from "./ProductCardsByCategories.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/api/apiThunks";
import SortLine from "../SortLine/SortLine";
import filterProducts from "../../helpers/filterProducts";
import sortProducts from "../../helpers/sortProducts";
import Loader from "../Loading/Loader";

export default function ProductCardsByCategories() {
  const { categoryTitle } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const { items: categories, status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const category = categories.find((category) => category.title === categoryTitle);
  const categoryId = category ? category.id : null;

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllCategories());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (categoryId) {
      setIsLoading(true);
      axios
        .get(`${API_URL}/categories/${categoryId}`)
        .then((response) => {
          setProducts(response.data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [categoryId]);

  if (isLoading || status === "loading") {
    return <Loader />;
  }
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const filteredProducts = filterProducts(products, searchParams);
  const sortedProducts = sortProducts(filteredProducts, searchParams);

  return (
    <>
      <SortLine setSearchParams={setSearchParams} searchParams={searchParams} />
      <div className={style.productBox}>
        {sortedProducts.map((product) => {
          return <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />;
        })}
      </div>
    </>
  );
}
