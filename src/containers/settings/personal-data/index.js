import React from 'react'
import Input from './input.sc'
import Pane from './pane.sc'
import connect from '../connect'
import {t} from '@lingui/macro'

const onClick = props => () => {
  const id = parseInt(props.appUser.imageUrl.match(/\d+/gi)[0], 10) + 1
  const newId = id > 190507 ? 190502 : id
  const url = `/images/${newId}.png`
  props.setSetting([`user`, `imageUrl`], url)
}

const onChange = props => ({target}) => (
  props.setSetting([`user`, `name`], target.value)
)

const PersonalData = props => (
  <Pane>
    <img src={props.appUser.imageUrl} onClick={onClick(props)}/>
    <Input
      placeholder={props.i18n._(t`Type your name`)}
      value={props.appUser.name}
      onChange={onChange(props)}
    />
  </Pane>
)

export default connect(PersonalData)
