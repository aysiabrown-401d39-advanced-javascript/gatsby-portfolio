import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '@fontsource/courgette'
import '@fontsource/oswald'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img src="https://img.icons8.com/cotton/64/000000/cat-footprint--v1.png" style={{float:"left", marginBotton: '100px',paddingRight:'20px'}}/>
      <h1 style={{fontFamily: 'courgette', margin: 0, paddingTop:'20px' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <span style={{color:'white', fontFamily: 'oswald'}}>
        <Link to="/">Home</Link> {' '}
        <Link to="/projects/">Projects</Link> 
      </span>
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
