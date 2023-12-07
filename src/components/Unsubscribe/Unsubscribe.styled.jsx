import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 130px 0 98px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 180px 0 207px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 55px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
export const Button = styled.button`
  width: max-content;
  border: none;
  padding: 11px 27px;
  background: #191919;
  font-size: 12px;
  line-height: 17px;
  color: #fff;
  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 20px;
    line-height: 28px;
    border: none;
  }
`;
