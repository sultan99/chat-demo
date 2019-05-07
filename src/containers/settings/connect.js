import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {resetSettings, setSetting} from 'store/settings/actions'
import {selectCtrlEnter} from 'store/settings/selectors'
import {selectLastMessage} from 'store/chat/selectors'
import {selectTheme, selectTimeFormat} from 'store/settings/selectors'
import {selectUser, selectLanguage} from 'store/settings/selectors'
import {setMessageId} from 'store/chat/actions'

import {withI18n} from "@lingui/react"

const props = createStructuredSelector({
  appUser: selectUser,
  ctrlEnter: selectCtrlEnter,
  language: selectLanguage,
  lastMessage: selectLastMessage,
  theme: selectTheme,
  timeFormat: selectTimeFormat,
})

const actions = {
  resetSettings,
  setMessageId,
  setSetting,
}

export default compose(
  withI18n(),
  connect(props, actions),
)
