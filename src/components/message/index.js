import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../avatar'
import Balloon from './balloon.sc'
import Caption from './caption.sc'
import Pane from './pane.sc'
import Status from './status.sc'
import {Trans} from '@lingui/macro'

function Message({author, texts, time, isOwn}) {
  const len = texts.length - 1
  const toBalloon = (text, index) => (
    <Balloon
      key={index}
      isOwn={isOwn}
      isLast={index === len}
      dangerouslySetInnerHTML={{__html: text}}
    />
  )

  return (
    <Pane isOwn={isOwn}>
      <Caption visible={!isOwn}>
        {author.name}
      </Caption>
      {texts.map(toBalloon)}
      <Status isOwn={isOwn}>
        <Trans>Sent: {time}</Trans>
      </Status>
      <Avatar src={author.imageUrl}/>
    </Pane>
  )
}

Message.propTypes = {
  author: PropTypes.object,
  isOwn: PropTypes.bool,
  texts: PropTypes.array,
  time: PropTypes.string,
}

export default Message
