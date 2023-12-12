import { useState } from 'react';

import { Logo } from 'components/Logo/Logo';
import { MobNavigationMenu } from './MobNavigationMenu';
import { NavigationMenu } from './NavigationMenu';
import { SearchBar } from '../SearchBar/SearchBar';

import Sprite from '../../images/sprite.svg';

import {
  NavContainer,
  BtnWrapper,
  MenuBtn,
  MenuIcon,
  CartLink,
  CartIcon,
  TextContainer,
  CartIconWrapper,
  CartQuantityWrapper,
  TextCart,
  CartProductQuantity,
  ButtonContainer,
  SearchBtn,
  SearchIcon,
} from './Navigation.styled';

export const Navigation = ({ sectionType, toggleShowSearch }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const closeMobMenu = () => setIsShowMenu(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <NavContainer>
      <Logo />

      <NavigationMenu $sectionType={sectionType} />
      <BtnWrapper>
        <SearchBar />
        <SearchBtn type="button" onClick={toggleShowSearch}>
          <SearchIcon width={24} height={24}>
            <use href={`${Sprite}#icon-search`} />
          </SearchIcon>
        </SearchBtn>
        <CartLink to="/cart">
          <CartIconWrapper>
            <CartIcon width={24} height={24}>
              <use href={`${Sprite}#icon-cart`} />
            </CartIcon>
            <CartQuantityWrapper>
              <CartProductQuantity>0</CartProductQuantity>
            </CartQuantityWrapper>
          </CartIconWrapper>
          <TextContainer>
            <TextCart>Кошик</TextCart>
          </TextContainer>
        </CartLink>
        <ButtonContainer>
          <MenuBtn type="button" onClick={toggleMenu}>
            {isShowMenu ? (
              <MenuIcon width={24} height={24} style={{ fill: '#4c4b4b' }}>
                <use href={`${Sprite}#icon-cross`} />
              </MenuIcon>
            ) : (
              <MenuIcon width={24} height={24}>
                <use href={`${Sprite}#icon-burger-menu`} />
              </MenuIcon>
            )}
          </MenuBtn>
        </ButtonContainer>
      </BtnWrapper>
      {isShowMenu && (
        <MobNavigationMenu
          $sectionType={sectionType}
          isMobile={true}
          closeMobMenu={closeMobMenu}
        />
      )}
    </NavContainer>
  );
};
