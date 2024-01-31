import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  @media (min-width: 1024px) {
    margin-top: 92px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-family: Mulish;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1024px) {
    font-size: 26px;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 25px;
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
export const Item = styled.li`
  max-width: 322px;
`;
export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WramImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  @media (min-width: 1440px) {
    width: 322px;
    height: 416px;
  }
  & img {
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    -webkit-transition: all 250ms ease-out;
  }

  & img:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 360px) {
    max-width: 144px;
    height: 190px;
  }

  @media (min-width: 1440px) {
    width: 322px;
    height: 416px;
  }
`;
export const Name = styled.h3`
  color: #160b03;
  font-family: Mulish;
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
export const Price = styled.span`
  color: #3f3831;

  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 2px;
  @media (min-width: 1024px) {
    margin-top: 8px;
    font-size: 14px;
    line-height: 140%;
  }
`;
