import React from 'react'
import PropTypes from 'prop-types'
import Input from './input.sc'

const onKeyUp = onChange => event => {
  const text = event.key.length === 1
    ? event.target.innerHTML + event.key
    : event.target.innerHTML

  return onChange(
    event, text
  )
}

const TextInput = ({children, placeholder, onChange}) => (
  <Input
    contentEditable
    data-placeholder={placeholder}
    onKeyUp={onKeyUp(onChange)}
    children={children}
  />
)

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default TextInput
