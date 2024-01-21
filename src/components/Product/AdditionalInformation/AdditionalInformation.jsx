import { useState } from 'react';
import Sprite from '../../../images/sprite.svg';

import {
  CharacteristicsProduct,
  Container,
  Icon,
  ButtonIcon,
  Wrap,
  Text,
} from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  const [openInfoCharacteristic, setOpenInfoCharacteristic] = useState(false);
  const [openInfoRegulations, setOpenInfoRegulations] = useState(false);

  const toggleInfoCharacteristic = () => {
    setOpenInfoCharacteristic(!openInfoCharacteristic);
  };

  const toggleInfoRegulations = () => {
    setOpenInfoRegulations(!openInfoRegulations);
  };
  return (
    <Container>
      <div>
        <Wrap>
          <CharacteristicsProduct>Характеристика товару</CharacteristicsProduct>
          <ButtonIcon
            name="characteristic"
            type="button"
            onClick={toggleInfoCharacteristic}
          >
            {openInfoCharacteristic ? (
              <Icon>
                <use href={`${Sprite}#icon-vector-14`} />
              </Icon>
            ) : (
              <Icon>
                <use href={`${Sprite}#icon-vector-13`} />
              </Icon>
            )}
          </ButtonIcon>
        </Wrap>

        {openInfoCharacteristic && <Text>Інформація відсутня</Text>}
      </div>
      <Wrap>
        <CharacteristicsProduct>Правила догляду </CharacteristicsProduct>
        <ButtonIcon
          name="regulations"
          type="button"
          onClick={toggleInfoRegulations}
        >
          {openInfoRegulations ? (
            <Icon>
              <use href={`${Sprite}#icon-vector-14`} />
            </Icon>
          ) : (
            <Icon>
              <use href={`${Sprite}#icon-vector-13`} />
            </Icon>
          )}
        </ButtonIcon>
      </Wrap>

      {openInfoRegulations && <Text>Інформація відсутня</Text>}
    </Container>
  );
};
