import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BreadcrumbsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 31px;
    padding: 63px 0 88px;
    margin: 0;
    button {
      display: none;
      @media (min-width: 768px) {
        background: transparent;
        border: none;
        display: inline-block;
        font-family: Gill Sans;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #000000;
        /* cursor: pointer; */
      }
    }
  }
`;

export const StyleLink = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    font-family: Gill Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #000000;
  }
`;
