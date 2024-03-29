import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  padding: 124px 28px 81px;
  @media (min-width: 1024px) {
    padding: 170px 40px 142px;
  }
`;

export const ProductWrap = styled.section`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 48% 52%;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1440px) {
    padding: 0 91px 0 70px;
  }
`;
export const ImageWrap = styled.div`
  max-width: 692px;
  user-select: none;
  @media (min-width: 1440px) {
    width: 566px;
  }
`;

export const SliderList = styled.div`
  margin-top: 11px;
  @media (min-width: 768px) {
    margin-top: 16px;
  }
`;
export const InfoWrap = styled.div`
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-left: 30px;
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    margin-top: 55px;
    margin-left: 83px;
  }
`;

export const Title = styled.h1`
  color: #000;

  font-family: 'Mulish', sans-serif;
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
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 12px;
  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const Text = styled.p`
  color: #000;

  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 16px;
  text-align: justify;
  @media (min-width: 1024px) {
    margin-top: 18px;
  }
`;

export const SizeWrap = styled.div`
  user-select: none;
  position: relative;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 1024px) {
    margin-top: 24px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
export const SizeGridButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: #160b03;

  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding-bottom: 3px;

  border-bottom: 1px solid#000000;
  margin-top: 18px;
  transition: all 150ms ease-out;
  &:hover,
  &:focus {
    color: #9d9a97;
    border-bottom: 1px solid #9d9a97;
  }

  @media (min-width: 1024px) {
    margin-top: 0px;
    padding-bottom: 2px;
    line-height: 140%;
  }
`;

export const TextQuantity = styled.p`
  color: #242424;

  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  @media (min-width: 1024px) {
    margin-top: 60px;

    font-size: 18px;
  }
`;
export const InfoMessage = styled.p`
  position: absolute;
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  bottom: -15px;

  color: #f24040;
  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 140%;
    bottom: -25px;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  min-width: 160px;

  padding: 7px 16px;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  background: #160b03;
  color: #fff;
  border: 1px solid #160b03;
  border-radius: 1px;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 32px;
  user-select: none;
  transition: all 150ms ease-out;
  &:disabled {
    cursor: not-allowed;
    background: #9d9a97;
    border: 1px solid #9d9a97;
    &:hover,
    &:focus {
      background: #9d9a97;
      border: 1px solid #9d9a97;
    }
  }
  &:hover,
  &:focus {
    background: #3f3831;
    border: 1px solid #3f3831;
  }
  @media (min-width: 1024px) {
    padding: 9px 46px;
    line-height: 140%;
    margin-top: 40px;
  }
`;
