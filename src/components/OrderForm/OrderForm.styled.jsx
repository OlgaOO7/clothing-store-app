import styled from 'styled-components';

export const OrderFormSection = styled.section`
  width: 100%;
  padding: 39px 0 61px;
  @media (min-width: 1024px) {
    padding: 56px 0 430px;
  }
`;
export const Wrapper = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
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
