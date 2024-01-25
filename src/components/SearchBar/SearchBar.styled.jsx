import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-right: 14px;
  @media (min-width: 768px) {
    margin-right: 29px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  /* display: none;
  @media (min-width: 1440px) {
    display: flex; */
  /* justify-content: center;
    align-items: center; */
  /* } */
`;

export const SearchMobWrapper = styled.div`
  position: absolute;
  z-index: 2000;
  width: 100%;
  top: 0;
  /* top: 3rem; */
  right: 1px;
  transition: top 0.3s ease;
  /* display: flex; */
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  /* box-sizing: border-box; */
  /* width: 100vw; */
  /* @media (min-width: 1440px) {
    display: none;
  } */
`;

export const MobSearchWrapper = styled.div`
  /* display: flex;
  @media (min-width: 1440px) {
    display: none;
  } */
`;

export const SearchBtn = styled.button`
  padding: 0px;
  width: 24px;
  height: 24px;
  /* margin-right: 16px; */
  border: none;
  background-color: transparent;
  /* @media (min-width: 1440px) {
    margin-right: 16px;
  } */
`;

export const SearchCloseBtn = styled.div`
  padding: 0px;
  margin-right: 16px;
  border: none;
  /* background-color: transparent; */
`;

export const SearchIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
    /* fill: #160b03; */
    fill: ${p => (p.type ? '#fff' : '#3f3831')};
    &:hover,
    &:focus {
      fill: ${p => (p.type ? '#fff' : '#3f3831')};
    }
    /* ${props =>
      props.type === 'input' &&
      css`
        fill: #fff;
      `} */
  }
`;

export const SearchInputListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 1100;
  background-color: #fff;
  width: 100%;
`;

export const SearchListWrapper = styled.div`
  padding: 15px 12px 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #4c4b4b;
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
  /* @media (max-width: 1439px) {
    width: 100%;
  } */
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
  font-size: 16px;
  line-height: 140%;
  /* 
  ${props =>
    props.type === 'search' &&
    css`
      width: 100%;
    `} */
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
  /* position: absolute; */
  /* width: 299px; */
  /* z-index: 1004; */
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
  font-size: 16px;
  line-height: 130%;
  text-align: center;

  @media (min-width: 768px) {
    line-height: 140%;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1002;
  top: 3rem;
  right: 0;
  display: flex;
  justify-content: center;
  /* width: 287px; */

  ${props =>
    props.type === 'search' &&
    css`
      top: -8px;
      right: 0;
      /* box-sizing: border-box; */
      /* width: 100vw; */
      width: 100%;
      /* flex: 1; */
    `}
`;

export const FormContainer = styled.div`
  position: relative;
  /* width: 323px; */
  width: 100%;

  @media (min-width: 768px) {
    width: 323px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: #3f3831;
  border-radius: 2px 2px 0px 0px;
  ${props =>
    props.type === 'search' &&
    css`
      /* width: 100vw; */
    `}
`;

export const InfoText = styled.p`
  color: #3f3831;
  font-size: 16px;
  line-height: 140%;

  @media (min-width: 768px) {
    line-height: 130%;
  }
`;
