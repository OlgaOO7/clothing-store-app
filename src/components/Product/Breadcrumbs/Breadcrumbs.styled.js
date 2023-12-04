import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;

  margin-bottom: 88px;
  button {
    background: transparent;
    border: none;
    display: inline-block;
    font-family: Gill Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #000000;
  }
`;

export const StyleLink = styled(Link)`
  display: inline-block;
  font-family: Gill Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000000;
`;
