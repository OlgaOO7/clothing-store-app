import noImage from '../../../images/no-image.jpg';

import { Image, WrapImg } from './ProductImage.styled';

export const ProductImage = ({ filterPhoto, clickedIndex }) => {
  return (
    <WrapImg>
      {filterPhoto.length !== 0 ? (
        <Image
          src={filterPhoto[clickedIndex].url}
          alt={filterPhoto[clickedIndex].color}
        />
      ) : (
        <Image src={noImage} alt="no image" />
      )}
    </WrapImg>
  );
};
