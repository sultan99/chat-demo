import MessageSender from 'components/message-sender'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectInputText} from 'store/chat/selectors'
import {selectUser} from 'store/settings/selectors'
import {sendMessage, setInputText} from 'store/chat/actions'
import {withI18n} from "@lingui/react"

const props = createStructuredSelector({
  inputText: selectInputText,
  sender: selectUser,
})

const actions = {
  sendMessage,
  setInputText,
}

const enhance = compose(
  withI18n(),
  connect(props, actions),
)

export default enhance(MessageSender)
