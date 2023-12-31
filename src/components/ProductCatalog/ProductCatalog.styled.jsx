import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 32px 0 65px;
  @media (min-width: 768px) {
    padding: 40px 0 81px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;
  padding: 105px 28px 28px;
  margin: 0;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding: 155px 40px 69px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 78px;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 26px 15px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 58px 24px;
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
  font-family: Gill Sans;
  font-size: 14px;
  line-height: 16px;
  color: #4c4b4b;

  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const Icon = styled.svg`
  width: 11px;
  height: 10px;
`;
export const Message = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const SearchWord = styled.span`
  color: grey;
  font-weight: 600;
`;
