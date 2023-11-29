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
  ButtonContainer
} from './Navigation.styled';

export const Navigation = ({ sectionType }) => {
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
              <MenuIcon width={24} height={24}>
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
