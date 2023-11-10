import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { LinkTo, Wrapper, Section, List } from './ProductCatalog.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPagination } from 'redux/products/operations';
import { selectTotalPages, selectProducts } from 'redux/products/selectors';

export const ProductCatalog = () => {
  const [page, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    dispatch(getProductsPagination({ page: page }));
  }, [dispatch, page]);
  const totalPage = useSelector(selectTotalPages) || 1;
  const products = useSelector(selectProducts) || [];
  console.log(products);
  return (
    <>
      <Wrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        <LinkTo to={'/catalog'}>Каталог</LinkTo>
      </Wrapper>
      <Section>
        <Wrapper>
          <List>
            {products.map(product => (
              <li key={product.id}>
                <ProductComponent item={product} />
              </li>
            ))}
          </List>
          <div>
            {Array.from({ length: totalPage }).map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index)}>
                {index + 1}
              </button>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};
