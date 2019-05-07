import React from 'react'
import PropTypes from 'prop-types'
import Input from './input.sc'
import Label from './label.sc'
import Spot from './spot.sc'
import Text from './text.sc'

const Radio = ({width, children, ...rest}) => (
  <Label width={width}>
    <Input type="radio" {...rest}/>
    <Spot/>
    <Text>{children}</Text>
  </Label>
)

Radio.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Radio
