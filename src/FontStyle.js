import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`

@font-face {
  font-family: "Mulish";
// cyrillic
  src: url('https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aOvG4w-.woff2') format('woff2'),
  // latin:
  url('https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aevGw.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Mulish";
// cyrillic
  src: url('https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexU1W8aOvG4w-.woff2') format('woff2'),
  // latin:
  url('https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexU1W8aevGw.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Mulish";
  src:
  // latin:
  url('https://fonts.gstatic.com/s/mulish/v13/1Ptwg83HX_SGhgqk2hAjQlW_mEuZ0FsSzuSfGZQ6.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: "Inter";
// cyrillic
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthiI2B.woff2') format('woff2'),
  // latin:
  url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
    font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
// cyrillic
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZthiI2B.woff2') format('woff2'),
  // latin:
  url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}
`

export default FontStyle;