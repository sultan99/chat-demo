import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Arrow from './arrow.sc'
import Pane from './pane.sc'
import Select from './select.sc'

function DropList({width, ...rest}) {
  const refSelect = useRef()
  const [isOpen, setState] = useState(false)
  const onClick = () => {
    isOpen && refSelect.current.blur()
    setState(!isOpen)
  }

  return (
    <Pane width={width}>
      <Select ref={refSelect} {...rest} onClick={onClick}/>
      <Arrow/>
    </Pane>
  )
}

DropList.propTypes = {
  onChange: PropTypes.func,
  width: PropTypes.string,
}

export default DropList
