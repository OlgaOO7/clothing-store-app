import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  selectIsRefreshing,
  selectSearchedTotalPages,
  selectTotalPages,
} from 'redux/products/selectors';
import { FilterByCategory } from 'components/FilterByCategory/FilterByCategory';
import { ProductCatalogComponent } from './ProductCatalogComponent';

import {
  LinkTo,
  Wrapper,
  Section,
  NavWrapper,
  NavSection,
} from './ProductCatalog.styled';
import {
  getProductsFilterByCategory,
  getProductsPagination,
  getProductsSortByPrice,
} from 'redux/products/operations';
import { selectCategory } from 'redux/category/selectors';
import { getCategories } from 'redux/category/operations';
import { Loader } from 'components/Loader/Loader';

export const ProductCatalog = ({
  type,
  data,
  categoryId,
  page,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selected, setIsSelected] = useState(
    'Сортування за ціною: від вищої до нижчої'
  );
  const isLoading = useSelector(selectIsRefreshing);
  const totalPage = useSelector(
    type === 'searchpage' ? selectSearchedTotalPages : selectTotalPages
  );
  const categories = useSelector(selectCategory) || [];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('s');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handlePageChange = useCallback(
    page => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

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

  const handleSortChange = useCallback(
    order => {
      setCurrentPage(0);
      dispatch(
        getProductsSortByPrice({
          page,
          sort:
            order === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
          selectedCategory,
        })
      );
      setIsSelected(order);
    },
    [dispatch, page, selectedCategory, setCurrentPage]
  );

  const handleCategoryChange = newCategoryId => {
    handlePageChange(0);

    if (newCategoryId === 0) {
      dispatch(getProductsPagination({ page }));
    } else {
      dispatch(
        getProductsFilterByCategory({
          page,
          categoryId: newCategoryId,
          sort:
            selected === 'Сортування за ціною: від нижчої до вищої'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    }
  };

  return (
    <>
      <NavSection>
        <NavWrapper>
          <LinkTo to={'/'}>Головна</LinkTo>
          <span>|</span>
          {type !== 'searchpage' ? (
            <LinkTo to={'/catalog'}>Каталог</LinkTo>
          ) : (
            <LinkTo to={`/search?s=${searchQuery}`}>Пошук</LinkTo>
          )}
        </NavWrapper>
      </NavSection>
      {type !== 'searchpage' && (
        <FilterByCategory
          categories={categories}
          categoryId={categoryId}
          handleCategoryChange={handleCategoryChange}
          handleSortChange={handleSortChange}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          selected={selected}
          page={page}
        />
      )}
      <Section>
        <Wrapper>
          {isLoading ? (
            <Loader />
          ) : (
            <ProductCatalogComponent
              data={data}
              type={type}
              handleNextPage={handleNextPage}
              page={page}
              totalPage={totalPage}
              handlePageChange={handlePageChange}
              handlePrevPage={handlePrevPage}
            />
          )}
        </Wrapper>
      </Section>
    </>
  );
};

ProductCatalog.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array.isRequired,
  categoryId: PropTypes.number,
  page: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
