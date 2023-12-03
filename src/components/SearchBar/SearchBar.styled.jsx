import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-right: 14px;
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
`

export const SearchBtn = styled.button`
  padding: 0px;
  width: 24px;
  height: 24px;
  /* margin-right: 16px; */
  border: none;
  background-color: transparent;
  @media (min-width: 1440px) {
    margin-right: 16px;
  }
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
  }
`;

export const SearchInputListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 999;
`;

export const SearchListWrapper = styled.div`
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const SearchCloseIcon = styled.svg`
  @media screen and (min-width: 360px) {
    width: 24px;
    height: 24px;
  }
`;

export const SearchList = styled.ul`
  
`;

export const SearchItem = styled.li`
  
`;