import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImageProduct = styled.img`
  width: 72px;
  height: 94px;
  @media (min-width: 768px) {
    width: 108px;
    height: 140px;
  }
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16p;
  width: max-content;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 140%;
  }
`;

export const ItemPrice = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ItemDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`;

export const DeleteIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #160b03;
  &:hover,
  &:focus {
    fill: #3f3831;
  }
`;
