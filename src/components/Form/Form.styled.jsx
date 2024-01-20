import styled from 'styled-components';
import subscriptionForm from '../../images/subscription-form.jpg';

export const ContactsForm = styled.form`
  width: 100%;
  max-width: 303px;
  @media (min-width: 768px) {
    max-width: 438px;
  }
`;
export const ContactsFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-bottom: 18px;
    gap: 18px;
    max-width: 438px;
  }
`;
export const FormTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin-bottom: 22px;
  }
`;
export const FormButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  padding: 10px 0;
  background: #686868;
  color: #fff;
  border: none;
  width: 186px;
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    background: #525151;
  }
  @media (min-width: 768px) {
    width: 253px;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 22px;
  }
`;
export const SuccessMessageWrapper = styled.div`
  width: 100%;
  background-color: #c9c9c9;
  padding: 27px 30px;
  height: max-content;
  text-align: center;
  max-width: 688px;
`;
export const SuccessContainer = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

// SubscriptionForm

export const SubscriptionFormSection = styled.section`
  width: 100%;
  padding: 64px 0 80px;
  @media (min-width: 768px) {
    padding: 92px 0 142px;
  }
`;

export const SubscriptionFormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const SubscriptionFormImage = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    max-width: 242px;
    height: 267px;
    background: url(${subscriptionForm});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const SubscriptionFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 304px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 31px;
    max-width: 534px;
  }
`;
export const SubscriptionFormTitle = styled.h3`
  width: 192px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
`;
export const SubForm = styled.form`
  display: flex;
  justify-content: center;
  max-width: 304px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 534px;
    width: 100%;
  }
`;
export const SubscriptionFormInput = styled.input`
  width: 100%;
  padding: 9px 15px;
  border: 1px solid #160b03;
  font-size: 14px;
  line-height: 20px;
  color: #160b03;

  &::placeholder {
    color: #696969;
  }

  @media (min-width: 768px) {
    padding: 9px 21px;
  }
  &:focus {
    outline: none;
    border: 2px solid #7c7d80;
  }
`;
export const SubscriptionFormButton = styled.button`
  border: none;
  padding: 7px 16px;
  background: #191919;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    background: #525151;
  }
  @media (min-width: 768px) {
    padding: 9px 46px;
    line-height: 22px;
    border: none;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
`;

export const SuccessMessage = styled.p`
  color: green;
`;
