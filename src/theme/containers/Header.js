import styled from "styled-components";

export default styled.header`
  ul {
    padding-left: 0em;
    overflow: auto;
    li {
      display: inline-block;
      padding: 1em;
    }
  }
  a {
    text-transform: capitalize;
    color: #ddd;
    text-decoration: none;
    display: block;
    transition: opacity 0.5s ease-in;
    :hover,
    :active,
    :focus {
      filter: invert(70%);
    }
  }
`;
