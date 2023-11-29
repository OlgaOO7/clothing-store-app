import Sprite from '../../images/sprite.svg';
import { Scroll, ScrollIcon } from './ScrollUp.styled';
export const ScrollUp = () => {
  return (
    <Scroll>
      <ScrollIcon>
        <use href={`${Sprite}#icon-up`}></use>
      </ScrollIcon>
    </Scroll>
  );
};
