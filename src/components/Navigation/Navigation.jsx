import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from 'components/Logo/Logo';
import { MobNavigationMenu } from './MobNavigationMenu';
import { NavigationMenu } from './NavigationMenu';
import { SearchBar } from '../SearchBar/SearchBar';
import { getCart } from 'redux/cart/operations';
import {
  selectIsRefreshing,
  selectTotalQunaity,
  selectCart,
} from 'redux/cart/selectors';
import { useMedia } from 'hooks/useMedia';
import Sprite from '../../images/sprite.svg';

import {
  NavContainer,
  BtnWrapper,
  MenuBtn,
  MenuIcon,
  CartWrapper,
  CartLink,
  CartIcon,
  TextContainer,
  CartIconWrapper,
  CartQuantityWrapper,
  TextCart,
  CartProductQuantity,
  ButtonContainer,
} from './Navigation.styled';

export const Navigation = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const isLoading = useSelector(selectIsRefreshing);
  const cartTotalQuantity = useSelector(selectTotalQunaity);
  const cart = useSelector(selectCart);

  const closeMobMenu = () => setIsShowMenu(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    try {
      dispatch(getCart());
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    setTotalQuantity(cartTotalQuantity);
    if (!isLoading && !cartTotalQuantity) {
      setTotalQuantity(0);
    }
  }, [cartTotalQuantity, isLoading, cart]);

  useEffect(() => {
    closeMobMenu();
  }, [location.pathname]);

  return (
    <NavContainer>
      <Logo closeMobMenu={closeMobMenu} />
      {!isMobileScreen && <NavigationMenu />}
      <BtnWrapper>
        <SearchBar />
        <CartWrapper>
          <CartLink to="/cart" state={{ from: location }}>
            <CartIconWrapper>
              <CartIcon>
                <use href={`${Sprite}#icon-cart`} />
              </CartIcon>
              <CartQuantityWrapper>
                <CartProductQuantity>{totalQuantity}</CartProductQuantity>
              </CartQuantityWrapper>
            </CartIconWrapper>
            {!isMobileScreen && (
              <TextContainer>
                <TextCart>Кошик</TextCart>
              </TextContainer>
            )}
          </CartLink>
        </CartWrapper>
        {isMobileScreen && (
          <ButtonContainer>
            <MenuBtn type="button" onClick={toggleMenu}>
              {isShowMenu ? (
                <MenuIcon>
                  <use href={`${Sprite}#icon-cross`} />
                </MenuIcon>
              ) : (
                <MenuIcon>
                  <use href={`${Sprite}#icon-burger-menu`} />
                </MenuIcon>
              )}
            </MenuBtn>
          </ButtonContainer>
        )}
      </BtnWrapper>
      {isMobileScreen && isShowMenu && (
        <MobNavigationMenu isMobile={true} closeMobMenu={closeMobMenu} />
      )}
    </NavContainer>
  );
};
