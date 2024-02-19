import styled from 'styled-components';

export const ListOfButtons = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;

export const ButtonGray = styled.button`
  font-size: 14px;
  line-height: 20px;
  color: #9d9a97;

  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
export const Button = styled.button`
  font-size: 14px;
  line-height: 20px;
  color: #160b03;

  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
export const Ellips = styled.span`
  color: #b4b4b4;
`;
