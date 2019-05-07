import React from 'react'
import Radio from 'components/radio'
import Section from './section.sc'
import connect from '../connect'
import {Trans} from '@lingui/macro'

const onChange = props => ({target: {name, value}}) => (
  props.setSetting([name], value)
)

const Theme = props => (
  <Section>
    <h4>
      <Trans>
        Interface color
      </Trans>
    </h4>
    <Radio
      checked={props.theme === `light`}
      name="theme"
      onChange={onChange(props)}
      value="light"
      width="150px"
    >
      <Trans>Light</Trans>
    </Radio>
    <Radio
      checked={props.theme === `dark`}
      name="theme"
      onChange={onChange(props)}
      value="dark"
    >
      <Trans>Dark</Trans>
    </Radio>
  </Section>
)

export default connect(Theme)
