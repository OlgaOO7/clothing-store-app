export const selectTotalPages = state =>
  state.products.productsCategory?.totalPages;
export const selectProducts = state => state.products.productsCategory?.content;
export const selectNewProducts = state => state.products.products?.content;
