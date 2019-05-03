import React from 'react'
import Avatar from 'components/avatar'
import Button from 'components/button'
import Header from './header.sc'
import Input from './input.sc'
import Panel from './panel.sc'
import Radio from 'components/radio'
import Section from './section.sc'
import connect from './connect'

function AppSettings(props) {
  const onNameChange = ({target: {value}}) => (
    props.setSetting([`user`, `name`], value)
  )
  const onChange = ({target: {name, value}}) => (
    props.setSetting([name], value)
  )
  const makeProps = name => value => ({
    checked: value === props[name],
    name, value, onChange
  })
  const theme = makeProps(`theme`)
  const time = makeProps(`timeFormat`)

  return (
    <Panel>
      <Header>
        <Avatar src={props.appUser.imageUrl}/>
        <Input
          placeholder="Type your name"
          value={props.appUser.name}
          onChange={onNameChange}
        />
      </Header>
      <Section>
        <h4>Interface color</h4>
        <Radio {...theme(`light`)}>Light</Radio>
        <Radio {...theme(`dark`)}>Dark</Radio>
      </Section>
      <Section>
        <h4>Clock display</h4>
        <Radio {...time(`hh:mm:ss`)}>12:00 hours</Radio>
        <Radio {...time(`HH:mm:ss`)}>24:00 hours</Radio>
      </Section>
      <Button icon="reset"/>
    </Panel>
  )
}

export default connect(AppSettings)
