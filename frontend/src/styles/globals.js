import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--primary);
  }

  html, body, #root {
    height: 100%;

  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #fff;
    --gray: #8a8c90;
    --gray-input: rgb(64,68,75);
    --gray-symbol: #74777a;

    --notification: #f84a4b;
    --nice-purple: #6e86d6;
    --dark-purple: #6e84f0;
    --nice-yellow: #f9a839;
    --nice-gray: #413f3f;
    --purple-link: #5d80d6;
  }
`;
