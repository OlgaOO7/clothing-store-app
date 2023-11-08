// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
// import { Modal } from 'components/Modal/Modal'
import { Navigation } from 'components/Navigation/Navigation';

// import Sprite from '../../images/sprite.svg';

import {
  HeaderWrapper,
  // BtnWrapper,
  // MenuBtn,
  // MenuIcon,
  // CartBtn,
  // CartIcon,
  // SearchBtn,
  // SearchIcon,
} from './Header.styled';
import React from 'react';

export const Header = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const location = useLocation();

  // useEffect(() => {
  //   // Reset the search input when the location changes
  //   setSearchQuery('');
  // }, [location]);

  // const [isShowMenu, setIsShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setIsShowMenu(!isShowMenu);
  // };

  return (
    <HeaderWrapper>
      <Logo />
      {/* <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      <Navigation />

      {/* <BtnWrapper>
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
      </BtnWrapper> */}
    </HeaderWrapper>
  );
};
