import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.78px;
  @media (min-width: 1440px) {
    font-size: 32px;
    letter-spacing: 6.72px;
  }
`;
