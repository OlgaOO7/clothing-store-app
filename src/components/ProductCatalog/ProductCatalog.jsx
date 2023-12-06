import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPagination } from 'redux/products/operations';
import {
  selectTotalPages,
  // selectProducts,
  // selectSearchedProducts,
} from 'redux/products/selectors';

// import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { FilterByCategory } from 'components/FilterByCategory/FilterByCategory';
// import Sprite from '../../images/sprite.svg';

import { ProductCatalogComponent } from './ProductCatalogComponent';

import {
  LinkTo,
  Wrapper,
  Section,
  // List,
  // Button,
  // ListOfButtons,
  NavWrapper,
  // ButtonGray,
  // ButtonsWrapper,
  // Icon,
  // Message,
} from './ProductCatalog.styled';

export const ProductCatalog = ({ type, data }) => {
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPages) || 1;
  // const products = useSelector(selectProducts) || [];
  // const searchedProducts = useSelector(selectSearchedProducts);
  // console.log(products);

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
      {
        type !== 'searchpage' && <FilterByCategory page={page} />
      }
            <Section>
        <Wrapper>
          <ProductCatalogComponent
            data={data}
            type={type}
            handleNextPage={handleNextPage}
            page={page}
            totalPage={totalPage}
            handlePageChange={handlePageChange}
          />
        </Wrapper>
      </Section>
    </>
  );
};
