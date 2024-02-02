import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  color: #160b03;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 800;
  line-height: 22.59px;
  letter-spacing: 20%;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40.16px;
  }
`;
