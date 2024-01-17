import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartModalHeader = styled.p`
  background-color: #9d9d9d;
  padding: 7px 25px;
  color: #000000;
  font-size: 14px;
  line-height: 140%;
  @media (min-width: 768px) {
    padding: 10px 38px;
    font-size: 16px;
  }
`;

export const CartModalWrapper = styled.div`
  padding: 11px 25px 38px 25px;
  @media (min-width: 768px) {
    padding: 8px 38px 42px;
  }
`;

export const CartModalListWrapper = styled.div`
  padding-bottom: 11px;
  border-bottom: 1px solid #c6c6c6;
  @media (min-width: 768px) {
    padding-bottom: 8px;
  }
`;

export const CartModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 247px;
  padding-bottom: 11px;
  overflow-y: auto;
  @media (min-width: 768px) {
    gap: 18px;
    max-height: 377px;
    padding-bottom: 8px;
  }
  /* -webkit-overflow-scrolling: touch; */

  /* IE and Edge: */
  -ms-overflow-style: none;
  &::-ms-scrollbar-thumb {
    background-color: #888;
  }
  &::-ms-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* FireFox: */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  scroll-behavior: smooth;

  /* Chrome and Safari: */
  &::-webkit-scrollbar {
    width: 3px;
    @media (min-width: 768px) {
      width: 6px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 6px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const OrderLink = styled(Link)`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  color: #fff;
  background-color: #0e0e0e;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  border: 1px solid #191919;
  @media (min-width: 768px) {
    padding: 9px 28px;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const CatalogLink = styled(Link)`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  border: 1px solid #191919;
  @media (min-width: 768px) {
    padding: 9px 28px;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const CartTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: max-content; */
  /* gap: 71px; */
  padding: 24px 28.5px 0px;
  @media (min-width: 768px) {
    padding: 32px 64px 0px;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 71px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
    gap: 101px;
  }
`;

export const TotalAmount = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 140%;
  }
`;

export const Amount = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  text-align: right;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 140%;
  }
`;
