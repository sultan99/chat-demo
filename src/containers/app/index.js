import React from 'react'
import AppNavigation from 'components/navigation'
import ChatRoom from 'containers/chat-room'
import Settings from 'containers/settings'
import Panel from './panel.sc'
import connect from './connect'
import locales from 'locales'
import theme from './theme'
import {I18nProvider} from '@lingui/react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

const App = ({language, mode}) => (
  <I18nProvider language={language} catalogs={locales}>
    <ThemeProvider theme={theme[mode]}>
      <Panel>
        <AppNavigation/>
        <Switch>
          <Route path="/chat" component={ChatRoom}/>
          <Route path="/settings" component={Settings}/>
          <Redirect from="/" to="chat"/>
        </Switch>
      </Panel>
    </ThemeProvider>
  </I18nProvider>
)

export default connect(App)
