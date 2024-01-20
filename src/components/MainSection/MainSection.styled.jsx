import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgHeroDesktop from '../../images/hero-bg-desktop.jpg';
import bgHeroDesktop2x from '../../images/hero-bg-desktop@2x.jpg';
import bgHeroDesktopWebp from '../../images/hero-bg-desktop.webp';
import bgHeroDesktopWebp2x from '../../images/hero-bg-desktop@2x.webp';
import bgHeroMobile from '../../images/hero-bg-mobile.jpg';
import bgHeroMobile2x from '../../images/hero-bg-mobile@2x.jpg';
import bgHeroMobileWebp from '../../images/hero-bg-mobile.webp';
import bgHeroMobileWebp2x from '../../images/hero-bg-mobile@2x.webp';

export const Section = styled.section`
  width: 100%;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  height: 532px;
  background: url(${bgHeroMobile}),
    -webkit-image-set(url(${bgHeroMobileWebp}) 1x, url(${bgHeroMobileWebp2x}) 2x, url(${bgHeroMobile})
          1x, url(${bgHeroMobile2x}) 2x);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  @media (min-width: 768px) {
    background: url(${bgHeroDesktop}),
      -webkit-image-set(url(${bgHeroDesktopWebp}) 1x, url(${bgHeroDesktopWebp2x})
            2x, url(${bgHeroDesktop}) 1x, url(${bgHeroDesktop2x}) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
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
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const LinkTo = styled(Link)`
  display: inline-block;
  font-size: 16px;
  line-height: 21px;
  padding: 7px 0;
  width: 120px;
  text-align: center;
  border: none;
  background: #160b03;
  color: #ffffff;
  transition: all 0.5s ease-out;
  position: absolute;
  bottom: 80px;
  &:hover,
  &:focus {
    background: #3f3831;
  }
  @media (min-width: 768px) {
    width: 186px;
    line-height: 22px;
    padding: 9px 0;
    bottom: 122px;
  }
`;
