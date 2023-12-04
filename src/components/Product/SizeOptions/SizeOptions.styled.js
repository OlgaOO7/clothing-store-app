import styled from 'styled-components';

export const TitleSize = styled.p`
  color: #000;

  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 14px;
  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 21px;
  }
`;
export const ListSize = styled.ul`
  display: flex;
  gap: 20px;
  @media (min-width: 1024px) {
    gap: 40px;
  }
`;
export const TextSize = styled.p`
  color: #bababa;

  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &.active {
    color: #414141;
  }
  &:hover,
  &:focus {
    color: #414141;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
