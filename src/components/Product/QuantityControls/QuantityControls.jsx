import React from 'react';
import { Span, Wrap } from './QuantityControls.styled';

import Sprite from '../../../images/sprite.svg';

export const QuantityControls = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}) => {
  return (
    <Wrap>
      <Span onClick={decreaseQuantity}>
        <svg>
          <use href={`${Sprite}#icon-minus`} />
        </svg>
      </Span>
      {quantity}
      <Span onClick={increaseQuantity}>
        <svg>
          <use href={`${Sprite}#icon-plus`} />
        </svg>
      </Span>
    </Wrap>
  );
};
