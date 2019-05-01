import React, {useState} from 'react'
import Button from '../button'
import Panel from './panel.sc'
import TextInput from '../text-input'

function MessageSender() {
  const [disabled, setButtonState] = useState(true)
  const onChange = (event, value) => setButtonState(!value.length)

  return (
    <Panel>
      <TextInput placeholder="Type message here" onChange={onChange}/>
      <Button icon="send" disabled={disabled}/>
    </Panel>
  )
}

export default MessageSender
