import styled from 'styled-components';

export const Scroll = styled.button`
  width: 44px;
  height: 44px;
  background-color: #000000;
  position: fixed;
  right: 20px;
  top: 70%;
  z-index: 999;
  border: none;
  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;
export const ScrollIcon = styled.svg`
  width: 22px;
  height: 16px;
  position: absolute;
  top: 14px;
  left: 11px;
  @media (min-width: 768px) {
    width: 29px;
    height: 23px;
    top: 24px;
    left: 21px;
  }
`;
