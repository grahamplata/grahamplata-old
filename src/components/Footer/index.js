import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

const Footer = () => (
  <footer>
    <Segment
      basic
      vertical
      style={{ margin: '1em 0em 0em', padding: '1em 0em' }}
      textAlign="center"
    >
      <p>
        Made with <Icon color="teal" name="heart" /> by{' '}
        <a href="https://www.twitter.com/grahamplata/">@grahamplata</a> using
        <a href="https://www.gatsbyjs.org/"> @gatsbyJS</a>
      </p>
    </Segment>
  </footer>
)

export default Footer
