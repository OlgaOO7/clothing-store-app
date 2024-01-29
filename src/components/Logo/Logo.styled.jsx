import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  color: #160b03;
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.78px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 6.72px;
  }
`;
