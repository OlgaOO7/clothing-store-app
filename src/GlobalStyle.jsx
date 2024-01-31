import { createGlobalStyle } from 'styled-components';

import 'normalize.css';

const GlobalStyle = createGlobalStyle`

  body {
  margin: 0;
  font-family: "Mulish", sans-serif;
}

body.modal-open {
  overflow: hidden;
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

.hidden {
    opacity: 0;
    overflow: hidden;
    height: 0px;
    width: 0px;
    padding: 0px;
    margin: 0px;
    line-height: 0;
}
`;

export default GlobalStyle;
