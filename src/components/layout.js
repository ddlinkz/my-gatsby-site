import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: 2;
          padding-top: 1.5;
        `}
      >
        <Link to={`/`}>
          <h3
            className={css`
              margin-bottom: 2;
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          className={css`
            padding: 1 1 1 1;
            float: right;
            font-style: normal;
          `}
        >
          About
        </Link>
        <a href="https://soundcloud.com/ddlinkz"
           className={css`
           float: right;
        `}
           target="_blank">
          Soundcloud
        </a>
        {children}
      </div>
    )}
  />
)