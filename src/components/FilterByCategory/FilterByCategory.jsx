import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/category/operations';

import { SortByPrice } from 'components/SortByPrice/SortByPrice';
import {
  CatalogButton,
  CatalogButtonList,
  Section,
  SelectedCatalogButton,
  Wrapper,
} from './FilterByCategory.styled';
import {
  getProductsFilterByCategory,
  getProductsPagination,
} from 'redux/products/operations';

export const FilterByCategory = ({
  categories,
  categoryId,
  handleCategoryChange,
  handleSortChange,
  setSelectedCategory,
  selectedCategory,
  selected,
  page,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    if (
      selectedCategory !== null &&
      selectedCategory !== undefined &&
      selectedCategory !== 0
    ) {
      dispatch(
        getProductsFilterByCategory({
          page,
          categoryId: selectedCategory,
          sort:
            selected === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    } else if (selectedCategory === 0) {
      dispatch(
        getProductsPagination({
          page: page,
          sort:
            selected === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    } else if (
      categoryId !== null &&
      categoryId !== undefined &&
      categoryId !== 0
    ) {
      setSelectedCategory(categoryId);
      dispatch(
        getProductsFilterByCategory({
          page,
          categoryId,
          sort:
            selected === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    } else {
      setSelectedCategory(0);
      dispatch(
        getProductsPagination({
          page,
          sort:
            selected === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    }
  }, [
    dispatch,
    page,
    categoryId,
    selectedCategory,
    selected,
    setSelectedCategory,
  ]);

  useEffect(() => {
    setSelectedCategory(categoryId);
  }, [categoryId, setSelectedCategory]);

  const handleInternalCategoryChange = newCategoryId => {
    setSelectedCategory(newCategoryId);
    handleCategoryChange(newCategoryId);
  };

  return (
    <Section>
      <Wrapper>
        <CatalogButtonList>
          {selectedCategory === 0 || selectedCategory === null ? (
            <SelectedCatalogButton>Всі</SelectedCatalogButton>
          ) : (
            <CatalogButton
              onClick={() => {
                handleInternalCategoryChange(0);
              }}
            >
              Всі
            </CatalogButton>
          )}
          {categories.length > 0 &&
            categories.map(category => (
              <li key={category.id}>
                {selectedCategory === category.id ? (
                  <SelectedCatalogButton key={category.id}>
                    {category.title}
                  </SelectedCatalogButton>
                ) : (
                  <CatalogButton
                    onClick={() => {
                      handleInternalCategoryChange(category.id);
                    }}
                    key={category.id}
                  >
                    {category.title}
                  </CatalogButton>
                )}
              </li>
            ))}
        </CatalogButtonList>
        <SortByPrice handleSortChange={handleSortChange} selected={selected} />
      </Wrapper>
    </Section>
  );
};
