import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #ececec;
  position: relative;
  overflow: hidden;
  @media (min-width: 1440px) {
    padding: 110px 0;
    height: 430px;
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
    top: 295px;
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
    top: 250px;
    width: 100%;
    display: flex;
    gap: 35px;
    animation: marqueeright 10s infinite linear;
  }
`;
