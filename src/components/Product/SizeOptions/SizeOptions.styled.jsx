import styled from 'styled-components';

export const TitleSize = styled.p`
  color: #000;

  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 21px;
  }
`;
export const ListSize = styled.ul`
  display: flex;
  gap: 12px;
  @media (min-width: 1024px) {
    gap: 40px;
  }
`;
export const TextSize = styled.p`
  color: #9d9a97;

  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  cursor: pointer;
  &.active {
    color: #160b03;
  }
  &:hover,
  &:focus {
    color: #160b03;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
