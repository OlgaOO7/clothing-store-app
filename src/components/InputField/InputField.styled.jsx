import styled from 'styled-components';

export const Input = styled.input`
  font-size: 12px;
  line-height: 14px;
  padding: 12px 16px;
  border: 1px solid #000000;
  width: -webkit-fill-available;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
    padding: 16px;
  }
`;
export const Textarea = styled.textarea`
  font-size: 12px;
  line-height: 14px;
  padding: 19px 16px;
  border: 1px solid #000000;
  height: 156px;
  resize: none;
  width: -webkit-fill-available;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
    padding: 18px 16px;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  bottom: -17px;
  left: 0;
`;
export const Counter = styled.div`
  color: #888;
  font-size: 12px;
  position: absolute;
  bottom: -15px;
  right: 0;
`;
