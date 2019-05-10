import React from 'react'
import PropTypes from 'prop-types'
import Svg from './svg.sc'
import iconsList from './svg'

function Icon({src, ...props}) {
  const svg = typeof src === `string` ? iconsList[src] : src
  if (!svg) {
    throw new Error(`No icon found: '${src}'`)
  }
  return (
    <Svg viewBox={svg.viewBox} {...props}>
      <use xlinkHref={svg.url}/>
    </Svg>
  )
}

Icon.defaultProps = {
  height: `24px`,
}

Icon.propTypes = {
  height: PropTypes.string,
  src: PropTypes.string,
}

export default Icon
