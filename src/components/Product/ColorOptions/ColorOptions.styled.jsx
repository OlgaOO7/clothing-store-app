import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 24px;
  user-select: none;
  @media (min-width: 1024px) {
    margin-top: 32px;
  }
`;

export const TitleColor = styled.p`
  color: #000;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
  @media (min-width: 1024px) {
    font-size: 18px;
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
  transition: all 150ms ease-out;
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
export const ColorElips = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${p => p.$value && p.$value};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${p => (p.$value === '#FFFFFF' ? '#E3E0DE' : 'transparent')};
  transition: all 150ms ease-out;
  &.active {
    border-color: ${p => (p.$value === '#FFFFFF' ? '#E3E0DE' : 'transparent')};
  }
  &:hover,
  &:focus {
    border-color: ${p => (p.$value === '#FFFFFF' ? '#E3E0DE' : 'transparent')};
  }
`;
