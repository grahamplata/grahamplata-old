import styled from 'styled-components';
import { Colors } from '../variables';

export default styled.div`
  display: block;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 15px;
  ul {
    overflow: auto;
    li:first-child {
      float: left;
      padding-left: 0em;
    }
    li:nth-child(2) {
      padding-right: 0em;
    }
    li {
      float: right;
      display: block;
      vertical-align: middle;
      list-style: none;
      padding: 0.7em;
      margin: 0em;
      a {
        text-transform: uppercase;
        color: ${Colors.h};
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
