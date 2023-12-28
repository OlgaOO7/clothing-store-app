import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    padding-bottom: 21px;
    border-bottom: 1px solid #e1e1e1;
  }
  @media (min-width: 768px) {
    padding: 0;
    &:not(:last-child) {
      border: none;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const OrderImage = styled.img`
  width: 44px;
  max-height: 50px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 161px;
    max-height: 208px;
    margin-right: 27px;
  }
`;
export const OrderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 128px;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const OrderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const OrderTitle = styled.h3`
  font-family: Gill Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  height: max-content;
  @media (min-width: 768px) {
    font-family: Gill Sans;
    font-size: 32px;
    line-height: 45px;
  }
`;
export const OrderDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
  }
`;
export const OrderText = styled.p`
  font-size: 12px;
  line-height: 17px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    color: #4c4b4b;
  }
`;
export const OrderPrice = styled.p`
  font-family: Inter;
  font-size: 12px;
  line-height: 17px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
export const OrderColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  background: ${p => p.$color && p.$color};
`;
