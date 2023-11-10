import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 58px 24px;

  @media (min-width: 1440px) {
  }
`;
