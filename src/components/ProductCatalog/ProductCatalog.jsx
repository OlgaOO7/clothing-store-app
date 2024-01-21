import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPages } from 'redux/products/selectors';
import { FilterByCategory } from 'components/FilterByCategory/FilterByCategory';
import { ProductCatalogComponent } from './ProductCatalogComponent';

import { LinkTo, Wrapper, Section, NavWrapper } from './ProductCatalog.styled';
import { useLocation } from 'react-router-dom';

export const ProductCatalog = ({ type, data, categoryId }) => {
  const [page, setCurrentPage] = useState(0);
  const totalPage = useSelector(selectTotalPages) || 1;
  const location = useLocation();

  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleNextPage = () => {
    if (page < totalPage - 1) {
      handlePageChange(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 0) {
      handlePageChange(page - 1);
    }
  };
  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        {type !== 'searchpage' ? (
          <LinkTo to={'/catalog'}>Каталог</LinkTo>
        ) : (
          <p>Пошук</p>
        )}
      </NavWrapper>
      {type !== 'searchpage' && (
        <FilterByCategory
          page={page}
          categoryId={categoryId ? categoryId : location.state?.categoryId}
          handlePageChange={handlePageChange}
        />
      )}
      <Section>
        <Wrapper>
          <ProductCatalogComponent
            data={data}
            type={type}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            page={page}
            totalPage={totalPage}
            handlePageChange={handlePageChange}
          />
        </Wrapper>
      </Section>
    </>
  );
};
