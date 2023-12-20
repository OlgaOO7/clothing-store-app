import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 32px 0 65px;
  @media (min-width: 768px) {
    padding: 40px 0 81px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;
  padding: 105px 28px 28px;
  margin: 0;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding: 155px 40px 69px;
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
export const ItemWrapper = styled.div`
  padding-bottom: 21px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  @media (min-width: 768px) {
    padding: 0;
    border: none;
  }
`;
export const OrderImage = styled.img`
  width: 44px;
  max-height: 50px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 161px;
    max-height: 208px;
    margin-right: 27px;
  }
`;
export const OrderContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const OrderTitle = styled.h3`
  font-family: Gill Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  height: max-content;
  @media (min-width: 768px) {
    font-family: Gill Sans;
    font-size: 32px;
    line-height: 45px;
  }
`;
