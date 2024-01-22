import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 18px;
  user-select: none;
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
  line-height: 140%;
  margin-bottom: 8px;
  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const ListColor = styled.ul`
  display: flex;
  gap: 16px;
`;

export const ColorElips = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${p => p.color && p.color};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #d9d9d9;

  &.active {
    border-color: #000000;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;
  }

  &:hover,
  &:focus {
    border-color: #000000;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;
  }
`;
