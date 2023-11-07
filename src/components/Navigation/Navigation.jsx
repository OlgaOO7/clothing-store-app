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
  // SearchBtn,
  // SearchIcon,
} from './Navigation.styled';

export const Navigation = () => {
// export const Navigation = ({searchQuery, setSearchQuery}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const closeMobMenu = () => setIsShowMenu(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <NavContainer>
      <NavigationMenu />

      <BtnWrapper>
        {/* <SearchBar searchQuery={searchQuery}  setSearchQuery={setSearchQuery} /> */}
        <SearchBar />
        {/* <div>
          <SearchBtn type="button">
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          </SearchBtn>
        </div> */}

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
