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

  // .s-enter-active {
  //   ul {
  //     background: white;
  //   }

  //   button {
  //     background: white;

  //     div {
  //       color: #1876d2;
  //     }
      
  //     path {
  //       fill: #1876d2;
  //     }
  //   }

  //   button:hover {
  //     background: #f5f5f5;
  //   }
  }
`;