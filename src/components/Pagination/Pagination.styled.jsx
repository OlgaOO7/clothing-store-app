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
  font-family: Gill Sans;
  font-size: 14px;
  line-height: 16px;
  color: #939393;

  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
export const Button = styled.button`
  font-family: Gill Sans;
  font-size: 14px;
  line-height: 16px;
  color: #4c4b4b;

  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
