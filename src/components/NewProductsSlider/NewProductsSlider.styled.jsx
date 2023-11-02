import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 360px) {
    max-width: 360px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  @media screen and (min-width: 360px) {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.05em;
  }
  @media (min-width: 1440px) {
    margin-bottom: 67px;
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0.05em;
  }
`;
export const div = styled.div`
width:322px,
height:422px`;
