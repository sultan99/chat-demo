import React from 'react'
import PropTypes from 'prop-types'
import Button from './button.sc'
import Icon from '../icon'

const SexyButton = ({icon, children, ...rest}) => (
  <Button {...rest}>
    <Icon src={icon}/>
    {children}
  </Button>
)

SexyButton.propTypes = {
  icon: PropTypes.string,
}

export default SexyButton
