import React from "react";
import { Link } from "gatsby";

import Header from "../theme/containers/Header";

const PATHS = ["/", "/blog/"];
const getLinkName = locationSlug =>
  locationSlug.length === 1 ? "Home" : locationSlug.split("/")[1];

const Li = ({ location }) => (
  <li>
    <Link to={location}>{getLinkName(location)}</Link>
  </li>
);

export default () => (
  <Header>
    <ul>
      {PATHS.map((path, i) => (
        <Li key={i} location={path} />
      ))}
    </ul>
  </Header>
);
