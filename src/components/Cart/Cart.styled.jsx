import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CartWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 124px 28px 0 28px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    padding: 170px 40px 0 40px;
    max-width: 1440px;
    box-sizing: border-box;
    margin: 0 auto 124px;
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
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 18px;
  background-color: #160b03;
  @media (min-width: 768px) {
    margin: 0 24px;
  }
`;

export const LinkTo = styled(Link)`
  color: #160b03;
  font-size: 18px;
  line-height: 140%;
  &:hover,
  &:focus {
    color: #3f3831;
  }
  &:last-child {
    color: #3f3831;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaglineSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  color: #000;
  font-size: 26px;
  font-weight: 400;
  line-height: 140%;
  /* display: flex;
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
    color: #000;
    font-size: 26px;
    line-height: 140%;
  } */
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
  /* padding: 29px 0; */
  margin-bottom: 12px;
  /* border-top: 1px solid #e3e0de; */
  @media (min-width: 768px) {
    margin-bottom: 18px;
    /* border-bottom: 1px solid #e3e0de; */
  }
`;

export const ProductCartList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 465px;
  overflow-y: auto;
  flex-shrink: 0;
  @media (min-width: 768px) {
    max-height: 540px;
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

export const ProductItem = styled.li`
  padding: 24px 0;
  /* margin-bottom: 12px; */
  border-bottom: 1px solid #e3e0de;
  &:first-child {
    border-top: 1px solid #e3e0de;
  }

  /* @media (min-width: 768px) {
    margin-bottom: 18px;
  } */
`;

export const DeleteCartBtnWrapp = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 40px;
`;

export const DeleteCartBtn = styled.button`
  padding: 0;
  color: #000000;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  font-size: 14px;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 16px;
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
