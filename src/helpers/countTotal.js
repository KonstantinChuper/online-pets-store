export function countTotalQuantity(items) {
  return items.reduce((acc, item) => acc + item.quantity, 0);
}
export function countTotalPrice(items) {
  return items.reduce((total, item) => {
    const itemPrice = item.discont_price || item.price;
    return total + itemPrice * item.quantity;
  }, 0);
}

