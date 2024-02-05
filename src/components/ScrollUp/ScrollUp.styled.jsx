import styled from 'styled-components';

export const Scroll = styled.button`
  width: 35px;
  height: 35px;
  background-color: #000000;
  position: fixed;
  right: 20px;
  top: 90%;
  z-index: 999;
  border: none;
  transition: opacity 150ms ease-out;
  opacity: ${props => (props.$isvisible ? '10' : '0')};
  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;
export const ScrollIcon = styled.svg`
  width: 13px;
  height: 12px;
  position: absolute;
  top: 12px;
  left: 11px;
  @media (min-width: 768px) {
    width: 29px;
    height: 23px;
    top: 24px;
    left: 21px;
  }
`;
