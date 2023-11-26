import styled from 'styled-components';

export const ContactsForm = styled.form`
  width: 100%;
`;
export const ContactsFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 303px;
  width: 50%;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-bottom: 18px;
    gap: 18px;
    width: 438px;
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
  padding: 27px 0;
  height: max-content;
`;
export const SuccessMessage = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
