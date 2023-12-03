import styled, { css } from 'styled-components';

export const ContactsWrapper = styled.div`
  margin-top: 50px;;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
    margin-top: 41px;
    @media (min-width: 1440px) {
      margin-top: 0;
    }
  `}
`;

export const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;

  color: #000;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  font-size: 14px;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      font-size: 16px;
      @media (min-width: 1440px) {
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
      @media (min-width: 1440px) {
        margin-top: 14px;
        font-size: 18px;
      }
    `}

  /* margin-top: 12px;
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
    @media (min-width: 1440px) {
      margin-top: 10px;
    }
  `}
`;
export const Link = styled.a`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  ${props =>
    props.$sectionType === 'footer' &&
    css`
      font-size: 16px;
      @media (min-width: 1440px) {
        font-size: 18px;
      }
    `}
`;
