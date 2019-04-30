import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/icon'
import Link from './link.sc'

const NavLink = ({icon, to, children}) => (
  <Link to={to}>
    <Icon src={icon} height="24px"/>
    <span>{children}</span>
  </Link>
)

NavLink.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string,
}

export default NavLink
