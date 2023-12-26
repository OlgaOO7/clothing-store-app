import styled from 'styled-components';

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 37px;
  }
`;

export const WrapRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    gap: 11px;
    margin-bottom: 25px;
  }
`;

export const ElipsRadio = styled.div`
  width: 12px;
  height: 12px;
  background: #d9d9d9;
  border-radius: 6px;
  border: none;
`;
export const NameRadio = styled.p`
  color: #000;
  text-align: center;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 768px) {
    line-height: normal;
  }
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const WrapInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const LabelStyle = styled.label`
  color: #000;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid #000;
  color: #000;
  font-size: 14px;
  line-height: 20px;
  border-color: ${p => p.$error && 'red'};
  &:focus {
    outline: none;
    border: 2px solid #000;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: ${p => p.$errors && 'red'};
  }
  @media (min-width: 768px) {
    max-width: 403px;
    padding: 13px 16px;
    font-size: 16px;
    line-height: 22px;
  }
`;
export const WrapList = styled.div`
  position: absolute;
  top: 62px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 3px;
  z-index: 1;
  @media (min-width: 768px) {
    top: 72px;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 304px;
  padding: 10px 16px;
  min-height: 100px;
  max-height: 200px;
  gap: 10px;
  border: 1px solid #000;
  @media (min-width: 768px) {
    width: 403px;
  }
`;

export const Item = styled.li`
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

export const Text = styled.p`
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: normal;
  }
`;
export const Message = styled.p`
  color: ${p => (p.$error ? 'red' : 'black')};
`;
