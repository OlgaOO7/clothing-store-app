import { useState } from 'react';
import { MobNavigationMenu } from './MobNavigationMenu';
import { NavigationMenu } from './NavigationMenu';

import Sprite from '../../images/sprite.svg';


import {
  NavContainer,
  BtnWrapper,
  MenuBtn,
  MenuIcon,
  CartBtn,
  CartIcon,
  SearchBtn,
  SearchIcon,
} from './Navigation.styled';

export const Navigation = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <NavContainer>
      <NavigationMenu />

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

        {isShowMenu ? (<MenuBtn type="button" onClick={toggleMenu}>
          <MenuIcon width={24} height={24} style={{ fill: '#4C4B4B' }}>
            <use href={`${Sprite}#icon-cross`} />
          </MenuIcon>
        </MenuBtn>) : (<MenuBtn type="button" onClick={toggleMenu}>
          <MenuIcon width={24} height={24}>
            <use href={`${Sprite}#icon-burger-menu`} />
          </MenuIcon>
        </MenuBtn>)}
      </BtnWrapper>

      {isShowMenu && (<MobNavigationMenu />)}
    </NavContainer>
  );
};
