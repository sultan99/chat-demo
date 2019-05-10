import React from 'react'
import Text from './text.sc'

const isEmpty = str => (
  !str.replace(/[\s\t\n]+/g, ``).length
)

const emitChange = onChange => event => {
  const {innerHTML, innerText} = event.target
  const value = isEmpty(innerText) ? `` : innerHTML
  onChange(value)
}

function InputText(props, ref) {
  const {placeholder, value, onChange, ...rest} = props
  if (!value && ref.current) {
    window.requestAnimationFrame(() =>
      ref.current.innerHTML = ``
    )
  }

  return (
    <Text
      ref={ref}
      contentEditable
      data-text={placeholder}
      onInput={emitChange(onChange)}
      {...rest}
    />
  )
}

export default React.forwardRef(InputText)
