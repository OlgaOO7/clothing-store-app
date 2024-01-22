import React from 'react';
import { Button, Wrap } from './QuantityControls.styled';

import Sprite from '../../../images/sprite.svg';

export const QuantityControls = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
  amount,
}) => {
  return (
    <Wrap>
      <Button onClick={decreaseQuantity}>
        <svg>
          <use href={`${Sprite}#icon-minus`} />
        </svg>
      </Button>
      {quantity}
      <Button onClick={increaseQuantity} value={amount <= quantity}>
        <svg>
          <use href={`${Sprite}#icon-plus`} />
        </svg>
      </Button>
    </Wrap>
  );
};
