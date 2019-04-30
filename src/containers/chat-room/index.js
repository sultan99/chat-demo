import React from 'react'
import Dialogs from './dialogs.sc'
import MessageSet from 'components/message-set'
import {users, messages} from './fake-data'

const ChatRoom = () => (
  <Dialogs>
    <MessageSet user={users[0]} messages={messages[0]} isOwn/>
    <MessageSet user={users[1]} messages={messages[1]}/>
    <MessageSet user={users[1]} messages={messages[1]} isOwn/>
    <MessageSet user={users[0]} messages={messages[0]}/>
  </Dialogs>
)

export default ChatRoom
