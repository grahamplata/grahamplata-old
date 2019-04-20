import styled from "styled-components";

const Base = styled.div`
  h2 {
    margin-top: 2em;
  }
`;

export const BlogContainer = styled(Base)`
  p {
    cursor: default;
    text-size-adjust: 100%;
    padding-bottom: 0.1em;
  }
  ul {
    margin-left: 20px;
  }
  li {
    list-style-type: none;
  }
  th,
  td {
    padding: 2px 10px;
    font-size: 80%;
    text-align: left;
    border-bottom: 1px solid #e1e1e1;
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  small {
    margin-top: 1rem;
  }
`;
