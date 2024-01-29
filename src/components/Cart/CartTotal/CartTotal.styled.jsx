import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartTotalWrapper = styled.div`
  padding: 21px 70px 42px;
  margin-top: 115px;
  margin-left: auto;
  background-color: #f0f0f0;
  @media (min-width: 768px) {
    width: max-content;
    padding: 48px 60px 50px;
    margin-top: 36px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 31px;
  color: #160b03;
  font-size: 14px;
  @media (min-width: 768px) {
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
  color: #160b03;
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
  background-color: #160b03;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #160b03;
  border-radius: 1px;
  @media (min-width: 768px) {
    padding: 16px 64px;
    font-size: 22px;
  }
`;

export const CatalogLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #160b03;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #160b03;
  border-radius: 1px;
  @media (min-width: 768px) {
    padding: 16px 64px;
    font-size: 22px;
  }
`;
