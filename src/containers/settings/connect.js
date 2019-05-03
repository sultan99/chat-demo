import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectUser, selectTheme, selectTimeFormat} from 'store/settings/selectors'
import {setSetting} from 'store/settings/actions'

const props = createStructuredSelector({
  appUser: selectUser,
  theme: selectTheme,
  timeFormat: selectTimeFormat,
})

const actions = {
  setSetting
}

export default connect(props, actions)
