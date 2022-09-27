import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *, ::before,::after {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    margin: 0;
    background-color: #f0f2f5;
    font-family: "Sora";
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
