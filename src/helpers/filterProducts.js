function filterProducts(products, searchParams) {
  return products.filter((product) => {
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
}
export default filterProducts;