import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  @media (min-width: 1024px) {
    margin-top: 92px;
  }
`;

export const AsideTitle = styled.h3`
  color: #000;
  font-family: Gill Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1024px) {
    font-size: 26px;
  }
`;
export const AsideList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 24px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 40px;
    column-gap: 24px;
    /* row-gap: 26px; */
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
export const AsideItem = styled.li`
  max-width: 322px;
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
  user-select: none;

  @media (max-width: 360px) {
    max-width: 144px;
    height: 190px;

    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1440px) {
    width: 322px;
    height: 416px;
    object-fit: cover;
    object-position: center;
  }
`;
export const SimilarProductsITitle = styled.h4`
  color: #160b03;
  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 6px;
  @media (min-width: 1024px) {
    margin-top: 14px;
    font-size: 18px;
    line-height: 140%;
  }
`;
export const SimilarProductsIText = styled.p`
  color: #3f3831;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 2px;
  @media (min-width: 1024px) {
    margin-top: 8px;
    font-size: 14px;
  }
`;
