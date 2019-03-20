import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThreeContainer from "../components/three-component";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ThreeContainer />
  </Layout>
)

export default IndexPage
