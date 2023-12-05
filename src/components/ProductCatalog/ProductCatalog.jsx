import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
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
  NavWrapper,
  ButtonsWrapper,
  Icon,
  Message,
} from './ProductCatalog.styled';
import { Pagination } from 'components/Pagination/Pagination';

export const ProductCatalog = ({ categoryId }) => {
  const [page, setCurrentPage] = useState(0);
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];

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
