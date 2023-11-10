import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 78px;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 1440px) {
    gap: 112px;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 26px 15px;

  @media (min-width: 1440px) {
    gap: 58px 24px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  @media (min-width: 1440px) {
    gap: 24px;
  }
`;
export const ListOfButtons = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
  @media (min-width: 1440px) {
    gap: 34px;
  }
`;
export const Button = styled.button`
  font-family: Gill Sans;
  font-size: 14px;
  line-height: 16px;
  color: #4c4b4b;

  border: none;
  background-color: transparent;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const ButtonGray = styled.button`
  font-family: Gill Sans;
  font-size: 14px;
  line-height: 16px;
  color: #939393;

  border: none;
  background-color: transparent;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const Icon = styled.svg`
  width: 11px;
  height: 10px;
`;
