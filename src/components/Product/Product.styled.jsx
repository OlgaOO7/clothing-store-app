import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  padding: 124px 28px 80px;
  @media (min-width: 1024px) {
    padding: 162px 40px 142px;
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
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 55px;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    margin-left: 83px;
  }
`;

export const Title = styled.h2`
  color: #000;

  font-family: Gill Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 140%;
  }
`;

export const Money = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 12px;
  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const Text = styled.p`
  color: #000;

  font-family: Gill Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 18px;
  text-align: justify;
  @media (min-width: 1024px) {
    font-size: 24px;
    margin-top: 23px;
  }
`;

export const SizeWrap = styled.div`
  user-select: none;
  position: relative;
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (min-width: 1024px) {
    margin-top: 47px;
    align-items: center;
  }
`;
export const SizeGridButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: #160b03;
  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  padding-bottom: 3px;

  border-bottom: 1px solid#160B03;

  &:hover,
  &:focus {
    color: #3f3831;
    border-bottom: 1px solid #3f3831;
  }

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
  margin-top: 24px;
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
  width: 160px;
  /* height: 38px; */
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  flex-shrink: 0;
  background: #160b03;
  color: #fff;
  border: 1px solid #160b03;
  border-radius: 1px;
  font-family: Gill Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 32px;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
    background: #3f3831;
    border: 1px solid #3f3831;
  }
  &:hover,
  &:focus {
    background: #3f3831;
    border: 1px solid #3f3831;
  }
  @media (min-width: 1024px) {
    width: 338px;
    height: 72px;
    padding: 10px;

    font-size: 32px;
    margin-top: 49px;
  }
`;
