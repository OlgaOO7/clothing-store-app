import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    max-width: 1440px;
    box-sizing: border-box;
    margin: 0 auto 124px;
  }
`;
export const CartWrapper = styled.div`
  padding: 124px 28px 0 28px;
  @media (min-width: 768px) {
    padding: 170px 40px 0 40px;
  }
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
    color: #9d9a97;
  }
  &:last-child {
    color: #9d9a97;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  color: #000;
  font-size: 26px;
  font-weight: 400;
  line-height: 140%;
`;

export const ProductText = styled.p`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-right: 32vw;
  }
  @media (min-width: 1440px) {
    margin-right: 555px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: space-around;
    gap: 14vw;
  }
`;

export const QuantityText = styled.p`
  @media (min-width: 1440px) {
    margin-right: 180px;
  }
`;

export const ProductListWrapper = styled.div`
  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const ProductCartList = styled.ul`
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
  border-bottom: 1px solid #e3e0de;
  &:first-child {
    border-top: 1px solid #e3e0de;
  }
`;

export const DeleteCartBtnWrapp = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 44px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 150px;
  color: #160b03;
  font-size: 18px;
  line-height: 23.4px;
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 22px;
    line-height: 28.6px;
  }
`;

export const CatalogLink = styled(Link)`
  color: #160b03;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.4px;

  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28.6px;
  }
`;
