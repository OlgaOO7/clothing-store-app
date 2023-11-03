import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Section,
  Title,
  Wrapper,
  CategoryList,
  CategoryImage,
  CategoryWrapper,
  CategoryTitle,
  CategoryPrice,
  CategoryCount,
} from './ProductCategory.styled';
import { getCategories } from 'redux/category/operations';

export const ProductCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(state => state.categories.categories) || [];
  return (
    <Section>
      <Wrapper>
        <Title>Категорії</Title>
        <CategoryList>
          {categories.map(category => (
            <li
              className={category.id}
              key={category.id}
              style={{ width: '100%' }}
            >
              <CategoryImage></CategoryImage>
              <CategoryWrapper>
                <CategoryTitle>
                  {category.title}
                  <CategoryCount>({category.productCount})</CategoryCount>
                </CategoryTitle>
                <CategoryPrice>
                  {category.minPrice.value
                    ? `від ${
                        category.minPrice.value ? category.minPrice.value : ''
                      }  UAH`
                    : ''}
                </CategoryPrice>
              </CategoryWrapper>
            </li>
          ))}
        </CategoryList>
      </Wrapper>
    </Section>
  );
};
