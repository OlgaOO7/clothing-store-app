import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 112px;
  height: 38px;
  padding: 8px 19px;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;
  border: 1px solid #160b03;
  box-sizing: border-box;
  color: #242424;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 24px;
  user-select: none;
  @media (min-width: 1024px) {
    margin-top: 60px;
    width: 194px;
    height: 61px;
    padding: 20px;

    color: #131313;

    font-family: Inter;
    font-size: 32px;
  }
`;

export const Span = styled.div`
  display: flex;
  fill: #9d9a97;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  cursor: pointer;

  & svg {
    width: 12px;
    height: 23px;
    &:hover,
    &:focus {
      fill: #160b03;
    }
    @media (min-width: 1024px) {
      width: 24px;
      height: 44px;
      &:hover,
      &:focus {
        fill: #121212;
      }
    }
  }
  & svg:first-child {
    width: 9px;
    height: 23px;

    @media (min-width: 1024px) {
      width: 17px;
      height: 44px;
    }
  }
  @media (min-width: 1024px) {
    font-family: Inter;
    font-size: 36px;
  }
`;
