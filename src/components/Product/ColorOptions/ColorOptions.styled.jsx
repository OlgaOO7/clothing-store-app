import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 18px;
  user-select: none;
  @media (min-width: 1024px) {
    margin-top: 26px;
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 15px;
  border: 1px solid transparent;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  &.active {
    border-color: #000000;
    border: 1px solid #000;
  }

  &:hover,
  &:focus {
    border-color: #000000;
    border: 1px solid #000;
  }
`;
export const ColorElips = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${p => p.color && p.color};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${p => (p.color === '#FFFFFF' ? '#E3E0DE' : 'transparent')};

  &.active {
    border-color: ${p => (p.color === '#FFFFFF' ? '#E3E0DE' : 'transparent')};
  }
  &:hover,
  &:focus {
    border-color: ${p => (p.color === '#FFFFFF' ? '#E3E0DE' : 'transparent')};
  }
`;
