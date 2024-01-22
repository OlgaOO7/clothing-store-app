import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 0 0 32px;
  @media (min-width: 768px) {
    padding: 0 0 28px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding: 124px 43px 52px 30px;
  margin: 0;
  @media (min-width: 768px) {
    gap: 24px;
    max-width: 1360px;
    padding: 170px 40px 64px 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-family: Gill Sans;
    font-size: 32px;
    font-weight: 400;
    line-height: 45px;
    margin-bottom: 28px;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 25px;
  color: #000000;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 29px;
  }
`;
export const OrderWrapper = styled.div`
  max-height: 234px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 22px;
    max-height: 472px;
  }

  /* Webkit (Chrome, Safari) scrollbar styling */
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
  }

  /* Firefox scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  /* IE/Edge scrollbar styling */
  -ms-overflow-style: none;
  &::-ms-scrollbar-thumb {
    background-color: #888;
  }
  &::-ms-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export const OrderResultSection = styled.section`
  padding: 23px 0;
  width: 100%;
  background: #f4efeb;
  @media (min-width: 768px) {
    padding: 48px 0;
  }
`;
export const OrderResultTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 45px;
  }
`;
export const OrderResultDelivery = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #00000066;
  width: 66px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    color: #9d9a97;
    width: auto;
  }
`;
export const OrderResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media (min-width: 768px) {
    gap: 8px;
  }
`;
export const OrderResultListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(2) {
    margin-bottom: 6px;
    @media (min-width: 768px) {
      margin-bottom: 7px;
    }
  }
`;
export const OrderResultTotal = styled.p`
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const OrderResultTotalPrice = styled.p`
  font-size: 14px;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
export const OrderResultDestTotal = styled.p`
  font-family: Inter;
  font-size: 16px;
  line-height: 21px;
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 29px;
  }
`;
