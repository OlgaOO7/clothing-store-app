import styled from 'styled-components';

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
    background-color: green;
  }
`;

export const MobNavList = styled.ul`
  @media (max-width: 1439px) {
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

export const Nav = styled.nav`
  display: none;
  background-color: blue;

  @media (min-width: 1440px) {
    display: inline-block;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 40px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-left: 230px;
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
  /* background-color: transparent; */
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
