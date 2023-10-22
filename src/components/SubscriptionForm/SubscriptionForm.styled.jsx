import styled from 'styled-components';

export const SubscriptionFormSection = styled.section`
  width: 100%;
`;

export const SubscriptionFormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 360px) {
    max-width: 360px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const SubscriptionFormImage = styled.div`
  width: 418px;
  height: 400px;
  background-color: #ececec;
  @media screen and (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: block;
  }
`;
export const SubscriptionFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 360px) {
    gap: 33px;
  }
  @media (min-width: 1440px) {
    gap: 43px;
  }
`;
export const SubscriptionFormTitle = styled.h3`
  @media screen and (min-width: 360px) {
    width: 192px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media (min-width: 1440px) {
    width: 459px;
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
  }
`;
export const SubscriptionForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 360px) {
    width: 304px;
  }
  @media (min-width: 1440px) {
    width: 534px;
  }
`;
export const SubscriptionFormInput = styled.input`
  @media screen and (min-width: 360px) {
    width: 100%;
    padding: 10px 16px 10px 16px;
    border: 1px solid #000000;
    font-size: 12px;
    line-height: 17px;
    color: #696969;
  }
  @media (min-width: 1440px) {
    padding: 14px 16px 14px 16px;
    font-size: 20px;
    line-height: 28px;
  }
`;
export const SubscriptionFormButton = styled.button`
  border: none;
  @media screen and (min-width: 360px) {
    padding: 11px 27px;
    background: #191919;
    font-size: 12px;
    line-height: 17px;
    color: #fff;
  }
  @media (min-width: 1440px) {
    padding: 15px;
    font-size: 20px;
    line-height: 28px;
    border: none;
  }
`;
export const SubscriptionFormContainer = styled.div`
  display: flex;
  width: 100%;
`;
