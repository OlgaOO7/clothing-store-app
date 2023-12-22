import styled from 'styled-components';

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;
export const LabelStyle = styled.label`
  color: #000;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: normal;
  }
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 304px;
  height: 37px;
  padding: 10px 16px;
  border: 1px solid #000;
  color: #000;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  &:focus {
    outline: none;
    border: 2px solid #000;
  }
  &::placeholder {
    color: ${p => p.$error && 'red'};
  }
  @media (min-width: 768px) {
    width: 403px;
    height: 48px;
    font-size: 16px;
    line-height: normal;
  }
`;
