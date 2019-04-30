import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../avatar'
import Balloon from './balloon.sc'
import Caption from './caption.sc'
import Pane from './pane.sc'
import Status from './status.sc'

function MessageSet({user, messages, isOwn}) {
  const len = messages.length - 1
  const balloons = messages.map((message, index) =>
    <Balloon key={index} isOwn={isOwn} isLast={index === len}>
      {message.text}
    </Balloon>
  )
  return (
    <Pane isOwn={isOwn}>
      <Caption visible={!isOwn}>
        {user.name}
      </Caption>
      {balloons}
      <Status isOwn={isOwn}>
        Sent: {messages[len].time}
      </Status>
      <Avatar src={user.imageUrl}/>
    </Pane>
  )
}

MessageSet.propTypes = {
  isOwn: PropTypes.bool,
  messages: PropTypes.array,
  user: PropTypes.object,
}

export default MessageSet
