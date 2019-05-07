import React from 'react'
import Button from 'components/button'
import Pane from './pane.sc'
import connect from '../connect'

const Footer = ({resetSettings}) => (
  <Pane>
    <Button icon="reset" onClick={resetSettings}/>
  </Pane>
)

export default connect(Footer)
