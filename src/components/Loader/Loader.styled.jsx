import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderSpin = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border: 5px solid #fff;
  border-top: 5px solid #000;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
  margin-top: 15px;

  ${props =>
    props.type === 'small' &&
    css`
      margin: 20px auto 20px;
      width: 20px;
      height: 20px;
      border: 3px solid #fff;
      border-top: 3px solid #000;
    `}
`;
