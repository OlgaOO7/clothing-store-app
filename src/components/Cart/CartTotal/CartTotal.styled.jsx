import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartTotalWrapper = styled.div`
  box-sizing: content-box;
  padding: 32px 70px 42px;
  margin-left: auto;
  background-color: #f0f0f0;
  @media (min-width: 768px) {
    width: max-content;
    padding: 48px 60px 50px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 31px;
  color: #160b03;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TariffText = styled.p`
  text-align: right;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  color: #160b03;
  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const TotalText = styled.p`
  font-size: 18px;
  font-weight: 400px;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 140%;
  }
`;

export const LinkBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
    width: max-content;
  }
`;

export const OrderLink = styled(Link)`
  padding: 16px 7px;
  border: 1px solid #160b03;
  border-radius: 1px;
  color: #fff;
  background-color: #160b03;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
  @media (min-width: 768px) {
    padding: 9px 46px;
    line-height: 140%;
  }
  &:hover,
  focus {
    background-color: #3f3831;
    border-color: #3f3831;
  }
`;

export const CatalogLink = styled(Link)`
  padding: 10px 12px;
  border: 1px solid #160b03;
  border-radius: 1px;
  color: #160b03;
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
  @media (min-width: 768px) {
    padding: 9px 46px;
    line-height: 140%;
  }
  &:hover,
  focus {
    color: #fff;
    background-color: #160b03;
    border-color: #160b03;
  }
`;
