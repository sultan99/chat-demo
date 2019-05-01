import React from 'react'
import Button from './button.sc'
import Icon from '../icon'

const SexyButton = ({icon, ...rest}) => (
  <Button {...rest}>
    <Icon src={icon}/>
  </Button>
)

export default SexyButton
