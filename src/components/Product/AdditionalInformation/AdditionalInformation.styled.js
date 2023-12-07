import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 38px;
  @media (min-width: 1024px) {
    margin-top: 46px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 14px;
  @media (min-width: 1024px) {
    margin-top: 16px;
  }
`;
export const CharacteristicsProduct = styled.p`
  color: #000;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
export const Icon = styled.svg`
  display: inline-block;
  fill: transparent;
  stroke-width: 1px;
  stroke: #000;
  width: 15px;
  height: 8px;
  flex-shrink: 0;
  margin-right: 20px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 20px;
    height: 10px;
  }
`;
export const Underline = styled.div`
  height: 1px;
  background: #000000;
  margin-top: 14px;
  @media (min-width: 1024px) {
    margin-top: 12px;
  }
`;
