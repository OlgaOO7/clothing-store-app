import { useEffect, useState } from 'react';
import Sprite from '../../images/sprite.svg';
import { Scroll, ScrollIcon } from './ScrollUp.styled';
export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Scroll $isvisible={isVisible} onClick={scrollToTop}>
      <ScrollIcon>
        <use href={`${Sprite}#icon-up`}></use>
      </ScrollIcon>
    </Scroll>
  );
};
