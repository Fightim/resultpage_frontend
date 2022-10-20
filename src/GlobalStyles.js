import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
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
    font-weight: 500;
    font-family: 'S-CoreDream-3Light';
  }
  
`;