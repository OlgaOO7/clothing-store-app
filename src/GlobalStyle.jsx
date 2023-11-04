import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  background-color: var(--board_bgc);
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style-type: none;
}

button {
  cursor: pointer;
  padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: none;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
  bottom:0;
}
@keyframes marquee {
  0% {
    transform: rotate(24deg) translateX(0);
  }
  100% {
    transform: rotate(24deg) translateX(-100%);
  }
}
@keyframes marqueeright {
  0% {
    transform: rotate(-20deg) translateX(-100%);
  }
  100% {
    transform: rotate(-20deg) translateX(0);
  }
}
`;

export default GlobalStyles;
