import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={style.div}>
      Austin Brown is an engineer and musician <br/>based in Brooklyn, New York.
    </div>
  </Layout>
)

let style = {};

style.div = {
  position: "absolute",
  width: "100%",
  top: "30%",
  textAlign: "center",
  verticalAlign: "middle",
  fontSize: 30,
  backgroundColor: "transparent",
  color: "#FFF",
  padding: "20px",
  wordSpacing: "1px",
  lineHeight: "33px"
}

export default IndexPage
