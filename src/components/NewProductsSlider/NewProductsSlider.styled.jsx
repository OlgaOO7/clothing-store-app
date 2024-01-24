import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 64px 0 23px;
  @media (min-width: 768px) {
    padding: 82px 0 26px;
  }
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
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 768px) {
    margin-bottom: 42px;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  max-width: 304px;
  position: absolute;
  flex-direction: row-reverse;
  justify-content: space-between;
  top: 96.6%;
  @media (min-width: 768px) {
    max-width: 1360px;
    top: 98% !important;
  }
`;
export const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  position: static !important;
  width: 48px !important;
  @media (min-width: 768px) {
    width: 44px !important;
  }
  &:after {
    content: none !important;
  }
`;
export const NextBtn = styled.button`
  background-color: transparent;
  border: none;
  position: static !important;
  width: 48px !important;
  @media (min-width: 768px) {
    width: 44px !important;
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
