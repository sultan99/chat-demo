import React from 'react'
import Radio from 'components/radio'
import Section from './section.sc'
import connect from '../connect'
import {Trans} from '@lingui/macro'

const onChange = props => ({target: {name, value}}) => (
  props.setSetting([name], value)
)

const TimeFormat = props => (
  <Section>
    <h4>
      <Trans>
        Clock display
      </Trans>
    </h4>
    <Radio
      checked={props.timeFormat === `h:mm a`}
      name="timeFormat"
      onChange={onChange(props)}
      value="h:mm a"
      width="150px"
    >
      <Trans>12:00 hours</Trans>
    </Radio>
    <Radio
      checked={props.timeFormat === `HH:mm`}
      name="timeFormat"
      onChange={onChange(props)}
      value="HH:mm"
    >
      <Trans>24:00 hours</Trans>
    </Radio>
  </Section>
)

export default connect(TimeFormat)
