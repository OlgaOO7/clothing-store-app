import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPagination } from 'redux/products/operations';
import { selectTotalPages, selectProducts } from 'redux/products/selectors';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
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
} from './ProductCatalog.styled';

export const ProductCatalog = () => {
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];

  useEffect(() => {
    dispatch(getProductsPagination({ page: page }));
  }, [dispatch, page]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

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
      <Section>
        <Wrapper>
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
        </Wrapper>
      </Section>
    </>
  );
};
