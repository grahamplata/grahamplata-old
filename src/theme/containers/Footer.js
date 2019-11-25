import styled from "styled-components";

export default styled.footer`
    margin-top: 4em;
    text-transform:: uppercase;
    ul {
        overflow: auto;
        float: right;
    li {
        display: inline-block;
        padding: 1em;
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
    }
  }
`;
