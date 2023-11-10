export const selectTotalPages = state =>
  state.products.productsCategory?.totalPages;
export const selectProducts = state => state.products.productsCategory?.content;
