import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        position: 'absolute',
        top: 0,
        background: 'transparent',
        width: '100%',
        padding: '20px',
        fontSize: '30px'
      }}
    >
      <div
        style={{
          padding: '5px'
        }}
      >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </div>
      <div
        style={{
          padding: '5px'
        }}
      >
        <Link
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div
        style={{
          padding: '5px'
        }}
      >
        <Link
          to="/music"
        >
          Music
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
