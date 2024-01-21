import noImage from '../../../images/no-image.jpg';

import {
  Aside,
  AsideItem,
  AsideLink,
  AsideList,
  AsideTitle,
  SimilarProductsIText,
  SimilarProductsITitle,
  SimilarProductsImg,
} from './SimilarProducts.styled';

export const SimilarProducts = ({
  similarProducts,
  setClickedIndex,
  setQuantity,
  setSkuIdProduct,
  message,
}) => {
  const limitedProducts = similarProducts.content.slice(0, 4);
  const cleaningValues = () => {
    setClickedIndex(0);
    setQuantity(1);
    setSkuIdProduct(null);
    message(false);
  };
  return (
    <Aside>
      <AsideTitle>Вам може сподобатись</AsideTitle>

      <AsideList>
        {limitedProducts.map(({ id, title, photos, price }) => (
          <AsideItem key={id}>
            <AsideLink to={`/catalog/${id}`} onClick={cleaningValues}>
              {photos.length !== 0 ? (
                <SimilarProductsImg
                  src={photos[0].url}
                  alt={title}
                  width="322"
                  height="402"
                />
              ) : (
                <SimilarProductsImg
                  src={noImage}
                  alt="no image"
                  width="322"
                  height="402"
                />
              )}

              <SimilarProductsITitle>{title}</SimilarProductsITitle>
              <SimilarProductsIText>
                {price.value} {price.currency.code}
              </SimilarProductsIText>
            </AsideLink>
          </AsideItem>
        ))}
      </AsideList>
    </Aside>
  );
};
