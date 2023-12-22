import styled from 'styled-components';

export const Container = styled.div`
  padding: 116px 28px 61px;
  @media (min-width: 1024px) {
    padding: 162px 40px 152px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 37px;
  }
`;

export const ElipsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background: #d9d9d9;
  border-radius: 13px;
  border: none;

  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (min-width: 1024px) {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 18px;
    line-height: normal;
  }
`;

export const Title = styled.h3`
  color: #000;
  text-align: center;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  text-transform: uppercase;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: normal;
  }
`;
export const WrapRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    line-height: normal;
  }
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 1024px) {
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
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 6px;
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    width: 403px;
    height: 48px;

    font-size: 16px;
    line-height: normal;
  }
`;
export const WrapList = styled.div`
  position: absolute;
  top: 62px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 3px;
  z-index: 1;
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    width: 403px;
  }
`;

export const Item = styled.li`
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: normal;
  }
`;
export const Message = styled.p`
  color: ${p => (p.$error ? 'red' : 'black')};
`;
