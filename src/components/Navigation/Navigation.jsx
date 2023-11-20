import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  // CartBtn,
  CartIcon,
  TextContainer
} from './Navigation.styled';

export const Navigation = ({type}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const closeMobMenu = () => setIsShowMenu(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <NavContainer>
      <Logo />
      <NavigationMenu type={type} />

      <BtnWrapper>
        <SearchBar />


          <Link to="/cart"  style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', position: 'relative', marginRight: '4px' }}>
              <CartIcon width={24} height={24}>
                <use href={`${Sprite}#icon-cart`} />
              </CartIcon>
              <div
                style={{
                  position: 'absolute',
                  top: '-0.48rem',
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 500,
                  fontSize: '12px',
                }}
              >
                <span style={{color: '#191919'}}>0</span>
              </div>
            </div>
            <TextContainer>
              <span style={{color: '#191919'}}>Кошик</span>
            </TextContainer>
          </Link>

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
