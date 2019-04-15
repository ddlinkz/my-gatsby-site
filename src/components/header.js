import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0.5em`,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'black'
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </div>
      <div>
        <Link
          to="/web"
          style={{
            textDecoration: 'none',
          }}
        >
          Web
        </Link>
      </div>
      <div>
        <Link
          to="/music"
          style={{
            textDecoration: 'none',
          }}
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
