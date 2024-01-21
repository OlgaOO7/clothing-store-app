import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Section,
  Title,
  Wrapper,
  CategoryList,
  CategoryImage,
  CategoryTitle,
  CategoryCount,
  CategoryItem,
  LinkTo,
} from './ProductCategory.styled';
import { getCategories } from 'redux/category/operations';
import { selectCategory } from 'redux/category/selectors';
import skinny from '../../images/skinny.jpg';
import tShirts from '../../images/t-shirts.jpg';
import costumes from '../../images/costumes.jpg';
import pants from '../../images/pants.jpg';
import sweatshirts from '../../images/sweatshirts.jpg';
import { Link } from 'react-router-dom';

export const ProductCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(selectCategory) || [];
  const visibleCategories = categories.slice(0, 5);
  const photos = [tShirts, costumes, sweatshirts, skinny, pants];
  return (
    <Section>
      <Wrapper>
        <Title>Категорії</Title>
        <CategoryList>
          {visibleCategories.map((category, index) => (
            <LinkTo
              to={'catalog'}
              state={{ categoryId: category.id }}
              key={category.id}
            >
              <CategoryItem>
                <CategoryImage $photo={photos[index]} />
                <CategoryTitle>
                  {category.title}
                  <CategoryCount>({category.productCount})</CategoryCount>
                </CategoryTitle>
              </CategoryItem>
            </LinkTo>
          ))}
        </CategoryList>
        <Link></Link>
      </Wrapper>
    </Section>
  );
};
