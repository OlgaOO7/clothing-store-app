import styled, { css } from 'styled-components';

export const IconWrapper = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  gap: 14px;

  ${props =>
    props.type === 'mobile' &&
    css`
      margin-top: 42px;
      display: flex;
      align-items: center;
      gap: 14px;

      @media (min-width: 1440px) {
        display: none;
      }
    `}
  ${props =>
    props.type === 'desktop' &&
    css`
      display: none;
      @media (min-width: 1440px) {
        margin-top: 27px;
        display: flex;
        align-items: center;
        gap: 7px;
      }
    `}
`;

export const MenuIcon = styled.svg`
  display: inline-block;
  fill: #000000;
  width: 24px;
  height: 24px;

    @media (min-width: 1440px) {
    ${props =>
    (props.type === 'mobile' && 'display: none;') ||
    (props.type === 'desktop' && 'display: inline-block;')}
    }

  /* ${props =>
    props.type === 'mobile' &&
    css`
      display: inline-block;
      fill: #000000;
      width: 24px;
      height: 24px;
      @media (min-width: 1440px) {
        display: none;
      }
    `}

  ${props =>
    props.type === 'desktop' &&
    css`
      display: none;
      @media (min-width: 1440px) {
        display: inline-block;
        fill: #000000;
        width: 24px;
        height: 24px;
      }
    `} */
`;
export const LinkIcon = styled.a``;
