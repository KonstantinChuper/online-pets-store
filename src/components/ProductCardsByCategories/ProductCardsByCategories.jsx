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
