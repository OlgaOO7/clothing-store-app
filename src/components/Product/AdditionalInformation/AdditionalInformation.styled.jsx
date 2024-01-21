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
  margin-top: 2px;
  padding: 7px 21px 10px 0;
  border-bottom: 1px solid #160b03;
  @media (min-width: 1024px) {
    margin-top: 16px;
  }
`;
export const CharacteristicsProduct = styled.p`
  color: #160b03;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: #160b03;
  user-select: none;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
`;

export const Icon = styled.svg`
  display: inline-block;
  fill: transparent;
  stroke-width: 1px;
  stroke: #160b03;
  width: 15px;
  height: 8px;
  flex-shrink: 0;
  /* cursor: pointer; */
  @media (min-width: 1024px) {
    width: 20px;
    height: 10px;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  stroke: #160b03;

  font-family: Gill Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
