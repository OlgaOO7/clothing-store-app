import styled from 'styled-components';

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
    width: 215px;
    height: 257px;
    object-fit: cover;
    object-position: center;
  }
`;
