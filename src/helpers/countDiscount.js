const countDiscount = (oldPrice, newPrice) => {
   return Math.round(((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100);
}
export default countDiscount;