import styled from 'styled-components';

export const WrapImg = styled.div`
  @media (max-width: 360px) {
    width: 304px;
    height: 310px;
    overflow: hidden;
  }
  min-width: 304px;
  min-height: 310px;
  @media (max-width: 1440px) {
    max-width: 692px;
    max-height: 703px;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 360px) {
    max-width: 304px;
    max-height: 310px;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1440px) {
    width: 692px;
    height: 703px;
    object-fit: cover;
    object-position: center;
  }
`;
