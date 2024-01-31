import styled from 'styled-components';

export const WramImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (max-width: 360px) {
    max-width: 94px;
    max-height: 112px;
  }
  @media (min-width: 1440px) {
    width: 178px;
    height: 218px;
  }
  & img {
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    -webkit-transition: all 250ms ease-out;
  }

  & img:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 360px) {
    max-width: 94px;
    max-height: 112px;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1440px) {
    width: 178px;
    height: 218px;
    object-fit: cover;
    object-position: center;
  }
`;
