import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { Pagination } from 'components/Pagination/Pagination';
import Sprite from '../../images/sprite.svg';

import {
  List,
  Button,
  ButtonsWrapper,
  Icon,
  Message,
  SearchWord,
  ListItem,
} from './ProductCatalog.styled';
import { useEffect } from 'react';

export const ProductCatalogComponent = ({
  data,
  type,
  handleNextPage,
  handlePrevPage,
  page,
  totalPage,
  handlePageChange,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('s');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return data.length !== 0 ? (
    <>
      <List>
        {data.map(product => (
          <ListItem key={product.id}>
            <ProductComponent item={product} />
          </ListItem>
        ))}
      </List>
      {totalPage > 1 ? (
        <ButtonsWrapper>
          <Button onClick={handlePrevPage} disabled={page > 0 ? false : true}>
            <Icon>
              <use href={`${Sprite}#icon-prev-page`}></use>
            </Icon>
          </Button>
          <Pagination
            totalPage={totalPage}
            page={page}
            handlePageChange={handlePageChange}
          />
          <Button
            onClick={handleNextPage}
            disabled={page < totalPage - 1 ? false : true}
          >
            <Icon>
              <use href={`${Sprite}#icon-next-page`}></use>
            </Icon>
          </Button>
        </ButtonsWrapper>
      ) : (
        <></>
      )}
    </>
  ) : type !== 'searchpage' ? (
    <Message>Sorry, but this category is not available yet</Message>
  ) : (
    type === 'searchpage' &&
    data.length === 0 && (
      <Message type={type}>
        За запитом <SearchWord>"{searchQuery}"</SearchWord> нічого не знайдено
      </Message>
    )
  );
};

ProductCatalogComponent.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  handleNextPage: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPage: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
};
