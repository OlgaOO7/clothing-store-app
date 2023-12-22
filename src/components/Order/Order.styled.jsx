import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 0 0 36px;
  @media (min-width: 768px) {
    padding: 0 0 38px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding: 105px 28px 41px;
  margin: 0;
  @media (min-width: 768px) {
    gap: 24px;
    max-width: 1360px;
    padding: 155px 40px 80px;
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
    margin-bottom: 41px;
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
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (min-width: 768px) {
    gap: 56px;
    max-height: 472px;
  }
`;
export const OrderResultSection = styled.section`
  padding: 14px 0 29px;
  background: #f2f2f2;
  @media (min-width: 768px) {
    padding: 38px 0;
    background: transparent;
    border-top: 1px solid #acacac;
    border-bottom: 1px solid #acacac;
  }
`;
export const OrderResultTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
    line-height: 45px;
    color: #030516;
  }
`;
export const OrderResultDeliveryFirst = styled.p`
  font-size: 12px;
  line-height: 17px;
  color: #00000066;
  width: 64px;
  @media (min-width: 768px) {
    color: #030516;
    width: auto;
  }
`;
export const OrderResultDeliverySec = styled.p`
  font-size: 12px;
  line-height: 17px;
  color: #00000066;
  width: 87px;
  text-align: end;
  @media (min-width: 768px) {
    color: #030516;
    width: auto;
  }
`;
export const OrderResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 768px) {
    gap: 6px;
  }
`;
export const OrderResultListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(2) {
    margin-bottom: 6px;
  }
`;
export const OrderResultTotal = styled.p`
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const OrderResultDestTotal = styled.p`
  @media (min-width: 768px) {
    display: block;
    font-family: Inter;
    font-size: 22px;
    font-weight: 600;
    line-height: 29px;
  }
`;
