import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-right: 24px;
  @media screen and (min-width: 768px) and (max-width: 999.9px) {
    margin-right: 25px;
  }
  @media (min-width: 1000px) {
    margin-right: 29px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    padding-bottom: 1px;
  }
`;

export const SearchBtn = styled.button`
  padding-top: 2.5px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    padding: 0px;
  }
`;

export const SearchCloseBtn = styled.div`
  padding: 0px;
  margin-right: 16px;
  border: none;
`;

export const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${p => (p.type ? '#fff' : '#160b03')};
  &:hover,
  &:focus {
    fill: ${p => (p.type ? '#fff' : '#9d9a97')};
  }
`;

export const SearchInputListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 1100;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(177, 177, 177, 0.2) 0px 6px 18px 0px;
`;

export const SearchListWrapper = styled.div`
  padding: 15px 12px 8px;
  color: #4c4b4b;
  @media (min-width: 1440px) {
    width: 299px;
  }
`;

export const SearchInput = styled.input`
  padding: 3px 0;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22.4px;
  }
`;

export const SearchCloseIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
  }
`;

export const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  gap: 8px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const SearchItem = styled.li`
  display: flex;
  background-color: ${p => (p.$even ? '#e3e0de' : 'transparent')};
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px 16px;
  background: #160b03;

  @media (min-width: 768px) {
    padding: 9px 46px;
  }
`;

export const ProductsLink = styled(Link)`
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20.8px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 22.4px;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1002;
  top: -8px;
  right: -124px;
  display: flex;
  justify-content: center;
  width: 100vw;

  @media (min-width: 768px) {
    top: 3rem;
    right: 0;
    width: inherit;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    width: 323px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 14px 28px;
  background: #3f3831;
  border-radius: 2px 2px 0px 0px;
  @media (min-width: 768px) {
    padding: 14px 16px;
  }
`;

export const InfoText = styled.p`
  color: #3f3831;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
`;
