import styled, { css } from 'styled-components';

export const IconWrapper = styled.div`
  margin-top: 21px;
  display: flex;
  align-items: center;
  gap: 21px;

  ${props =>
    props.type === 'mobile' &&
    css`
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 21px;

      @media (min-width: 768px) {
        display: none;
      }
    `}
  ${props =>
    props.type === 'desktop' &&
    css`
      display: none;
      @media (min-width: 768px) {
        margin-top: 44px;
        display: flex;
        align-items: center;
        gap: 14px;
      }
    `}
`;

export const MenuIcon = styled.svg`
  display: inline-block;
<<<<<<< HEAD
  fill: #160b03;
=======
  fill: #160B03;
>>>>>>> main
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    ${props =>
    (props.type === 'mobile' && 'display: none;') ||
    (props.type === 'desktop' && 'display: inline-block;')}
  }
`;
