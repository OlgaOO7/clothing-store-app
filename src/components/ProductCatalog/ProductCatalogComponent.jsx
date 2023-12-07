import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { Pagination } from 'components/Pagination/Pagination';
import Sprite from '../../images/sprite.svg';

import {
  List,
  Button,
  ButtonsWrapper,
  Icon,
  Message,
} from './ProductCatalog.styled';

export const ProductCatalogComponent = ({
  data,
  handleNextPage,
  page,
  totalPage,
  handlePageChange,
}) => {
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
  ) : (
    <Message>Sorry, but this category is not available yet</Message>
  );
};
