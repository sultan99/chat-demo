import React from 'react'
import Button from './button.sc'
import Icon from '../icon'
import PropTypes from 'prop-types'

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
