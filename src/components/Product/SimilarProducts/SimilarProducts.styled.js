import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Aside = styled.aside`
  margin-top: 86px;
  @media (min-width: 1024px) {
    margin-top: 88px;
  }
`;

export const AsideTitle = styled.h3`
  color: #000;

  font-family: Gill Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;
export const AsideList = styled.ul`
  display: grid;
  column-gap: 15px;
  row-gap: 26px;
  margin-top: 28px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1028px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 48px;
    column-gap: 24px;
    row-gap: 26px;
  }
`;

export const AsideLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SimilarProductsImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
export const SimilarProductsITitle = styled.h4`
  color: #000;
  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  @media (min-width: 1028px) {
    margin-top: 18px;
    font-size: 24px;
  }
`;
export const SimilarProductsIText = styled.p`
  color: #000;

  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 6px;
  @media (min-width: 1028px) {
    margin-top: 12px;
    font-size: 24px;
  }
`;
