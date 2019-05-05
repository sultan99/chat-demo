import React from 'react'
import Avatar from 'components/avatar'
import Button from 'components/button'
import Header from './header.sc'
import Input from './input.sc'
import Panel from './panel.sc'
import Radio from 'components/radio'
import Section from './section.sc'
import connect from './connect'
import {Trans, t} from '@lingui/macro'

function AppSettings(props) {
  const onNameChange = ({target: {value}}) => (
    props.setSetting([`user`, `name`], value)
  )
  const onLangChange = ({target: {value}}) => (
    props.setSetting([`language`], value)
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
          placeholder={props.i18n._(t`Type your name`)}
          value={props.appUser.name}
          onChange={onNameChange}
        />
      </Header>
      <Section>
        <h4>
          <Trans>Interface color</Trans>
        </h4>
        <Radio {...theme(`light`)}>
          <Trans>Light</Trans>
        </Radio>
        <Radio {...theme(`dark`)}>
          <Trans>Dark</Trans>
        </Radio>
      </Section>
      <Section>
        <h4>
          <Trans>Clock display</Trans>
        </h4>
        <Radio {...time(`hh:mm:ss`)}>
          <Trans>12:00 hours</Trans>
        </Radio>
        <Radio {...time(`HH:mm:ss`)}>
          <Trans>24:00 hours</Trans>
        </Radio>
      </Section>
      <Section>
        <h4>
          <Trans>Send message on CTRL+ENTER</Trans>
        </h4>
        (---o)
      </Section>
      <Section>
        <h4>
          <Trans>Language</Trans>
        </h4>
        <select
          name="language"
          value={props.language}
          onChange={onLangChange}
        >
          <option value="en">English</option>
          <option value="fr">Française</option>
          <option value="ru">Русский</option>
        </select>
      </Section>
      <Button icon="reset" onClick={props.resetSettings}/>
    </Panel>
  )
}

export default connect(AppSettings)
