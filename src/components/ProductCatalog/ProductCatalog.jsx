import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPagination } from 'redux/products/operations';
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

export const ProductCatalog = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];

  useEffect(() => {
    dispatch(getProductsPagination({ page: page }));
  }, [dispatch, page]);

  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleNextPage = () => {
    if (page < totalPage - 1) {
      handlePageChange(page + 1);
    }
  };

  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        <LinkTo to={'/catalog'}>Каталог</LinkTo>
      </NavWrapper>
      <FilterByCategory page={page} />
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
                <ListOfButtons>
                  {Array.from({ length: totalPage }).map((_, index) => (
                    <li key={index}>
                      {page === index ? (
                        <Button onClick={() => handlePageChange(index)}>
                          {index + 1}
                        </Button>
                      ) : (
                        <ButtonGray onClick={() => handlePageChange(index)}>
                          {index + 1}
                        </ButtonGray>
                      )}
                    </li>
                  ))}
                </ListOfButtons>
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
