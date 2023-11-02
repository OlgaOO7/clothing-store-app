import styled from 'styled-components';

export const SubscriptionFormSection = styled.section`
  width: 100%;
  padding: 30px 0;
  @media (min-width: 1440px) {
    padding: 60px 0;
  }
`;

export const SubscriptionFormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 1440px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const SubscriptionFormImage = styled.div`
  width: 330px;
  height: 315px;
  background-color: #ececec;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    width: 418px;
    height: 400px;
  }
`;
export const SubscriptionFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
  @media (min-width: 1440px) {
    gap: 43px;
  }
`;
export const SubscriptionFormTitle = styled.h3`
  width: 192px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  @media (min-width: 1440px) {
    width: 459px;
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 304px;
  @media (min-width: 1440px) {
    width: 534px;
  }
`;
export const SubscriptionFormInput = styled.input`
  width: 100%;
  padding: 10px 16px 10px 16px;
  border: 1px solid #000000;
  font-size: 12px;
  line-height: 17px;
  color: #696969;
  @media (min-width: 1440px) {
    padding: 14px 16px 14px 16px;
    font-size: 20px;
    line-height: 28px;
  }
`;
export const SubscriptionFormButton = styled.button`
  border: none;
  padding: 11px 27px;
  background: #191919;
  font-size: 12px;
  line-height: 17px;
  color: #fff;
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
export const ErrorMessage = styled.p`
  color: red;
`;

export const SuccessMessage = styled.p`
  color: green;
`;
