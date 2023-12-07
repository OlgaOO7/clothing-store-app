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
  line-height: 19px;
  letter-spacing: 0.05em;
  @media (min-width: 768px) {
    margin-bottom: 67px;
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0.05em;
  }
`;
export const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 35px 24px;
  justify-content: space-between;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CategoryImage = styled.div`
  width: 144px;
  height: 134px;
  background-color: #d9d9d9;
  @media (min-width: 768px) {
    width: 437px;
    height: 400px;
  }
`;
export const CategoryTitle = styled.h3`
  font-weight: 400;
`;
export const CategoryCount = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
export const CategoryPrice = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: #969696;
  }
`;
export const CategoryItem = styled.li`
  width: calc(50% - 24px);
  & ${CategoryImage} {
    width: 100%;
  }

  &:nth-last-child(4) {
    flex-basis: 100%;
    flex: 0 0 calc(100%);
    & ${CategoryImage} {
      width: 100%;
    }
  }

  &:nth-last-child(3) {
    flex-basis: 100%;
    flex: 0 0 calc(100%);
    & ${CategoryImage} {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    &:nth-last-child(4) {
      &${CategoryImage} {
        flex: auto;
        width: 437px;
      }
    }
    &:nth-last-child(3) {
      &${CategoryImage} {
        flex: auto;
        width: 437px;
      }
    }
    &:nth-last-child(-n + 2) {
      flex-basis: 100%;
      flex: 0 0 calc(50% - 24px);
      & ${CategoryImage} {
        width: 100%;
      }
    }
  }
`;
