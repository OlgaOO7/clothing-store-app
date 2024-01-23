import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainSection = styled.section`
  width: 100%;
  padding: 22px 0;
  background-color: #f4efeb;
  @media (min-width: 768px) {
    padding: 48px 0;
  }
`;
export const Section = styled.section`
  width: 100%;
  padding: 52px 0 80px;
  @media (min-width: 768px) {
    padding: 72px 0 124px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 60px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 95px;
    max-width: 1245px;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-between;
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
  padding: 124px 30px 42px;
  margin: 0;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding: 170px 40px 52px;
    margin: 0 auto;
  }
`;
export const LinkTo = styled(Link)`
  font-family: Gill Sans;
  font-size: 18px;
  line-height: 21px;
  color: #160b03;
  transition: all 150ms ease-out;
  &:hover,
  &:focus {
    color: #3f3831;
  }
  &:last-child {
    color: #3f3831;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 25px;
  }
`;
export const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.04em;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 28px;
  @media (min-width: 768px) {
    gap: 32px;
    padding: 0;
  }
`;
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 104px;
  }
`;
export const ContactTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    width: 243px;
  }
`;
export const ContactText = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: inherit;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 21px;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    gap: 14px;
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
