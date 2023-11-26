import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 41px 0 98px;
  @media (min-width: 768px) {
    padding: 140px 0 207px;
  }
`;
export const MainSection = styled.section`
  width: 100%;
  padding: 22px 0;
  background-color: #f5f5f5;
  @media (min-width: 768px) {
    padding: 41px 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 189px;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const MainWrapper = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
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
  padding: 60px 28px 32px;
  margin: 0;
  @media (min-width: 768px) {
    width: 1360px;
    padding: 82px 40px 44px;
    margin: 0 auto;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 55px;
  }
`;
export const Logo = styled.p`
  font-size: 41px;
  font-style: italic;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  color: #00000024;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 120px;
    line-height: 139px;
    letter-spacing: 0.21em;
  }
`;
export const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
`;
export const ContactTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    width: 243px;
  }
`;
export const ContactText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 7px;
  }
`;
export const IconInstagram = styled.svg`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconFacebook = styled.svg`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
