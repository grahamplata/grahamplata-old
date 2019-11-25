import React from "react";
import { StaticQuery, graphql } from "gatsby";

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        github
        twitter
        linkedin
        keybase
        instagram
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <>
        <p>© 2019 Graham Plata. All rights reserved.</p>
        <ul>
          {Object.entries(data.site.siteMetadata).map(([name, link]) => (
            <li key={name}>
              <a rel="noopener noreferrer" target="__blank" href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  />
);
