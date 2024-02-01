import styled from 'styled-components';
import { Link } from 'react-router-dom';
import aboutUs from '../../images/about-us.jpg';
import aboutUs2x from '../../images/about-us2x.jpg';

export const Section = styled.section`
  width: 100%;
  padding: 31px 0 139px;
  color: #160b03;
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
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
  padding: 115px 28px 31px;
  margin: 0;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding: 155px 40px 34px;
    margin: 0 auto;
  }
`;
export const LinkTo = styled(Link)`
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
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 56px;
  }
`;
export const Logo = styled.span`
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 56px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 69px;
    align-items: flex-end;
    flex-wrap: nowrap;
  }
`;
export const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 36px;
    margin-bottom: 16px;
  }
`;
export const ContentText = styled.p`
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 370px;
  background: #ececec;
  align-self: center;
  background: -webkit-image-set(url(${aboutUs}) 1x, url(${aboutUs2x}) 2x);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  @media (min-width: 768px) {
    max-width: 669px;
    height: 424px;
    align-self: end;
    margin: auto 0;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    gap: 40px;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    width: 100%;
    gap: 52px;
    max-width: 626px;
  }
`;
