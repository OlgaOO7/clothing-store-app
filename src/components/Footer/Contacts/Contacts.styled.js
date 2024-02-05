import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactsWrapper = styled.div`
  margin-top: 38px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      margin-top: 36px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    `}
`;

export const StyleLink = styled(Link)`
  margin: 0;
  padding: 0;
  background-color: transparent;

  color: #160b03;
  &:hover {
    color: #9d9a97;
  }

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      font-size: 16px;
      line-height: 130%;
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 140%;
      }
    `}
`;
export const Text = styled.p`
  display: none;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      display: block;
      margin-top: 13px;
      color: #160b03;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      @media (min-width: 768px) {
        margin-top: 20px;
        font-size: 16px;
      }
    `}
`;
export const LinkWrapper = styled.div`
  margin-top: 10px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      margin-top: 9px;
      @media (min-width: 768px) {
        margin-top: 12px;
      }
    `}
`;
export const LinkTel = styled.a`
  color: #160b03;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  &:hover {
    color: #9d9a97;
  }

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      line-height: 130%;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    `}
`;
