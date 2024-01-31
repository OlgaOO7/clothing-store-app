import styled from 'styled-components';

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 26px;
  }
`;

export const WrapRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`;

export const ElipsRadio = styled.div`
  width: 8px;
  height: 8px;
  background: #160b03;
  border-radius: 4px;
  border: none;
  @media (min-width: 768px) {
    background: #3f3831;
  }
`;
export const NameRadio = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 408px;
  @media (min-width: 768px) {
    gap: 16px;
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
    color: #160b03;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${p => (p.$error ? '#F24040' : '#000')};
  color: #000;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: none;
    border: 2px solid #7c7d80;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: ${p => (p.$error ? '#F24040' : '#9D9A97')};
  }
  @media (min-width: 768px) {
    color: #160b03;
    border: 1px solid ${p => (p.$error ? '#F24040' : '#160b03')};
    max-width: 408px;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 22px;
  }
`;
export const WrapList = styled.div`
  position: absolute;
  top: 79px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 3px;
  z-index: 1;
  width: 100%;
  @media (min-width: 768px) {
    top: 89px;
    max-width: 408px;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 336px;

  border: 1px solid #000;
`;

export const Item = styled.li`
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  border-bottom: 1px solid #160b03;

  width: 100%;
  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: normal;
  }
`;

export const Text = styled.p`
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
  padding: 10px 16px;
  &:hover {
    background: #3f3831;
    color: #fff;
  }
  @media (min-width: 768px) {
  }
`;
export const Message = styled.p`
  padding: 10px 16px;
  color: ${p => (p.$error ? '#F24040' : 'black')};
`;

export const Icon = styled.svg`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    right: 24px;
    top: 21px;
    display: inline-block;
    fill: transparent;
    stroke-width: 1px;
    stroke: #160b03;
    flex-shrink: 0;
    width: 12px;
    height: 6px;
  }
`;
