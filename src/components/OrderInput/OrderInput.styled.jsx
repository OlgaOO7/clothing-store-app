import styled from 'styled-components';

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;
export const WrapRadioInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 8px;
  }
`;
export const WrapCheckboxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (min-width: 768px) {
    gap: 6px;
  }
`;
export const LabelStyle = styled.label`
  color: #000;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
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
  border-color: ${p => p.$errors && 'red'};
  &:focus {
    outline: none;
    border: 2px solid #000;
  }
  &::placeholder {
    color: ${p => p.$errors && 'red'};
  }
  @media (min-width: 768px) {
    width: 403px;
    height: 48px;
    font-size: 16px;
    line-height: normal;
  }
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.$errors && 'red'};
  @media (min-width: 768px) {
    gap: 12px;
    font-size: 16px;
    line-height: 22px;
  }
`;
export const CheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #00000066;
  color: ${p => p.$errors && 'red'};
  @media (min-width: 768px) {
    gap: 12px;
    font-size: 16px;
    line-height: 22px;
  }
`;
