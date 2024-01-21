import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CartWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 128px 28px 0 28px;
  margin-bottom: 646px;
  @media (min-width: 768px) {
    padding: 174px 40px 0 40px;
  }

  ${props =>
    props.type === 'empty' &&
    css`
      margin-bottom: 250px;
    `}
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

export const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaglineSubWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 18px;
  padding-left: 36px;
  color: #737373;
  text-align: center;
  font-family: Gill Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    justify-content: space-between;
    padding-left: 240px;
    font-size: 32px;
    color: #000;
  }
`;

export const ProductText = styled.p`
  /* margin-right: 44px;
  @media (min-width: 768px) {
    margin-right: 610px;
  } */
`;

export const ProductQuantity = styled.p`
  /* margin-right: 38px;
  @media (min-width: 768px) {
    margin-right: 113px;
  } */
`;

export const ProductListWrapper = styled.div`
  padding: 29px 0;
  border-top: 1px solid #686868;
  @media (min-width: 768px) {
    border-bottom: 1px solid #686868;
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
  scroll-behavior: smooth;

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

export const DeleteCartBtnWrapp = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 40px;
`;

export const DeleteCartBtn = styled.button`
  padding: 8px 10px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const EmptyCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 150px;
  color: #191919;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const CatalogLink = styled(Link)`
  color: #191919;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
