import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartWrapper = styled.div`
  padding: 174px 40px 0 40px;
  margin-bottom: 646px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 31px;
  background-color: #000;
`;

export const LinkTo = styled(Link)`
  font-size: 15px;
  color: #000;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const TaglineSubWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  color: #737373;
  text-align: center;
  font-family: Gill Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 32px;
    color: #000;
  }
`;

export const ProductText = styled.p`
  margin-right: 44px;
  @media (min-width: 768px) {
    margin-right: 610px;
  }
`;

export const ProductQuantity = styled.p`
  margin-right: 38px;
  @media (min-width: 768px) {
    margin-right: 113px;
  }
`;

export const ProductCartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 37px;
  max-height: 507px;
  overflow-y: auto;
  flex-shrink: 0;
  /* -webkit-overflow-scrolling: touch; */

  /* IE and Edge: */
  -ms-overflow-style: none;
  &::-ms-scrollbar-thumb {
    background-color: #888;
  }
  &::-ms-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* Firefox: */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  /* Chrome and Safari: */
  &::-webkit-scrollbar {
    width: 6px;
    @media (min-width: 768px) {
      width: 12px;
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

export const Rectangle = styled.div`
  width: max-content;
  padding: 84px 104px;
  margin-top: 36px;
  margin-left: auto;
  background-color: #f0f0f0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;
  margin-bottom: 31px;
  color: #000;
  font-size: 18px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;
  margin-bottom: 61px;
  color: #000;
  font-size: 24px;
  font-weight: 600px;
`;

export const LinkBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 345px;
`;

export const OrderLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #0e0e0e;
  font-size: 22px;
  padding: 16px 0;
  border: 1px solid #191919;
  width: 345px;
`;

export const CatalogLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #191919;
  font-size: 22px;
  padding: 16px 0;
  border: 1px solid #191919;
  width: 345px;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 29px; */
  /* background-color: rgb(255, 255, 255); */
  /* border-bottom: 1px solid #686868; */
`;

export const DeleteCartBtn = styled.button`
  padding: 8px 10px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
