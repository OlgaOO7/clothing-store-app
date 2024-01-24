import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 15px;
  &:not(:last-child) {
    padding-bottom: 18px;
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
  margin-right: 10px;
  @media (min-width: 768px) {
    width: 161px;
    max-height: 208px;
    margin-right: 42px;
  }
`;
export const OrderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 6px;
    flex-direction: column;
  }
`;
export const OrderTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 768px) {
    margin-bottom: 6px;
    font-size: 26px;
    line-height: 36px;
  }
`;
export const OrderDescription = styled.div`
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
export const OrderText = styled.p`
  font-size: 12px;
  line-height: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    color: #4c4b4b;
  }
`;
export const OrderPrice = styled.p`
z
  font-size: 12px;
  line-height: 17px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
export const OrderError = styled.div`
  background: #f4efeb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const OrderErrorText = styled.p`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
