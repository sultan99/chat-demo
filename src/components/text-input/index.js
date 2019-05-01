import React from 'react'
import PropTypes from 'prop-types'
import Input from './input.sc'

const onKeyPress = onChange => event => {
  const text = event.key.length === 1
    ? event.target.innerText + event.key
    : event.target.innerText

  return onChange(
    event, text
  )
}

const TextInput = ({placeholder, onChange}) => (
  <Input
    data-placeholder={placeholder}
    contentEditable onKeyPress={onKeyPress(onChange)}
  />
)

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default TextInput
