import { createGlobalStyle } from "styled-components";
import resets from "./reset";
import typography from "./typography";
import prism from "./prism";
import background from "./background";

export default createGlobalStyle`
  ${resets}
  ${typography}
  ${prism}
  ${background}
  `;
