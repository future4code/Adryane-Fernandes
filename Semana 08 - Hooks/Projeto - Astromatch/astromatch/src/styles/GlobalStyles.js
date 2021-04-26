import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;

    font: 1rem Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
`