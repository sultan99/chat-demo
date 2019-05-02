import MessageSender from 'components/message-sender'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectInputText} from 'store/chat/selectors'
import {selectUser} from 'store/settings/selectors'
import {sendMessage, setInputText} from 'store/chat/actions'

const props = createStructuredSelector({
  inputText: selectInputText,
  sender: selectUser,
})

const actions = {
  sendMessage,
  setInputText,
}

const withState = connect(props, actions)

export default withState(MessageSender)
