import styled from "styled-components";
import { Colors, Fonts } from "../variables";
import media from "../../utils/media";

export default styled.main`
  > *:first-child {
    margin-top: 0;
  }
  // lists
  ul,
  ol {
    font-size: 1em;
    margin-bottom: 1.8em;
    margin-top: 0.4em;
    list-style: none;
    li {
      padding-left: 1em;
      line-height: 1.6;
    }
    li::before {
      // content: '•';
      opacity: 1;
      margin-right: 0.5em;
      margin-left: -0.55em;
    }
  }
  a {
    background-image: linear-gradient(
      transparent,
      transparent calc(1.11em),
      ${Colors.link} 5px,
      ${Colors.link}
    );
    ${media.phone`
      font-weight: 500;
    `} :hover {
      background-image: linear-gradient(
        transparent,
        transparent calc(1.04em),
        ${Colors.linkHover} 4px,
        ${Colors.linkHover}
      );
    }
  }
  .gatsby-resp-image-link {
    background-image: none;
    :hover {
      background-image: none;
    }
  }
  p {
    opacity: 0.99999;
    code {
      padding-left: 0.2em;
      border: 1px solid ${Colors.code};
      padding-right: 0.2em;
    }
  }
  blockquote {
    margin-top: 1em;
    font-size: 90%;
    margin-bottom: 0;
    font-size: 1em;
    position: relative;
    margin-bottom: 1em;
    p {
      color: ${Colors.p};
      margin-bottom: 0;
    }
    cite {
      float: right;
      font-weight: 400;
    }
  }
  blockquote + p {
    margin-top: 2em;
  }
  pre {
    font-size: 0.85em;
    color: ${Colors.p};
    border-left: 2px solid ${Colors.border};
    margin-bottom: 2em;
    overflow-x: auto;
  }
  code {
    font-family: ${Fonts.basic};
    font-family: ${Fonts.code};
  }
`;
