import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 76px;
  right: 20px;
  width: 100%;
  height: 100%;
  z-index: 1002;
  /* overflow: auto; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  @media (min-width: 768px) {
    top: 87px;
    right: 40px;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  right: 10px;
  background-color: #fff;
  width: 296px;
  box-shadow: rgba(177, 177, 177, 0.2) 0px 6px 18px 0px;
  @media (min-width: 768px) {
    width: 437px;
    right: 10px;
  }
`;

// export const ModalCloseBtn = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0;
//   padding: 0;
//   border: none;
//   background-color: transparent;
//   @media (min-width: 768px) {
//     top: 9px;
//   }
// `;

// export const CloseIcon = styled.svg`
//   fill: #eee;
// `;
