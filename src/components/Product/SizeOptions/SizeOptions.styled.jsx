import styled from 'styled-components';

export const TitleSize = styled.p`
  color: #000000;

  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 12px;
  @media (min-width: 1024px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;
export const ListSize = styled.ul`
  display: flex;
  gap: 8px;
  @media (min-width: 1024px) {
    gap: 12px;
  }
`;

export const ButtonSize = styled.button`
  color: #160b03;

  background: transparent;
  /* border: 1px solid #e3e0de; */
  border: 1px solid ${p => (p.$error ? '#F24040' : '#e3e0de')};

  margin: 0;
  padding: 4px 12px;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  transition: all 150ms ease-out;
  &.active {
    /* color: #160b03; */
    border: 1px solid #000;
  }
  &:hover,
  &:focus {
    /* color: #160b03; */
    border: 1px solid #000;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    padding: 8px 18px;
  }
`;
