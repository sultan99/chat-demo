import React from 'react'
import NavLink from './nav-link'
import Pane from './pane.sc'

const AppNavigation = () => (
  <Pane>
    <NavLink icon="chat" to="/chat">Chat room</NavLink>
    <NavLink icon="gear" to="/settings">Settings</NavLink>
  </Pane>
)

export default AppNavigation
