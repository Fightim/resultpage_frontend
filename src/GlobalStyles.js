import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}
body{
  font-family: 'S-CoreDream-3Light';
}
@font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
body {
    width: 100%;
    height: 100vh;
    margin : 10;
    overflow-y: scroll;
    display: flex;
    //align-items: center;
    justify-content: center;
    background-color: #FFF;
    font-weight: bold;
    font-family: 'S-CoreDream-3Light';
    font-size:20px;
  }

  button,input {
    cursor: pointer;
    padding: 0;
    font-family:inherit;
    font-weight:bold;
  }
  
  
`;