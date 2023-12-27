export const formatPrice = price => {
  if (price && typeof price === 'number') {
    const priceToString = price.toString();
    if (priceToString.length > 3) {
      return priceToString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
  }
  return price;
};