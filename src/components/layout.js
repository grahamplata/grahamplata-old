import React from 'react'
import Helmet from 'react-helmet'
import { Container, Grid } from 'semantic-ui-react'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import 'semantic-ui-css/semantic.min.css'
import meta from './meta'

export default ({ children }) => (
  <div style={{ margin: '1em 0em 0em', padding: '1em 0em' }}>
    <Helmet title="Graham Plata's Digital Sandbox" meta={meta} />
    <Grid.Column>
      <Grid.Row>
        <Container>
          <MainMenu />
          {children}
        </Container>
      </Grid.Row>
    </Grid.Column>
    <Footer />
  </div>
)
