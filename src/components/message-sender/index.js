import Button from '../button'
import PropTypes from 'prop-types'
import InputText from '../input-text'
import Panel from './panel.sc'
import React, {useRef} from 'react'
import {t} from "@lingui/macro"

const hitKey = (event, isCtrl) => (
  isCtrl && event.ctrlKey && event.key === `Enter` ||
  !isCtrl && event.key === `Enter`
)

function MessageSender({inputText, sender, sendMessage, setInputText, i18n, isCtrlEnter}) {
  const refInput = useRef()
  const onChange = event => (
    setInputText(event.target.value)
  )
  const onClick = () => (
    inputText &&
    sendMessage(sender, inputText) &&
    setInputText(``) &&
    refInput.current.focus()
  )
  const onKeyDown = event => {
    inputText &&
    hitKey(event, isCtrlEnter) &&
    sendMessage(sender, inputText) &&
    setInputText(``)
  }

  return (
    <Panel>
      <InputText
        ref={refInput}
        multiline={isCtrlEnter}
        placeholder={i18n._(t`Type message here`)}
        value={inputText}
        onChange={onChange}
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
  inputText: PropTypes.string,
  onKey: PropTypes.string,
  sender: PropTypes.object,
  sendMessage: PropTypes.func,
  setInputText: PropTypes.func,
}

export default MessageSender
