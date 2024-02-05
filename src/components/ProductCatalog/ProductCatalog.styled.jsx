import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 26px 0 65px;
  @media (min-width: 768px) {
    padding: 26px 0 81px;
  }
`;
export const NavSection = styled.section`
  width: 100%;
  padding: 105px 0 26px;
  @media (min-width: 768px) {
    padding: 155px 0 46px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;
  padding: 0 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding: 0 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 78px;
  padding: 0 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 112px;
    max-width: 1360px;
    padding: 0 40px;
  }
`;
export const LinkTo = styled(Link)`
  font-size: 18px;
  line-height: 21px;
  color: #160b03;
  transition: all 150ms ease-out;
  &:hover,
  &:focus {
    color: #9d9a97;
  }
  &:last-child {
    color: #9d9a97;
  }

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px 16px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 42px 24px;
  }
`;
export const ListItem = styled.li`
  width: 144px;
  @media (min-width: 768px) {
    width: 322px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;
export const Button = styled.button`
  font-size: 14px;
  line-height: 16px;
  color: #4c4b4b;

  border: none;
  background-color: transparent;

  ${props =>
    props.disabled &&
    css`
      display: none;
    `}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
export const Message = styled.p`
  color: #160b03;
  text-align: center;
  font-size: 20px;
  line-height: 140%;
`;

export const SearchWord = styled.span`
  color: #3f3831;
  font-weight: 600;
`;
