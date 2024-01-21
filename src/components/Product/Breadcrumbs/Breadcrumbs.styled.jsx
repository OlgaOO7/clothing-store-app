import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;

  margin-bottom: 52px;
  button {
    margin: 0;
    background: transparent;
    border: none;
    display: inline-block;
    font-family: Gill Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #3f3831;
  }

  @media (min-width: 1024px) {
    gap: 31px;
    margin-bottom: 88px;
    button {
      font-size: 22px;
    }
  }
`;
export const HorizontalLine = styled.div`
  width: 1px;
  height: 14px;
  background: #160b03;
`;

export const StyleLink = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #160b03;
  &:hover,
  &:focus {
    color: #3f3831;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
