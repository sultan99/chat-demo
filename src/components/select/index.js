import React, {useRef, useState} from 'react'
import Arrow from './arrow.sc'
import Pane from './pane.sc'
import Select from './select.sc'

function DropList(props) {
  const refSelect = useRef()
  const [isOpen, setState] = useState(false)
  const onClick = () => {
    isOpen && refSelect.current.blur()
    setState(!isOpen)
  }

  return (
    <Pane>
      <Select ref={refSelect} {...props} onClick={onClick}/>
      <Arrow/>
    </Pane>
  )
}

export default DropList
