import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  background: #f4efeb;
  border: none;
  padding: 6px 34px 6px 18px;
  font-size: 14px;
  line-height: 20px;
  text-align: start;
  ${p =>
    p.$isCategoriesShown
      ? ` &::after {
    right: 10px;
    border-width: 5px 5px 0 5px;
    border-color: #000 transparent transparent transparent;
  }
  @media (min-width: 768px) {
    &::after {
      right: 20px;
    }
  } 
  `
      : ` &::after {
        right: 10px;
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent #000 transparent;
      }
      @media (min-width: 768px) {
        &::after {
          right: 20px;
        }
      } `}
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
  }

  @media (min-width: 768px) {
    width: 387px;
    font-size: 16px;
    line-height: 22px;
    padding: 6px 79px 6px 19px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background: #f4efeb;
  display: ${p => (p.$isCategoriesShown ? `flex` : `none`)};
`;
export const Item = styled.li`
  padding: 6px 34px 6px 18px;
  @media (min-width: 768px) {
    max-width: 387px;
    padding: 6px 79px 6px 19px;
  }
`;
export const Option = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
