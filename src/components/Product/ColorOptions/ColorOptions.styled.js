import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 22px;
  @media (min-width: 1024px) {
    margin-top: 30px;
  }
`;

export const TitleColor = styled.p`
  color: #000;
  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 14px;
  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 25px;
  }
`;

export const ListColor = styled.ul`
  display: flex;
  gap: 12px;
  @media (min-width: 1024px) {
    gap: 22px;
  }
`;

export const ColorElips = styled.div`
  background: ${p => p.color && p.color};
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  cursor: pointer;

  &.active {
    border-color: #000000;
  }

  &:hover,
  &:focus {
    border-color: #000000;
  }

  @media (min-width: 1024px) {
    width: 61px;
    height: 61px;
    border-radius: 31px;
  }
`;
