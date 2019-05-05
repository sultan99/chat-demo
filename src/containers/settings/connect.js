import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectTheme, selectTimeFormat} from 'store/settings/selectors'
import {selectUser, selectLanguage} from 'store/settings/selectors'
import {resetSettings, setSetting} from 'store/settings/actions'
import {withI18n} from "@lingui/react"

const props = createStructuredSelector({
  appUser: selectUser,
  language: selectLanguage,
  theme: selectTheme,
  timeFormat: selectTimeFormat,
})

const actions = {
  resetSettings,
  setSetting,
}

export default compose(
  withI18n(),
  connect(props, actions),
)
