import React from 'react'
import PropTypes from 'prop-types'
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

Badge.propTypes = {
  count: PropTypes.number,
}

export default Badge
