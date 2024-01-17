import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  padding: 106px 28px 128px;
  @media (min-width: 1024px) {
    padding: 162px 40px 162px;
  }
`;

export const ProductWrap = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
  }
`;
export const ImageWrap = styled.div`
  max-width: 692px;
  user-select: none;
  @media (min-width: 1440px) {
    width: 692px;
  }
`;

export const SliderList = styled.ul`
  margin-top: 11px;
  @media (min-width: 768px) {
    margin-top: 23px;
  }
`;
export const InfoWrap = styled.div`
  margin-top: 38px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    margin-left: 115px;
  }
`;

export const Title = styled.h2`
  color: #000;

  font-family: Gill Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

export const Money = styled.p`
  color: #000;
  font-family: Gill Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  @media (min-width: 1024px) {
    font-size: 40px;
    margin-top: 25px;
  }
`;

export const Text = styled.p`
  color: #000;

  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 20px;
  text-align: justify;
  @media (min-width: 1024px) {
    font-size: 24px;
    margin-top: 23px;
  }
`;

export const SizeWrap = styled.div`
  user-select: none;
  position: relative;
  margin-top: 32px;
  @media (min-width: 1024px) {
    margin-top: 47px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const SizeGridButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 14px;
  text-decoration-line: underline;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const TextQuantity = styled.p`
  color: #242424;

  font-family: Gill Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 38px;
  @media (min-width: 1024px) {
    margin-top: 60px;

    font-size: 32px;
  }
`;
export const InfoMessage = styled.p`
  position: absolute;
  font-size: 10px;
  bottom: -15px;

  color: #ff0000;
  @media (min-width: 1024px) {
    font-size: 18px;
    bottom: -25px;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  width: 189px;
  height: 38px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #686868;
  color: #fff;
  border: none;

  font-family: Gill Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 18px;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
  }
  @media (min-width: 1024px) {
    width: 338px;
    height: 72px;
    padding: 10px;

    font-size: 32px;
    margin-top: 49px;
  }
`;
