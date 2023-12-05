import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFilterByCategory } from 'redux/products/operations';
import { selectTotalPages, selectProducts } from 'redux/products/selectors';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { FilterByCategory } from 'components/FilterByCategory/FilterByCategory';
import Sprite from '../../images/sprite.svg';

import {
  LinkTo,
  Wrapper,
  Section,
  List,
  Button,
  ListOfButtons,
  NavWrapper,
  ButtonGray,
  ButtonsWrapper,
  Icon,
  Message,
} from './ProductCatalog.styled';
import { useLocation } from 'react-router';
import { Pagination } from 'components/Pagination/Pagination';

export const ProductCatalog = () => {
  const location = useLocation();
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];
  // console.log(products);
  // console.log(location.state);
  const categoryId = location.state?.categoryId
    ? location.state.categoryId
    : null;
  console.log(categoryId);

  useEffect(() => {
    dispatch(
      getProductsFilterByCategory({ page, categoryId: categoryId || '' })
    );
  }, [dispatch, page, categoryId]);

  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleNextPage = () => {
    if (page < totalPage - 1) {
      handlePageChange(page + 1);
    }
  };
  console.log(totalPage);

  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        <LinkTo to={'/catalog'}>Каталог</LinkTo>
      </NavWrapper>
      <FilterByCategory page={page} categoryId={categoryId} />
      <Section>
        <Wrapper>
          {products.length !== 0 ? (
            <>
              <List>
                {products.map(product => (
                  <li key={product.id}>
                    <ProductComponent item={product} />
                  </li>
                ))}
              </List>
              <ButtonsWrapper>
                <Pagination
                  totalPage={totalPage}
                  page={page}
                  handlePageChange={handlePageChange}
                />
                <Button
                  onClick={handleNextPage}
                  disabled={totalPage === 1 ? true : false}
                >
                  <Icon>
                    <use href={`${Sprite}#icon-next-page`}></use>
                  </Icon>
                </Button>
              </ButtonsWrapper>
            </>
          ) : (
            <Message>Sorry, but this category is not available yet</Message>
          )}
        </Wrapper>
      </Section>
    </>
  );
};
