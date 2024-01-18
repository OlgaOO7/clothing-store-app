import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from 'components/Logo/Logo';
import { MobNavigationMenu } from './MobNavigationMenu';
import { NavigationMenu } from './NavigationMenu';
import { SearchBar } from '../SearchBar/SearchBar';
import { getCart } from 'redux/cart/operations';
import { selectTotalQunaity } from 'redux/cart/selectors';
// import { selectIsRefreshing, selectTotalQunaity } from 'redux/cart/selectors';

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
import { useLocation } from 'react-router';
// import { Loader } from 'components/Loader/Loader';

export const Navigation = ({ sectionType, toggleShowSearch }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(null);

  // const isLoading = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector(selectTotalQunaity);
  const location = useLocation();

  const previousCartTotalQuantity = useRef(cartTotalQuantity);

  // useEffect(() => {
  //   try {
  //     // dispatch(getCart());
  //     dispatch(getCart()).then(action => {
  //       if (
  //         action.payload.totalQuantity !== undefined &&
  //         action.payload.totalQuantity !== null
  //       ) {
  //         setTotalQuantity(action.payload.totalQuantity);
  //       } else {
  //         setTotalQuantity(0);
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }, [dispatch]);

  useEffect(() => {
    try {
      dispatch(getCart());
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {
    // if (cartTotalQuantity !== undefined && cartTotalQuantity !== null) {
    //   setTotalQuantity(cartTotalQuantity || 0);
    // } else {
    //   setTotalQuantity(0);
    // }
    if (cartTotalQuantity !== previousCartTotalQuantity.current) {
      setTotalQuantity(cartTotalQuantity);
      previousCartTotalQuantity.current = cartTotalQuantity;
    }
  }, [cartTotalQuantity]);

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
        <CartLink to="/cart" state={{ from: location }}>
          <CartIconWrapper>
            <CartIcon width={24} height={24}>
              <use href={`${Sprite}#icon-cart`} />
            </CartIcon>
            <CartQuantityWrapper>
              {totalQuantity !== null && (
                <CartProductQuantity>{totalQuantity}</CartProductQuantity>
              )}
              {/* 
              {isLoading ? (
                <Loader type="small" />
              ) : (
                <CartProductQuantity>
                  {cartTotalQuantity || totalQuantity}
                </CartProductQuantity>
              )} */}
              {/* <CartProductQuantity>
                {cartTotalQuantity || totalQuantity}
              </CartProductQuantity> */}
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
