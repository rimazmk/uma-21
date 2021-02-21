import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      position: `absolute`,
      top: `0`,
    }}
  >
    <div
      style={{
        width: `100vw`,
        borderBottom: `1px solid gray`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          width: `95%`,
          padding: `1.45rem 1.1rem`,
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: `black`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div className="link-container">
          <h3 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                margin: `0 8px`,
                color: `black`,
              }}
            >
              Link 1
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                margin: `0 8px`,
                color: `black`,
              }}
            >
              Link 2
            </Link>
          </h3>
        </div>
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
