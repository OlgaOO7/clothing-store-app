import noImage from '../../../images/no-image.jpg';

import {
  Wrap,
  Item,
  StyledLink,
  List,
  Title,
  Price,
  Name,
  Img,
  WramImg,
} from './SimilarProducts.styled';

export const SimilarProducts = ({
  similarProducts,
  setClickedIndex,
  setQuantity,
  setSkuIdProduct,
  message,
  setMessageSize,
}) => {
  const limitedProducts = similarProducts.content.slice(0, 4);
  const cleaningValues = () => {
    setClickedIndex(0);
    setQuantity(1);
    setSkuIdProduct(null);
    message(false);
    setMessageSize(false);
  };
  return (
    <Wrap>
      <Title>Вам може сподобатись</Title>

      <List>
        {limitedProducts.map(({ id, title, photos, price }) => (
          <Item key={id}>
            <article>
              <StyledLink to={`/catalog/${id}`} onClick={cleaningValues}>
                {photos.length !== 0 ? (
                  <WramImg>
                    <Img
                      src={photos[0].url}
                      alt={title}
                      // width="322"
                      // height="402"
                    />
                  </WramImg>
                ) : (
                  <Img src={noImage} alt="no image" width="322" height="402" />
                )}

                <Name>{title}</Name>
                <Price>
                  {price.value} {price.currency.code}
                </Price>
              </StyledLink>
            </article>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};
