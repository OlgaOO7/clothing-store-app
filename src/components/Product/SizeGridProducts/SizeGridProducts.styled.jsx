import styled from 'styled-components';

export const SizeGridTitle = styled.h3`
  color: #000;
  font-family: Gill Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 48px;
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
    background: #eaeaea;
    font-family: Gill Sans;
    font-size: 10.25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 6px 5px;
    @media (min-width: 768px) {
      font-size: 24px;
      padding: 14px 10px 14px 12px;
    }
    @media (min-width: 1024px) {
      background: #e3e0de;
    }
  }
  td {
    color: #000;
    border: 0.427px solid #000;
    font-family: Gill Sans;
    font-size: 10.25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const SizeGridLogo = styled.p`
  color: #eaeaea;
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.62px;
  margin-top: 13px;
  @media (min-width: 768px) {
    margin-top: 32px;
    font-size: 48px;
    letter-spacing: 10.08px;
  }
  @media (min-width: 1024px) {
    color: #e3e0de;
  }
`;
