import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import {
  LinkTo,
  Wrapper,
  Section,
  List,
  Button,
  ListOfButtons,
  NavWrapper,
  ButtonGray,
} from './ProductCatalog.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPagination } from 'redux/products/operations';
import { selectTotalPages, selectProducts } from 'redux/products/selectors';
import Sprite from '../../images/sprite.svg';

export const ProductCatalog = () => {
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    dispatch(getProductsPagination({ page: page }));
  }, [dispatch, page]);
  const handleNextPage = () => {
    if (page < totalPage - 1) {
      handlePageChange(page + 1);
    }
  };
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];
  console.log(products);
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
            <Button onClick={handleNextPage}>
              <svg style={{ width: '11px', height: '10px' }}>
                <use href={`${Sprite}#icon-next-page`}></use>
              </svg>
            </Button>
          </ListOfButtons>
        </Wrapper>
      </Section>
    </>
  );
};
