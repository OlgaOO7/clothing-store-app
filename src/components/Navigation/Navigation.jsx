import { useState } from 'react';
import { MobNavigationMenu } from './MobNavigationMenu';
import { NavigationMenu } from './NavigationMenu';
import { SearchBar } from '../SearchBar/SearchBar';

import Sprite from '../../images/sprite.svg';

import {
  NavContainer,
  BtnWrapper,
  MenuBtn,
  MenuIcon,
  CartBtn,
  CartIcon,
} from './Navigation.styled';

export const Navigation = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const closeMobMenu = () => setIsShowMenu(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <NavContainer>
      <NavigationMenu />

      <BtnWrapper>
        <SearchBar />
        <div style={{ display: 'flex' }}>
          <CartBtn type="button">
            <CartIcon width={24} height={24}>
              <use href={`${Sprite}#icon-cart`} />
            </CartIcon>
            <span>Кошик</span>
          </CartBtn>
        </div>

        <MenuBtn type="button" onClick={toggleMenu}>
          {isShowMenu ? (
            <MenuIcon width={24} height={24} style={{ fill: '#4C4B4B' }}>
              <use href={`${Sprite}#icon-cross`} />
            </MenuIcon>
          ) : (
            <MenuIcon width={24} height={24}>
              <use href={`${Sprite}#icon-burger-menu`} />
            </MenuIcon>
          )}
        </MenuBtn>
      </BtnWrapper>

      {isShowMenu && (
        <MobNavigationMenu isMobile={true} closeMobMenu={closeMobMenu} />
      )}
    </NavContainer>
  );
};
