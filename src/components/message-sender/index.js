import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import InputText from '../input-text'
import Panel from './panel.sc'
import {t} from "@lingui/macro"

const hitKey = (event, isCtrl) => (
  event.key === `Enter` && !isCtrl ||
  event.key === `Enter` && isCtrl && event.ctrlKey
)

function MessageSender({i18n, isCtrlEnter, sender, sendMessage}) {
  const refInput = useRef()
  const [inputText, setInputText] = useState(``)

  const onClick = () => {
    sendMessage(sender, inputText)
    setInputText(``)
    refInput.current.focus()
  }
  const onKeyDown = event => {
    if (inputText && hitKey(event, isCtrlEnter)) {
      sendMessage(sender, inputText)
      setInputText(``)
    }
    if (event.key === `Enter` && !isCtrlEnter) {
      event.preventDefault()
    }
  }

  return (
    <Panel>
      <InputText
        ref={refInput}
        multiline={isCtrlEnter}
        placeholder={i18n._(t`Type message here`)}
        value={inputText}
        onChange={setInputText}
        onKeyDown={onKeyDown}
      />
      <Button
        icon="send"
        disabled={!inputText.length}
        onClick={onClick}
      />
    </Panel>
  )
}

MessageSender.propTypes = {
  i18n: PropTypes.object,
  isCtrlEnter: PropTypes.bool,
  sender: PropTypes.object,
  sendMessage: PropTypes.func,
}

export default MessageSender
