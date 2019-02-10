import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const NotFoundPage = props => (
  <Layout>
    <Seo title="404" keywords={['blog', 'portfolio', 'grahamplata']} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
