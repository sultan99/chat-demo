import React from 'react'
import Select from 'components/select'
import Section from './section.sc'
import connect from '../connect'
import {Trans} from '@lingui/macro'

const onChange = props => ({target: {value}}) => (
  props.setSetting([`language`], value)
)

const Language = props => (
  <Section>
    <h4>
      <Trans>
        Language
      </Trans>
    </h4>
    <Select
      value={props.language}
      onChange={onChange(props)}
      width="250px"
    >
      <option value="en">English</option>
      <option value="fr">Française</option>
      <option value="ru">Русский</option>
    </Select>
  </Section>
)

export default connect(Language)
