import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu.sc'
import NavLink from './nav-link'
import {Trans} from '@lingui/macro'

const AppNavigation = ({messageCount}) => (
  <Menu>
    <NavLink icon="chat" to="/chat" count={messageCount}>
      <Trans>Chat room</Trans>
    </NavLink>
    <NavLink icon="gear" to="/settings">
      <Trans>Settings</Trans>
    </NavLink>
  </Menu>
)

AppNavigation.propTypes = {
  messageCount: PropTypes.number,
}

export default AppNavigation
