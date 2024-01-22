import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`

@font-face {
  font-family: "Inter";
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2') format('woff2');
    font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZthiI2B.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}
`

export default FontStyle;