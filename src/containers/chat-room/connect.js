import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectMessageFeed} from 'store/chat/selectors'
import {selectUser} from 'store/settings/selectors'
import {setMessageId} from 'store/chat/actions'

const props = createStructuredSelector({
  appUser: selectUser,
  messages: selectMessageFeed,
})

const actions = {
  setMessageId,
}

export default connect(props, actions)
