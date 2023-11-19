import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 31px 0 139px;
  @media (min-width: 1440px) {
    padding: 34px 0 208px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 1440px) {
    gap: 82px;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;
  padding: 60px 28px 31px;
  margin: 0;
  @media (min-width: 1440px) {
    width: 1360px;
    padding: 82px 40px 34px;
    margin: 0 auto;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 55px;
  }
`;
export const Logo = styled.span`
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  line-height: 57px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 29px;
    letter-spacing: 0.08em;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 69px;
    align-items: flex-end;
  }
`;
export const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.03em;
  margin-bottom: 14px;
  @media (min-width: 1440px) {
    font-size: 38px;
    line-height: 44px;
    margin-bottom: 42px;
  }
`;
export const ContentText = styled.p`
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
export const Image = styled.div`
  width: 298px;
  height: 370px;
  background: #ececec;
  align-self: center;
  @media (min-width: 1440px) {
    min-width: 669px;
    height: 617px;
    align-self: end;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 1440px) {
    gap: 44px;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  @media (min-width: 1440px) {
    gap: 64px;
    min-width: 626px;
  }
`;
