import { useLocation } from 'react-router-dom';

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
} from './ProductCatalog.styled';

export const ProductCatalogComponent = ({
  data,
  type,
  handleNextPage,
  page,
  totalPage,
  handlePageChange,
  isLoading,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('s');

  return data.length !== 0 ? (
    <>
      <List>
        {data.map(product => (
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
  ) : type !== 'searchpage' ? (
    <Message>Sorry, but this category is not available yet</Message>
  ) : (
    type === 'searchpage' &&
    data.length === 0 && (
      <Message>
        За запитом <SearchWord>"{searchQuery}"</SearchWord> нічого не знайдено
      </Message>
    )
  );
};
