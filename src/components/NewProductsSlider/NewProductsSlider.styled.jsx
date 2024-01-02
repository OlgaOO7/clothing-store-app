import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.05em;
  @media (min-width: 768px) {
    margin-bottom: 67px;
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0.05em;
  }
`;
export const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  left: 10% !important;
  top: 100% !important;
  @media (min-width: 768px) {
    left: 20% !important;
  }
  &:after {
    content: none !important;
  }
`;
export const NextBtn = styled.button`
  background-color: transparent;
  border: none;
  right: 10% !important;
  top: 100% !important;
  @media (min-width: 768px) {
    right: 20% !important;
  }
  &:after {
    content: none !important;
  }
`;
export const BtnIcon = styled.svg`
  max-width: 23px;
  @media (min-width: 768px) {
    min-width: 30px;
  }
`;
