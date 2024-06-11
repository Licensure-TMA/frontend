import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    background-color: #f7f9fb;
  }
`;