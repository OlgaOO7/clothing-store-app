import styled from 'styled-components';
import noImage from '../../images/no-image.jpg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 23px 0 32px;
  @media (min-width: 768px) {
    padding: 26px 0 40px;
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
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 768px) {
    margin-bottom: 67px;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  }
`;
export const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    gap: 32px 25px;
    margin-bottom: 56px;
  }
`;
export const CategoryImage = styled.div`
  width: 144px;
  height: 134px;
  transition: all 150ms ease-in-out;
  background-image: ${p => (p.$photo ? `url(${p.$photo})` : `url(${noImage})`)};
  opacity: 0.7;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover,
  &:focus {
    opacity: 10;
  }
  @media (min-width: 768px) {
    background-position: top;
    width: 437px;
    height: 400px;
  }
`;
export const CategoryTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #160b03;
  line-height: 21px;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 29px;
  }
`;
export const LinkTo = styled(Link)`
width: calc(50% - 8px);
& ${CategoryImage} {
  width: 100%;
}

&:nth-last-child(3) {
  flex-basis: 100%;
  flex: 0 0 calc(100%);
  & ${CategoryImage} {
    width: 100%;
  }
}

@media (min-width: 768px) {
  max-width: calc(100% / 3 - 17px);
  &:nth-last-child(3) {
    flex-basis: auto;
    flex: none;
    & ${CategoryImage} {
      width: 100%;
    }
  }
  &:nth-last-child(1) {
    flex-basis: 50%;
    flex: 0 0 calc(100% / 2 - 16px);
    max-width:none;
    & ${CategoryImage} {
      width: 100%;
    }
  }
  &:nth-last-child(2) {
    flex-basis: 50%;
    flex: 0 0 calc(100% / 2 - 16px);
    max-width:none;
    & ${CategoryImage} {
      width: 100%;
    }
  }
`;
export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
 
  @media (min-width: 768px) {
    gap: 14px;
    }
  }
`;
export const MoreLink = styled(Link)`
  font-size: 16px;
  line-height: 21px;
  border-bottom: 1px solid #160b03;
  color: #160b03;
  transition: all 150ms ease-out;
  &:hover,
  &:focus {
    color: #9d9a97;
    border-color: #9d9a97;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 29px;
  }
`;
