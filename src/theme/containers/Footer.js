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
            position: relative;
            li::after {
                content: ' \\ ';
        }
    }
  }
`;
