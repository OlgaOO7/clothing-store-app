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

  padding: 36px 28px 34px;
  min-width: 360px;
  min-height: 262px;
  text-align: center;
  box-sizing: border-box;
  @media (min-width: 1439px) {
    padding: 99px 138px 80px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: -24px;
  right: 28px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    top: -20px;
    right: -20px;
  }
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;
