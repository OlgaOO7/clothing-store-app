import { Link } from 'react-router-dom';
import styled from 'styled-components';
import infoBlock from '../../images/info-block.jpg';

export const Section = styled.section`
  width: 100%;
  padding: 40px 0;
  background: #f4efeb;
  @media (min-width: 768px) {
    padding: 43px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  max-width: 231pxpx;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 692px;
    gap: 24px;
    text-align: left;
  }
`;
export const Logo = styled.span`
  text-transform: uppercase;
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.96px;
  max-width: 231px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 692px;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 3.36px;
  }
`;
export const Description = styled.p`
  max-width: 213px;
  margin: 0 auto 21px;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    max-width: 577px;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
  }
`;
export const LinkTo = styled(Link)`
  width: 100%;
  max-width: 212px;
  padding: 6px 0;
  margin-bottom: 27px;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #000;
  border: 1px solid #000000;
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    background: #160b03;
    color: #fff;
  }
  &:active {
    background: #3f3831;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Image = styled.div`
  width: 208px;
  height: 205px;
  background: url(${infoBlock});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  @media (min-width: 768px) {
    width: 322px;
    height: 263px;
  }
`;
