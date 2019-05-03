import React from 'react'
import Avatar from 'components/avatar'
import Button from 'components/button'
import Header from './header.sc'
import Radio from 'components/radio'
import Panel from './panel.sc'
import Input from './input.sc'
import Section from './section.sc'

const AppSettings = () => (
  <Panel>
    <Header>
      <Avatar src="./public/images/190506.png"/>
      <Input placeholder="Type your name"/>
    </Header>
    <Section>
      <h4>Interace color</h4>
      <Radio name="theme">Light</Radio>
      <Radio name="theme">Dark</Radio>
    </Section>
    <Section>
      <h4>Clock display</h4>
      <Radio name="time">12:00 hours</Radio>
      <Radio name="time">24:00 hours</Radio>
    </Section>
    <Button icon="reset"/>
  </Panel>
)

export default AppSettings
