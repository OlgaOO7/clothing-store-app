import styled, { css } from 'styled-components';

export const ProductWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #000;
  @media (min-width: 768px) {
    gap: 10px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      flex-direction: row;
      gap: 10px;
    `}
`;
export const ProductImage = styled.img`
  background-color: #ececec;
  width: 144px;
  height: 190px;
  @media (min-width: 768px) {
    width: 322px;
    height: 416px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      @media (min-width: 768px) {
        width: 48px;
        height: 64px;
    `}

  ${props =>
    props.$sectionTtype === 'search' &&
    css`
      @media (max-width: 767px) {
        width: 48px;
        height: 64px;
    `}
`;
export const ProductTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  width: 144px;
  @media (min-width: 768px) {
    width: 230px;
  }
  @media (min-width: 768px) {
    width: 322px;
    font-size: 22px;
    line-height: 25px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      @media (min-width: 768px) {
        width: 242px;
        font-size: 14px;
        line-height: normal;
      }
    `}
`;
export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      @media (min-width: 768px) {
        font-size: 10px;
        font-weight: 300;
        line-height: normal;
      }
    `}
`;

export const ProductTextWrapper = styled.div`
  ${props =>
    props.type === 'search' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    `}
`;
