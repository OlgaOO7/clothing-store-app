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
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #9d9a97;
  }

  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 92px;

    button {
      font-size: 22px;
      line-height: 130%;
    }
  }
`;
export const HorizontalLine = styled.div`
  width: 1px;
  height: 14px;
  background: #160b03;
  @media (min-width: 1024px) {
    height: 16px;
  }
`;

export const StyleLink = styled(Link)`
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #160b03;
  transition: all 150ms ease-out;
  &:hover,
  &:focus {
    color: #9d9a97;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 130%;
  }
`;
