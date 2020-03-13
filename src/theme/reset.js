import { Colors, Fonts } from "./variables";

export default `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: ${Fonts.basic};
    font-size: 100%;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    image-rendering: optimizequality;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    transition: all .2s ease;
  }
  nav,
  header,
  footer,
  section {
    display: block;
  }
  del {
    text-decoration: line-through;
  }
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }
  img {
    border: 0;
  }
  button {
    appearance: none;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    margin-top: .5em;
  }
  header {
    clear: both;
  }
  a {
    text-decoration: none;
    color: ${Colors.h};
  }
  .gatsby-resp-image-link,
  img {
    width: 100%;
  }
  input {
    background: ${Colors.background};
    font-size: 3em;
    display: block;
    width: 50%;
    border: none;
    border-bottom: 2px solid ${Colors.background}
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    background: ${Colors.background};
    font-size: 3em;
    display: block;
    width: 50%;
    border: none;
    border-bottom: 2px solid ${Colors.background}
  }
  hr {
    display: block;
    margin: 1em 9em 1em;
    font-size: 1rem;
  }
`;