import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base body styles */
  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #1e1e2f;
    background-color: #f4f6f9;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #1e1e2f;
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Buttons */
  button {
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    outline: none;
  }

  /* Global container */
  #root {
    width: 100%;
    min-height: 100vh;
  }
`

export default GlobalStyles
