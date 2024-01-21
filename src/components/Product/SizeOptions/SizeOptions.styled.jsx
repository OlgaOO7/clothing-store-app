import styled from 'styled-components';

export const TitleSize = styled.p`
  color: #000000;

  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;
export const ListSize = styled.ul`
  display: flex;
  gap: 12px;
  @media (min-width: 1024px) {
    gap: 21px;
  }
`;

export const ButtonSize = styled.button`
  color: #9d9a97;

  background: transparent;
  border: none;
  margin: 0;

  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &.active {
    color: #160b03;
  }
  &:hover,
  &:focus {
    color: #160b03;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
