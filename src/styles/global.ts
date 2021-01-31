import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #1B1B1B;
  }
  body,input,button {
    font: 18px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button{
    cursor: pointer;
  }
`;
