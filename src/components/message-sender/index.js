import React from 'react'
import TextInput from '../text-input'
import Panel from './panel.sc'

function onChange(event, value) {
  if (event.key === `Enter`) {
    console.log(value)
  }
}

const Footer = () => (
  <Panel>
    <TextInput placeholder="Type message here" onChange={onChange}/>
  </Panel>
)

export default Footer
