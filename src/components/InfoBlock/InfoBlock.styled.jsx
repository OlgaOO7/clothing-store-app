import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #ececec;
  border-radius: 63px;
  @media (min-width: 768px) {
    padding: 40px 0;
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
    flex-direction: row;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Container = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 14px;
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.21em;
  @media (min-width: 768px) {
    max-width: 923px;
    margin-bottom: 29px;
    font-size: 40px;
    font-style: italic;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.21em;
  }
`;
export const Description = styled.p`
  margin-bottom: 21px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  @media (min-width: 768px) {
    max-width: 757px;
    margin-bottom: 0;
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
  }
`;
export const LinkTo = styled(Link)`
  width: 192px;
  padding: 7px 0;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000;

  border: 1px solid #000000;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const Image = styled.div`
  width: 208px;
  height: 205px;
  background: #c7c7c7;

  @media (min-width: 768px) {
    width: 311px;
    height: 263px;
  }
`;
