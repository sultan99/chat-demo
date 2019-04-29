import React from 'react'
import ChatRoom from 'containers/chat-room'
import Settings from 'containers/settings'
import Wrapper from './wrapper.sc'
import {Switch, Route} from 'react-router-dom'

const App = () => (
  <Wrapper>
    <Switch>
      <Route path="/settings" component={Settings}/>
      <Route path="/" component={ChatRoom}/>
    </Switch>
  </Wrapper>
)

export default App
