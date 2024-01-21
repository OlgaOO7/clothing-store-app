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

export const FilterByCategory = ({
  categories,
  categoryId,
  handleCategoryChange,
  handleSortChange,
  setSelectedCategory,
  selectedCategory,
  selected,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
          {selectedCategory === 0 ? (
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
