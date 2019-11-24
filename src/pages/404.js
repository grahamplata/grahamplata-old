import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';

import { PageContainer } from '../theme/containers/PageContainer';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" keywords={['blog', 'portfolio', 'grahamplata']} />
    <PageContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </PageContainer>
  </Layout>
);

export default NotFoundPage;
