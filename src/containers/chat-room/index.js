import React, {Fragment} from 'react'
import Dialogs from './dialogs.sc'
import Message from 'components/message'
import MessageSender from './message-sender'
import connect from './connect'

const toMessage = userId => (message, index) => (
  <Message
    key={index}
    isOwn={message.author.id === userId}
    {...message}
  />
)

const ChatRoom = ({appUser, messages}) => (
  <Fragment>
    <Dialogs>
      {messages.map(toMessage(appUser.id))}
    </Dialogs>
    <MessageSender/>
  </Fragment>
)

export default connect(ChatRoom)
