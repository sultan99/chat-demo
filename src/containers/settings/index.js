import React from 'react'
import CtrlEnter from './sections/ctrl-enter'
import Footer from './footer'
import Language from './sections/language'
import Panel from './panel.sc'
import PersonalData from './personal-data'
import Theme from './sections/theme'
import TimeFormat from './sections/time-format'
import connect from './connect'
import {useMount} from 'common/utils'

function AppSettings(props) {
  useMount(() => {
    const {lastMessage, setMessageId} = props
    setMessageId(lastMessage.id)
  })

  return (
    <Panel>
      <PersonalData/>
      <Theme/>
      <TimeFormat/>
      <CtrlEnter/>
      <Language/>
      <Footer/>
    </Panel>
  )
}

export default connect(AppSettings)
