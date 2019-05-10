import MessageSender from 'components/message-sender'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectUser, selectCtrlEnter} from 'store/settings/selectors'
import {sendMessage} from 'store/chat/actions'
import {withI18n} from "@lingui/react"

const props = createStructuredSelector({
  isCtrlEnter: selectCtrlEnter,
  sender: selectUser,
})

const actions = {
  sendMessage,
}

const enhance = compose(
  withI18n(),
  connect(props, actions),
)

export default enhance(MessageSender)
