import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 1440px) {
    gap: 14px;
  }
`;
export const ProductImage = styled.div`
  background-color: #ececec;
  width: 144px;
  height: 190px;
  @media (min-width: 768px) {
    width: 230px;
    height: 280px;
  }
  @media (min-width: 1440px) {
    width: 322px;
    height: 416px;
  }
`;
export const ProductTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  width: 144px;
  @media (min-width: 768px) {
    width: 230px;
  }
  @media (min-width: 1440px) {
    width: 322px;
    font-size: 22px;
    line-height: 25px;
  }
`;
export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
  }
`;
