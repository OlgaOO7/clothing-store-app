import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-sizing: border-box; */
`;

export const MobNavContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 86px;
  right: 0;
  background: #fff;
`;

export const NavWrapper = styled.div`
  padding: 38px 38px 54px;
  overflow: auto;
`;

export const MobNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MobNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MobNavLinkItem = styled.li`
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #160b03;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-weight: 400px;
  line-height: 20.6px;
  &:hover {
    color: #9d9a97;
  }
  @media screen and (min-width: 768px) and (max-width: 999.9px) {
    font-size: 14px;
  }

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      color: #160b03;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      &:hover {
        color: #9d9a97;
      }
      @media (min-width: 768px) {
        font-size: 16px;
      }
    `}
`;

export const Nav = styled.nav`
  display: flex;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: inline-block;
      margin-top: 36px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    `};
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (min-width: 768px) and (max-width: 999.9px) {
    gap: 18px;
  }

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: flex;
      flex-direction: column;
      gap: 12px;
    `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const MenuBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 2px 0px 0px;
  border: none;
  background-color: transparent;
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #160b03;
  &:hover,
  &:focus {
    fill: #9d9a97;
  }
`;

export const TextContainer = styled.div`
  padding-top: 8px;
`;

export const CartIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
    fill: #160b03;
  }
`;

export const TextCart = styled.span`
  color: #160b03;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  @media screen and (min-width: 768px) and (max-width: 999.9px) {
    font-size: 14px;
  }
`;

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${TextCart}, ${CartIcon} {
      color: #9d9a97;
      fill: #9d9a97;
    }
  }
`;

export const CartWrapper = styled.div`
  margin-right: 24px;
  @media (min-width: 768px) {
    margin-right: 0;
  }
`;

export const CartIconWrapper = styled.div`
  display: flex;
  position: relative;
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const CartQuantityWrapper = styled.div`
  position: absolute;
  top: 3px;
  left: 9px;
  width: 14px;
  height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f4efeb;
  font-weight: 500;
  font-size: 12px;
`;

export const CartProductQuantity = styled.span`
  display: flex;
  align-items: center;
  left: 1px;
  color: #160b03;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.6px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBtn = styled.button`
  padding: 2px 0px 0px;
  width: 24px;
  height: 24px;
  margin-right: 24px;
  border: none;
  background-color: transparent;
`;

export const SearchIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
    fill: #160b03;
    &:hover,
    &:focus {
      fill: #9d9a97;
    }
  }
`;
