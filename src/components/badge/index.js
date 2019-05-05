import React from 'react'
import Pane from './pane.sc'
import Sup from './sup.sc'

const Badge = ({count, children}) => (
  <Pane>
    {children}
    <Sup visible={count > 0}>
      {count}
    </Sup>
  </Pane>
)

export default Badge
