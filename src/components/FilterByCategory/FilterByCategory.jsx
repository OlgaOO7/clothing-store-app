import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/category/operations';
import { selectCategory } from 'redux/category/selectors';
import {
  getProductsFilterByCategory,
  getProductsPagination,
} from 'redux/products/operations';

import {
  CatalogButton,
  CatalogButtonList,
  Section,
  SelectedCatalogButton,
  Wrapper,
} from './FilterByCategory.styled';

export const FilterByCategory = ({ page }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = useSelector(selectCategory) || [];

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryChange = categoryId => {
    dispatch(
      getProductsFilterByCategory({ page: page, categoryId: categoryId })
    );
    setSelectedCategory(categoryId);
  };
  return (
    <Section>
      <Wrapper>
        <CatalogButtonList>
          {selectedCategory === 0 ? (
            <SelectedCatalogButton>Всі</SelectedCatalogButton>
          ) : (
            <CatalogButton
              onClick={() => {
                dispatch(getProductsPagination({ page: page }));
                setSelectedCategory(0);
              }}
            >
              Всі
            </CatalogButton>
          )}
          {categories.map(category => (
            <li key={category.id}>
              {selectedCategory === category.id ? (
                <SelectedCatalogButton key={category.id}>
                  {category.title}
                </SelectedCatalogButton>
              ) : (
                <CatalogButton
                  onClick={() => handleCategoryChange(category.id)}
                  key={category.id}
                >
                  {category.title}
                </CatalogButton>
              )}
            </li>
          ))}
        </CatalogButtonList>
      </Wrapper>
    </Section>
  );
};
