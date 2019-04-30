import React from 'react'
import Menu from './menu.sc'
import NavLink from './nav-link'

const AppNavigation = () => (
  <Menu>
    <NavLink icon="chat" to="/chat">Chat room</NavLink>
    <NavLink icon="gear" to="/settings">Settings</NavLink>
  </Menu>
)

export default AppNavigation
