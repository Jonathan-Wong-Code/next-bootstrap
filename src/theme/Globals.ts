import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1rem;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    margin: 0;
  }

  ol, ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
