import styled from 'styled-components';

export const Background = styled.div`
  background: #f4efeb;
`;

export const FooterWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 36px 28px 76px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    padding: 82px 155px 116px;
  }
`;
