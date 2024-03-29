import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  background: #f4efeb;
  border: none;
  padding: 6px 18px 6px 18px;
  font-size: 14px;
  line-height: 20px;
  text-align: start;
  color: #160B03;

  @media (min-width: 768px) {
    width: 387px;
    font-size: 16px;
    line-height: 22px;
    padding: 6px 19px 6px 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background: #f4efeb;
  display: ${p => (p.$isCategoriesShown ? `flex` : `none`)};
`;
export const Item = styled.li`
  padding: 6px 18px 6px 18px;
  transition: all 0.5s ease-out;
  &:hover {
    background: #e3e0de;
  }
  @media (min-width: 768px) {
    max-width: 387px;
    padding: 6px 19px 6px 19px;
  }
`;
export const Option = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 20px;
  color: #160b03;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Down = styled.div`
  position: absolute;
  top: 11px;
  right: 19px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  @media (min-width: 768px) {
    top: 14px;
  }
`;
export const Up = styled.div`
  position: absolute;
  top: 15px;
  right: 19px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  @media (min-width: 768px) {
    top: 17px;
  }
`;
