import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../badge'
import Icon from '../icon'
import Link from './link.sc'

const NavLink = ({icon, to, count, children}) => (
  <Link to={to}>
    <Badge count={count}>
      <Icon src={icon} height="24px"/>
    </Badge>
    <span>{children}</span>
  </Link>
)

NavLink.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string,
}

export default NavLink
