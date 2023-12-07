import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotalPages,
} from 'redux/products/selectors';
import { FilterByCategory } from 'components/FilterByCategory/FilterByCategory';
import { ProductCatalogComponent } from './ProductCatalogComponent';

import {
  LinkTo,
  Wrapper,
  Section,
  NavWrapper,
} from './ProductCatalog.styled';

export const ProductCatalog = ({ type, data, categoryId }) => {
  const [page, setCurrentPage] = useState(0);
  const totalPage = useSelector(selectTotalPages) || 1;

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
        type !== 'searchpage' && <FilterByCategory page={page} categoryId={categoryId} handlePageChange={handlePageChange} />
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
