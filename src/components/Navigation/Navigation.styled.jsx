import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobNav = styled.nav`
  display: none;

  @media (max-width: 1439px) {
    position: absolute;
    width: 100%;
    top: 88px;
    right: 0px;
    display: flex;
    gap: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const MobNavList = styled.ul`
  @media (max-width: 1439px) {
    /* position: fixed; */
    padding-left: 20px;
    flex-direction: column;
  }
`;

export const MobNavLinkItem = styled.li`
  @media (max-width: 1439px) {
    /* padding-left: 40px; */
    /* width: 100%; */
    margin-top: 20px;
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  color: #4c4b4b;
  font-size: 16px;
  text-align: center;
  ${props =>
    props.type === 'footer' &&
    css`
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      @media (min-width: 1440px) {
        font-size: 18px;
      }
    `}
`;

export const Nav = styled.nav`
  ${props =>
    props.type === 'header' &&
    css`
      display: none;

      @media (min-width: 1440px) {
        display: inline-block;
      }
    `}

  ${props =>
    props.type === 'footer' &&
    css`
      margin-top: 37px;
      @media (min-width: 1440px) {
        margin-top: 0;
      }
    `}
`;

export const NavList = styled.nav`
  ${props =>
    props.type === 'header' &&
    css`
      display: flex;
      gap: 40px;
    `}

  ${props =>
    props.type === 'footer' &&
    css`
      display: flex;
      flex-direction: column;
      gap: 8px;

      @media (min-width: 1440px) {
        gap: 12px;
      }
    `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 14px;
  /* check margin-left when will be ready */
  /* margin-left: 230px; */
`;

export const MenuBtn = styled.button`
  padding: 0px;
  border: none;
  /* background-color: transparent; */
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

export const CartBtn = styled.button`
  padding: 0px;
  border: none;
  /* font-size: 0; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: transparent; */
  @media (min-width: 1440px) {
    font-weight: 400;
    font-size: 14px;
    line-height: normal;
    color: #191919;
  }
  @media (max-width: 1439px) {
    span {
      display: none;
    }
  }
`;

export const CartIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
  }
`;

export const SearchBtn = styled.button`
  padding: 0px;
  border: none;
  /* background-color: transparent; */
`;

export const SearchIcon = styled.svg`
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
