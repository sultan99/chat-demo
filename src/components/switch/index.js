import React from 'react'
import PropTypes from 'prop-types'
import Input from './input.sc'
import Pane from './pane.sc'
import Toggle from './toggle.sc'

const Switch = props => (
  <Pane>
    <Input type="checkbox" {...props}/>
    <Toggle/>
  </Pane>
)

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Switch
