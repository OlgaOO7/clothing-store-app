import styled from 'styled-components';

export const SizeGridTitle = styled.h3`
  color: #000;
  font-family: 'Mulish', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 19px;
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 48px;
  }
`;

export const WrapTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  width: 853px;
  height: auto;
  border: 0.5px solid #000;
  border-collapse: collapse;
  @media (max-width: 360px) {
    width: 303px;
    height: 103px;
  }
  @media (min-width: 768px) {
    border-bottom: 1px solid #000;
  }
  @media (min-width: 1440px) {
    height: 240px;
  }
  th {
    text-align: left;
    color: #000;
    border: 0.427px solid #000;
    background: #e3e0de;
    font-family: 'Mulish', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 6px 5px;
    @media (min-width: 768px) {
      font-size: 24px;

      color: #160b03;
    }
    @media (min-width: 1024px) {
      padding: 14px 10px 14px 12px;
    }
  }
  td {
    color: #000;
    border: 0.427px solid #000;
    font-family: 'Mulish', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* padding: 6.833px 4.271px; */
    @media (min-width: 768px) {
      font-size: 24px;
      /* padding: 16px 8px; */
    }
    @media (min-width: 1024px) {
      padding: 16px 10px;
    }
  }
`;

export const SizeGridLogo = styled.p`
  color: #eaeaea;
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.4px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 34px;
    font-size: 48px;
    letter-spacing: 9.6px;
  }
  @media (min-width: 1024px) {
    color: #e3e0de;
  }
`;
