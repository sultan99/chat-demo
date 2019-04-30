import React from 'react'
import AppNavigation from 'components/navigation'
import ChatRoom from 'containers/chat-room'
import Settings from 'containers/settings'
import Wrapper from './wrapper.sc'
import {Switch, Route, Redirect} from 'react-router-dom'

const App = () => (
  <Wrapper>
    <AppNavigation/>
    <Switch>
      <Route path="/chat" component={ChatRoom}/>
      <Route path="/settings" component={Settings}/>
      <Redirect from="/" to="chat"/>
    </Switch>
  </Wrapper>
)

export default App
