import { useEffect, useState } from 'react';
import {
  CatalogButton,
  CatalogButtonList,
  Section,
  SelectedCatalogButton,
  Wrapper,
} from './FilterByCategory.styled';
import { getCategories } from 'redux/category/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsFilterByCategory,
  getProductsPagination,
} from 'redux/products/operations';

export const FilterByCategory = ({ page }) => {
  const categories = useSelector(state => state.categories.categories) || [];

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(0);
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
