import styled from 'styled-components';

export const OrderFormSection = styled.section`
  width: 100%;
  padding: 39px 0 61px;
  @media (min-width: 768px) {
    padding: 56px 0 430px;
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
  gap: 29px;
  @media (min-width: 768px) {
    gap: 39px;
  }
`;
export const OrderBtn = styled.button`
  max-width: 189px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  padding: 8.5px 0;
  background: #000000;
  color: #ffffff;
  border: none;
  @media (min-width: 768px) {
    max-width: 362px;
    padding: 10px 0;
    font-size: 26px;
    line-height: 36px;
  }
`;
export const SuccessMessage = styled.div`
  width: 100%;
  max-width: 898px;
  padding: 13px 0;
  background: #000000;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    padding: 27.5px 0;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 40px;
  }
`;
export const SuccessIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    margin-bottom: 30px;
  }
`;
export const SuccessText = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  &:first-of-type {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    &:first-of-type {
      margin-bottom: 0px;
    }
  }
`;
