import { createGlobalStyle } from 'styled-components';
import '@fontsource/dm-sans';
import '@fontsource-variable/open-sans';

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans Variable', sans-serif;
    font-size: 14px;
    line-height: 18px;
    background-color: #EBEBEB;
    height: 100%;
    margin: 0;
    letter-spacing: 0.03em;
  }
  ol, ul {
	  list-style: none;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  a{
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }
  p{
    margin: 0;
  }
`

export default GlobalStyle;