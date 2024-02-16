import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 1001;
  box-sizing: border-box;
  padding: 46px 28px 19px;
  @media (min-width: 768px) {
    /* padding: 43px 40px 37px; */
    padding: 34px 28px 6px;
  }
`;

export const NavigationContainer = styled.div`
  position: relative;
  max-width: 1360px;
  margin: 0 auto;
`;
