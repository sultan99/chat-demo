import React from 'react'
import Switch from 'components/switch'
import Section from './section.sc'
import connect from '../connect'
import {Trans} from '@lingui/macro'

const onChange = props => ({target}) => (
  props.setSetting([`ctrlEnter`], target.checked)
)

const CtrlEnter = props => (
  <Section>
    <h4>
      <Trans>
        Send message on CTRL+ENTER
      </Trans>
    </h4>
    <Switch
      checked={props.ctrlEnter}
      value={props.ctrlEnter}
      onChange={onChange(props)}
    />
  </Section>
)

export default connect(CtrlEnter)
