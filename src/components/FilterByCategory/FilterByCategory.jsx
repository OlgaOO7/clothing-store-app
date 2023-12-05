import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/category/operations';
import { selectCategory } from 'redux/category/selectors';
import {
  getProductsFilterByCategory,
  getProductsPagination,
} from 'redux/products/operations';

import { SortByPrice } from 'components/SortByPrice/SortByPrice';
import {
  CatalogButton,
  CatalogButtonList,
  Section,
  SelectedCatalogButton,
  Wrapper,
} from './FilterByCategory.styled';

export const FilterByCategory = ({ page, categoryId }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = useSelector(selectCategory) || [];
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoryId !== null && categoryId !== undefined && categoryId !== 0) {
      console.log(categoryId);
      setSelectedCategory(categoryId);
      dispatch(getProductsFilterByCategory({ page, categoryId }));
    } else if (selectedCategory) {
      dispatch(
        getProductsFilterByCategory({ page, categoryId: selectedCategory })
      );
    } else {
      setSelectedCategory(0);
      dispatch(getProductsPagination({ page }));
    }
  }, [dispatch, page, categoryId, selectedCategory]);

  const handleCategoryChange = newCategoryId => {
    if (newCategoryId !== selectedCategory) {
      dispatch(
        getProductsFilterByCategory({ page, categoryId: newCategoryId })
      );
    }
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
                      handleCategoryChange(category.id);
                      setSelectedCategory(category.id);
                    }}
                    key={category.id}
                  >
                    {category.title}
                  </CatalogButton>
                )}
              </li>
            ))}
        </CatalogButtonList>
        <SortByPrice page={page} selectedCategory={selectedCategory} />
      </Wrapper>
    </Section>
  );
};
