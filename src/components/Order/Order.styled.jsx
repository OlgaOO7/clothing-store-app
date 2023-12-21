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
