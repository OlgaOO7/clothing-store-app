import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const MobNavContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 88px;
  right: 0;
  background: #fff;
`;

export const NavWrapper = styled.div`
  padding: 32px 28px 22px;
`;

export const MobNav = styled.nav`
  display: none;

  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobNavList = styled.ul`
  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const MobNavLinkItem = styled.li`
  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  color: #4c4b4b;
  font-size: 16px;
  text-align: center;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    `}
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: inline-block;
      margin-top: 37px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    `}
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: flex;
      flex-direction: column;
      gap: 8px;

      @media (min-width: 768px) {
        gap: 12px;
      }
    `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  border: none;
  background-color: transparent;
`;

export const MenuIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CartIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
  }
`;

export const TextContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const CartIconWrapper = styled.div`
  display: flex;
  position: relative;
  margin-right: 4px;
`;

export const CartQuantityWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
`;

export const TextCart = styled.span`
  color: #191919;
  font-size: 14px;
  text-align: center;
`;

export const CartProductQuantity = styled.span`
  color: #191919;
  font-weight: 500;
  font-size: 12px;
`;

export const MobMenuContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 88px;
  right: 0;
  background: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBtn = styled.button`
  padding: 0px;
  width: 24px;
  height: 24px;
  margin-right: 14px;
  border: none;
  background-color: transparent;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SearchIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
    fill: #4c4b4b;
  }
`;
