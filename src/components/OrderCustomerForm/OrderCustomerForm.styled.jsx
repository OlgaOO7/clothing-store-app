import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 1024px) {
    gap: 9px;
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
