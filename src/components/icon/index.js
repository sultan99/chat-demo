import React from 'react'
import PropTypes from 'prop-types'
import Svg from './svg.sc'
import iconsList from './svg'

function Icon({src, ...props}) {
  const href = src && src.id ? src : iconsList[src]
  if (!href) {
    throw new Error(`No icon found: '${src}'`)
  }
  return (
    <Svg viewBox={href.viewBox} {...props}>
      <use href={`#${href.id}`}/>
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
