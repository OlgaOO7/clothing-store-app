import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: 377px;
  padding-bottom: 8px;
  overflow-y: auto;
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

export const ImageProduct = styled.img`
  width: 108px;
  height: 140px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
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
  line-height: 22.4px;
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.2px;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px;
`;

export const ItemDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-color: transparent;
  border: none;
`;

export const DeleteIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 176px;
`;

export const OrderLink = styled(Link)`
  display: flex;
  width: 176px;
  padding: 9px 28px;
  justify-content: center;
  color: #fff;
  background-color: #0e0e0e;
  font-size: 18px;
  border: 1px solid #191919;
`;

export const CatalogLink = styled(Link)`
  display: flex;
  width: 176px;
  padding: 9px 28px;
  justify-content: center;
  color: #191919;
  font-size: 18px;
  border: 1px solid #191919;
`;

export const Amount = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`;
