import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/layout";
import Scorecard from "../projects/Scorecard";
import Weatherbuddy from "../projects/Weatherbuddy";
import { PageContainer } from "../theme/containers/PageContainer";

const Projects = () => (
  <Layout>
    <Seo title="Projects" keywords={["blog", "projects", "grahamplata"]} />
    <PageContainer>
      <h2>Projects</h2>
      <Weatherbuddy />
      <Scorecard />
    </PageContainer>
  </Layout>
);

export default Projects;
