export const selectTotalPages = state =>
  state.products.productsCategory?.totalPages;
export const selectProducts = state => state.products.productsCategory?.content;
export const selectNewProducts = state => state.products.products?.content;

export const selectSearchedProducts = state => state.products.productsBySearch;
export const selectSearchedProductsPage = state => state.products.searchedProducts;
export const selectIsRefreshing = state => state.products.isRefreshing;
