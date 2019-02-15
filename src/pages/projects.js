import React from 'react'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Scorecard from '../projects/Scorecard'
import { PageContainer } from '../theme/containers/PageContainer'

const Projects = () => (
  <Layout>
    <Seo title="Projects" keywords={['blog', 'projects', 'grahamplata']} />
    <PageContainer>
      <h2>Projects</h2>
      <Scorecard />
    </PageContainer>
  </Layout>
)

export default Projects
