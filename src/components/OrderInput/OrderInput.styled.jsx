import styled, { css } from 'styled-components';
import { InputMask } from 'primereact/inputmask';

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  color: #160b03;
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 7.5px 16px;
  border: 1px solid #160b03;
  border-radius: 1px;
  color: #160b03;
  font-size: 14px;
  line-height: 20px;
  border-color: ${p => p.$errors && 'red'};
  &:focus {
    outline: none;
    border: 2px solid #7c7d80;
  }
  &::placeholder {
    color: #9d9a97;
    color: ${p => p.$errors && 'red'};
  }
  @media (min-width: 768px) {
    max-width: 408px;
    padding: 13px 16px;
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Input = styled.input`
  ${props =>
    (props.type === 'radio' || props.type === 'checkbox') &&
    css`
      accent-color: #160b03;
    `}
`;
export const InputMaskStyle = styled(InputMask)`
box-sizing: border-box;
display: flex;
width: 100%;
padding: 8.5px 16px;
border: 1px solid #000;
border-radius: 1px;
color: #000;
font-size: 14px;
line-height: 140%;
border-color: ${p => p.$errors && 'red'};
&:focus {
  outline: none;
  border: 2px solid #7c7d80;
}
&::placeholder {
  color: ${p => p.$errors && 'red'};
}
@media (min-width: 768px) {
  max-width: 408px;
  padding: 13px 16px;
  &::placeholder {
    font-size: 14px;
    line-height: 20px;
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
  color: #9d9a97;
  color: ${p => p.$errors && 'red'};
  @media (min-width: 768px) {
    gap: 12px;
    font-size: 16px;
    line-height: 22px;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
