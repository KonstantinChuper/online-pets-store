function sortProducts(productsToSort, searchParams) {
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

export default sortProducts;