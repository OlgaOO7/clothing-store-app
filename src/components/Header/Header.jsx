import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';
import { Modal } from 'components/Modal/Modal'
import { Navigation } from 'components/Navigation/Navigation';

import Sprite from '../../images/sprite.svg';

import {
  HeaderWrapper,
  BtnWrapper,
  MenuBtn,
  MenuIcon,
  CartBtn,
  CartIcon,
  SearchBtn,
  SearchIcon,
} from './Header.styled';

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <HeaderWrapper>
      <Logo />
      <BtnWrapper>
        <SearchBtn type="button">
          <SearchIcon width={24} height={24}>
            <use href={`${Sprite}#icon-search`} />
          </SearchIcon>
        </SearchBtn>
        <CartBtn type="button">
          <CartIcon width={24} height={24}>
            <use href={`${Sprite}#icon-cart`} />
          </CartIcon>
        </CartBtn>
        <MenuBtn type="button" onClick={toggleMenu}>
          <MenuIcon width={24} height={24}>
            <use href={`${Sprite}#icon-burger-menu`} />
          </MenuIcon>
        </MenuBtn>
      </BtnWrapper>
      {isShowMenu && (<Modal closeModal={toggleMenu}><Navigation /></Modal>)}
    </HeaderWrapper>
  );
};
