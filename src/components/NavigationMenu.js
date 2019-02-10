import React from 'react'
import { Link } from 'gatsby'
import NavContainer from '../theme/containers/NavContainer'

const PATHS = ['/', '/blog/', '/projects/', '/about/']
const getLinkName = locationSlug =>
  locationSlug.length === 1 ? 'Graham Plata' : locationSlug.split('/')[1]

const Li = ({ location }) => (
  <li>
    <Link to={location}>{getLinkName(location)}</Link>
  </li>
)

export default () => (
  <NavContainer>
    <ul>
      {PATHS.map((path, i) => (
        <Li key={i} location={path} />
      ))}
    </ul>
  </NavContainer>
)
