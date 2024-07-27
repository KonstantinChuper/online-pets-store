// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProductsByCategory } from '../../features/api/apiThunks';
// import { useLocation } from 'react-router-dom';
// import ProductItem from '../ProductItem/ProductItem';

// export default function ProductCardsByCategories() {
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
//    console.log(products)
//     return (
//        <div>
//           {products.map((product) => {
//             <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />
//           })}
//        </div>
//     )
// }

import React, { useState, useEffect } from "react";
import style from "./ProductCardsByCategories.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../features/api/apiThunks";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";

export default function ProductCardsByCategories() {
  const location = useLocation();
  const categoryTitle = location.state?.categoryTitle;
  const [products, setProducts] = useState([]);

  const { items: categories, status, error } = useSelector((state) => state.categories);
  const category = categories.find((category) => category.title === categoryTitle);
  const categoryId = category.id
  console.log(categoryId);

  useEffect(() => {
    axios
      .get(`${API_URL}/categories/${categoryId}`)
      .then((responce) => {
        setProducts(responce.data.data);
        console.log(responce)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className={style.productBox}>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} categoryTitle={categoryTitle} />;
      })}
    </div>
  ); 
}
