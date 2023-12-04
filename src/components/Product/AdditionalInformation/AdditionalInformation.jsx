import Sprite from '../../../images/sprite.svg';

import {
  CharacteristicsProduct,
  Container,
  Icon,
  Underline,
  Wrap,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <Container>
      <Wrap>
        <CharacteristicsProduct>Характеристика товару</CharacteristicsProduct>
        <Icon>
          <use href={`${Sprite}#icon-vector-13`} />
        </Icon>
      </Wrap>
      <Underline />

      <Wrap>
        <CharacteristicsProduct>Правила догляду </CharacteristicsProduct>
        <Icon>
          <use href={`${Sprite}#icon-vector-13`} />
        </Icon>
      </Wrap>
      <Underline />
    </Container>
  );
};
