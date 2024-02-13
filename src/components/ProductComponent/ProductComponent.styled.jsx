import styled, { css } from 'styled-components';
import noImage from '../../images/no-image.jpg';

export const ProductWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #000;
  align-items: center;
  @media (min-width: 768px) {
    gap: 14px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      flex-direction: row;
      gap: 10px;

      @media (min-width: 768px) {
        gap: 12px;
      }
    `}
`;
export const ProductImage = styled.div`
  height: 190px;
  width: 100%;
  @media (min-width: 768px) {
    height: 416px;
  }
  transition: all 150ms ease-out;
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => (props.$image ? props.$image : noImage)});
  &:hover,
  &:focus {
    background-size: 127.758%;
  }

  ${props =>
    props.type === 'search' &&
    css`
      width: 48px;
      height: 64px;

      @media (min-width: 767px) {
        width: 48px;
        height: 64px;
      }
    `}
`;
export const ProductTitle = styled.h3`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      font-size: 14px;
      line-height: 140%;
      color: #160b03;
      @media (min-width: 768px) {
        width: 242px;
        font-size: 16px;
        line-height: 140%;
      }
    `}
`;
export const ProductDescription = styled.p`
  font-size: 12px;
  line-height: 17px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  ${props =>
    props.type === 'search' &&
    css`
      font-size: 14px;
      line-height: 130%;
      color: #160b03;
      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 140%;
      }
    `}
`;

export const ProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 8px;
  }
  ${props =>
    props.type === 'search' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;

      @media (min-width: 768px) {
        gap: 2px;
      }
    `}
`;
