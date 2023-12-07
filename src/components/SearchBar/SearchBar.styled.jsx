import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-right: 14px;
  @media (min-width: 1440px) {
    margin-right: 29px;
  }
`;

export const SearchWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    /* justify-content: center;
    align-items: center; */
  }
`;

export const SearchMobWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const MobSearchWrapper = styled.div`
  display: flex;
  @media (min-width: 1440px) {
    display: none;
  }
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
    fill: #4c4b4b;
  }
`;

export const SearchInputListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 1100;
  background-color: #fff;
`;

export const SearchListWrapper = styled.div`
  width: 299px;
  padding: 10px 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #4c4b4b;
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
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
  gap: 8px;
  margin-bottom: 3px;
`;

export const SearchItem = styled.li``;

export const LinkWrapper = styled.div`
  /* position: absolute; */
  /* width: 299px; */
  /* z-index: 1004; */
  display: flex;
  justify-content: center;
  padding: 10px 12px;
  background: black;
`;

export const ProductsLink = styled(Link)`
  font-size: 16px;
  color: #fff;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1002;
  top: 3rem;
  right: 0;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 287px;
  padding: 10px 18px;
  background: #292929;
  border-radius: 2px 2px 0px 0px;
`;
