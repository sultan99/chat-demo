import React from 'react'
import Text from './text.sc'

const isEmpty = str => (
  !str.replace(/[\s\t\n]+/g, ``).length
)

const emitChange = (multiline, onChange) => event => {
  const childs = event.target.childNodes
  if (!multiline && childs.length > 1) {
    event.target.innerHTML = childs[0].innerHTML || ``
  }
  const html = event.target.innerHTML
  const text = event.target.innerText
  const value = isEmpty(text) ? `` : html
  onChange({target: {value}})
}

function InputText(props, ref) {
  const {multiline, placeholder, value, onChange, ...rest} = props
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
      onInput={emitChange(multiline, onChange)}
      {...rest}
    />
  )
}

export default React.forwardRef(InputText)
