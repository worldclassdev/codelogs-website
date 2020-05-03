import { InsigniaIcon } from '../../assets/svgs'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <InsigniaIcon /> {siteTitle}
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
