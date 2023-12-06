import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import Sprite from '../../images/sprite.svg';

import {
  List,
  Button,
  ListOfButtons,
  ButtonGray,
  ButtonsWrapper,
  Icon,
  Message,
} from './ProductCatalog.styled';


export const ProductCatalogComponent = ({ data, handleNextPage, page, totalPage, handlePageChange}) => {

  return (
    data.length !== 0 ? (
      <>
        <List>
          {data.map(product => (
            <li key={product.id}>
              <ProductComponent item={product} />
            </li>
          ))}
        </List>
        <ButtonsWrapper>
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
          </ListOfButtons>
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
    ))
}



