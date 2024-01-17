import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 122px;
  height: 42px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;
  border: 1px solid #9d9d9d;
  box-sizing: border-box;
  color: #242424;

  font-family: Gill Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 38px;
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
  fill: #9d9d9d;
  font-family: Gill Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  & svg {
    width: 15px;
    height: 28px;
    &:hover,
    &:focus {
      fill: #242424;
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
    width: 8px;
    height: 28px;

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
