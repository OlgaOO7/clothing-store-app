import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #ececec;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  height: 532px;
  @media (min-width: 1440px) {
    background: #ececec;
    height: 650px;
    border-radius: inherit;
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
  height: 100%;
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const LeftText = styled.p`
  display: none;
  @media (min-width: 1440px) {
    font-size: 120px;
    font-style: italic;
    font-weight: 700;
    line-height: 139px;
    letter-spacing: 0.21em;
    color: #00000033;

    display: block;
  }
`;
export const RightText = styled.p`
  display: none;
  @media (min-width: 1440px) {
    font-size: 120px;
    font-style: italic;
    font-weight: 700;
    line-height: 139px;
    letter-spacing: 0.21em;
    color: #00000033;

    display: block;
  }
`;
export const LeftTextWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    left: -35px;
    top: 460px;
    animation: marquee 10s infinite linear;
    display: flex;
    gap: 35px;
    position: absolute;
    width: 100%;
  }
`;
export const RightTextWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    left: 795px;
    top: 330px;
    width: 100%;
    display: flex;
    gap: 35px;
    animation: marqueeright 10s infinite linear;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ececec;
  z-index: 999;
  height: 100%;
  border-radius: 30px;
  @media (min-width: 1440px) {
    width: 701px;
    height: 650px;
    border-radius: 60px;
    background: #d9d9d9;
  }
`;
export const LinkTo = styled(Link)`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid #000000;
  padding: 7px 0;
  width: 120px;
  background-color: transparent;
  text-align: center;
  color: #000000;
  @media (min-width: 1440px) {
    width: 186px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    border: 2px solid #000000;
    padding: 8px 0;
  }
`;
