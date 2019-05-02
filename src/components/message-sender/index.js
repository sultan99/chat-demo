import React from 'react'
import Button from '../button'
import Panel from './panel.sc'
import Input from './input.sc'

function MessageSender({inputText, sender, sendMessage, setInputText}) {
  const onClick = () => sendMessage(sender, inputText)
  const onChange = event => setInputText(event.target.value)
  const onKeyPress = event => {
    event.key === `Enter` && sendMessage(sender, inputText)
  }

  return (
    <Panel>
      <Input
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

export default MessageSender
