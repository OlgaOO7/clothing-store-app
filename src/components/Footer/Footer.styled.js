import styled from 'styled-components';

export const Background = styled.div`
  background: #ececec;
`;

export const FooterWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 34px 28px 117px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    padding: 150px 150px 192px;
  }
`;
