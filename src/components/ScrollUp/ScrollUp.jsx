import Sprite from '../../images/sprite.svg';
import { Scroll, ScrollIcon } from './ScrollUp.styled';
export const ScrollUp = () => {
  return (
    <Scroll
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <ScrollIcon>
        <use href={`${Sprite}#icon-up`}></use>
      </ScrollIcon>
    </Scroll>
  );
};
