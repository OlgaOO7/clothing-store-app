import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactsWrapper = styled.div`
  margin-top: 38px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      margin-top: 41px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    `}
`;

export const StyleLink = styled(Link)`
  margin: 0;
  padding: 0;
  background-color: transparent;

  color: #160B03;
  font-style: normal;
  font-weight: 600;
    font-size: 16px;
  line-height: 130%;


  ${props =>
    props.$sectionType === 'footer' &&
    css`
      font-size: 16px;
      @media (min-width: 768px) {
        font-size: 22px;
      }
    `}
`;
export const Text = styled.p`
  display: none;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: block;
      margin-top: 12px;
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      @media (min-width: 768px) {
        margin-top: 14px;
        font-size: 18px;
      }
    `}/* margin-top: 12px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 1440px) {
    margin-top: 14px;
    font-size: 18px;
  } */
`;
export const LinkWrapper = styled.div`
  margin-top: 6px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      margin-top: 9px;
      @media (min-width: 768px) {
        margin-top: 10px;
      }
    `}
`;
export const LinkTel = styled.a`
  color: #160B03;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      font-size: 16px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    `}
`;
