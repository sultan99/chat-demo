import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectTheme, selectTimeFormat} from 'store/settings/selectors'
import {selectUser, selectLanguage} from 'store/settings/selectors'
import {resetSettings, setSetting} from 'store/settings/actions'
import {setMessageId} from 'store/chat/actions'
import {selectLastMessage} from 'store/chat/selectors'

import {withI18n} from "@lingui/react"

const props = createStructuredSelector({
  appUser: selectUser,
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
