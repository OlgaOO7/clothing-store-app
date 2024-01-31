import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;

  padding: 36px 31px 32px 32px;
  min-width: 360px;
  min-height: 262px;
  text-align: center;
  box-sizing: border-box;
  @media (min-width: 1440px) {
    padding: 98px 160px 76px 160px;
    width: 1130px;
    height: 612px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    top: 32px;
    right: 32px;
  }
`;

export const IconClose = styled.svg`
  stroke-width: 2px;
  width: 24px;
  height: 24px;
`;
