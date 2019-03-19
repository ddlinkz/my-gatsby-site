import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Web = () => (
  <Layout>
    <SEO title="Web"/>
    <h1>Web</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Web
