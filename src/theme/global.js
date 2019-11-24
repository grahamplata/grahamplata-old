import { createGlobalStyle } from 'styled-components';
import resets from './reset';
import typography from './typography';
import background from './background';

export default createGlobalStyle`
  ${resets}
  ${typography}
  ${background}
  `;
