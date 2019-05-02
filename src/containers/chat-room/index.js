import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Message from 'components/message'
import MessageSender from './message-sender'
import ScrollArea from './scroll-area'
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
    <ScrollArea>
      {messages.map(toMessage(appUser.id))}
    </ScrollArea>
    <MessageSender/>
  </Fragment>
)

ChatRoom.propTypes = {
  appUser: PropTypes.object,
  messages: PropTypes.array,
}

export default connect(ChatRoom)
