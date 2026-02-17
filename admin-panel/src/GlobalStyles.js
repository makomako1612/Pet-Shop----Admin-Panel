import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #1e1e2f;
    background-color: #f4f6f9;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #1e1e2f;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    outline: none;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`

export default GlobalStyles

