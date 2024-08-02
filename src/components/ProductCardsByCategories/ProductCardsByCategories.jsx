// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProductsByCategory } from '../../features/api/apiThunks';
// import { useLocation } from 'react-router-dom';
// import ProductItem from '../ProductItem/ProductItem';

// export default function ProductCardsByCategories() {
//     const location = useLocation();
//     const categoryTitle = location.state?.categoryTitle
//     const dispatch = useDispatch();
//     const {categoryItems: products, status, error} = useSelector((state) => state.products);

//     useEffect(() => {
//        if (status === "idle") {
//         dispatch(getProductsByCategory())
//        }
//     }, [dispatch, status])

//     if (status === "loading") {
//       return <div>Loading...</div>;
//     }

//     if (status === "failed") {
//       return <div>Error: {error}</div>;
//     }

//     return (
//        <div>
//           {products.map((product) => {
//             <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />
//           })}
//        </div>
//     )
// }

import React, { useEffect, useState } from "react";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import axios from "axios";
import style from "./ProductCardsByCategories.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/api/apiThunks";
import SortLine from "../SortLine/SortLine";

export default function ProductCardsByCategories() {
  const { categoryTitle } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    return <div>Loading...</div>;
  }
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <SortLine products={products} />
      <div className={style.productBox}>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />;
        })}
      </div>
    </>
  );
}
