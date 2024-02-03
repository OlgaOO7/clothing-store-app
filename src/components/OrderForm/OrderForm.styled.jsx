import styled from 'styled-components';

export const OrderFormSection = styled.section`
  width: 100%;
  padding: 52px 0 63px;
  @media (min-width: 768px) {
    padding: 64px 0 142px;
  }
`;
export const Wrapper = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
export const ElipsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background: #f4efeb;
  border-radius: 13px;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 18px;
    line-height: 23px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;
export const OrderBtn = styled.button`
  font-size: 16px;
  line-height: 21px;
  padding: 7px 16px;
  transition: all 0.5s ease-out;
  background: #160b03;
  color: #ffffff;
  border: none;
  border-radius: 1px;
  &:hover,
  &:focus {
    background: #3f3831;
  }
  @media (min-width: 768px) {
    max-width: 271px;
    padding: 9px 46px;
    font-size: 16px;
    line-height: 22px;
  }
`;
export const SuccessMessage = styled.div`
  width: 100%;
  max-width: 628px;
  padding: 11.5px 0;
  background: #000000;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 42px;
  @media (min-width: 768px) {
    padding: 18px 0;
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 26px;
  }
`;
export const SuccessIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    margin-bottom: 22px;
  }
`;
export const SuccessText = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  &:first-of-type {
    margin-bottom: 16px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    &:first-of-type {
      margin-bottom: 0px;
    }
  }
`;
export const OrderSuccessSection = styled.section`
  width: 100%;
  padding: 28px 0 80px;
  @media (min-width: 768px) {
    padding: 60px 0 142px;
  }
`;
export const OrderSuccessContainer = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
