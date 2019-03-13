import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Music = () => (
  <Layout>
    <SEO title="Music"/>
    <h1>Music</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Music
