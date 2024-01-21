import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartTotalWrapper = styled.div`
  width: max-content;
  padding: 30px 40px;
  margin-top: 115px;
  margin-left: auto;
  background-color: #f0f0f0;
  @media (min-width: 768px) {
    padding: 84px 104px;
    margin-top: 36px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 31px;
  color: #757575;
  font-size: 14px;
  @media (min-width: 768px) {
    color: #000;
    font-size: 18px;
  }
`;

export const TariffText = styled.p`
  text-align: right;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 61px;
  color: #000;
  font-size: 18px;
  font-weight: 600px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const LinkBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const OrderLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #0e0e0e;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #191919;
  @media (min-width: 768px) {
    padding: 16px 64px;
    font-size: 22px;
  }
`;

export const CatalogLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #191919;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #191919;
  @media (min-width: 768px) {
    padding: 16px 64px;
    font-size: 22px;
  }
`;
