import React from 'react'
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

export default AppNavigation
