import { createGlobalStyle, css } from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';
// ${css usado para o vscode indentar

export default createGlobalStyle`${css`
  :root {
    --mainDark: #0b1014;
    --mainDarkRGB: 11, 16, 20;

    --mainLight: white;
    --mainLightRGB: 255, 255, 255;

    --gray: #7b8c98;
    --grayRGB: 123, 140, 152;

    --red: #f93208;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;

    &:focus {
      outline: 0;
    }
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--mainDark);
    color: var(--mainLight);
    padding-bottom: 3rem;
  }

  body,
  input,
  button,
  textarea {
    font: 16px 'Roboto', sans-serif;
  }

  button {
    background: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--mainLight);
    transition: color 0.3s ease-in-out;

    &:hover {
      color: rgba(var(--mainLightRGB), 0.75);
    }
  }

  .mainWrapper {
    max-width: 100vw;
    width: 924px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`}`;
