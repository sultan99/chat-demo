import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Input from './input.sc'
import Panel from './panel.sc'

function MessageSender({inputText, sender, sendMessage, setInputText}) {
  const refInput = useRef()
  const onChange = event => setInputText(event.target.value)
  const onClick = () => (
    inputText &&
    sendMessage(sender, inputText) &&
    refInput.current.focus()
  )
  const onKeyPress = event => {
    inputText &&
    event.key === `Enter` &&
    sendMessage(sender, inputText)
  }

  return (
    <Panel>
      <Input
        ref={refInput}
        placeholder="Type message here"
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
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
  sender: PropTypes.object,
  sendMessage: PropTypes.func,
  setInputText: PropTypes.func,
}

export default MessageSender
