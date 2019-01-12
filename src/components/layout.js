import React from 'react'
import Helmet from 'react-helmet'
import { Container, Grid } from 'semantic-ui-react'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import 'semantic-ui-css/semantic.min.css'
import meta from './meta'

export default ({ children }) => (
  <div style={{ marginTop: '15px' }}>
    <Helmet title="Graham Plata's Digital Sandbox" meta={meta} />
    <Grid verticalAlign="middle" columns={1} centered>
      <Grid.Column>
        <Grid.Row>
          <Container>
            <MainMenu />
            {children}
            <Footer />
          </Container>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </div>
)
