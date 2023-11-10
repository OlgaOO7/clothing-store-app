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
  CategoryItem,
} from './ProductCategory.styled';
import { getCategories } from 'redux/category/operations';
import { selectCategory } from 'redux/category/selectors';

export const ProductCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(selectCategory) || [];
  return (
    <Section>
      <Wrapper>
        <Title>Категорії</Title>
        <CategoryList>
          {categories.map(category => (
            <CategoryItem key={category.id}>
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
            </CategoryItem>
          ))}
        </CategoryList>
      </Wrapper>
    </Section>
  );
};
