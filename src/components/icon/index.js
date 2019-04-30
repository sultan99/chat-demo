import React from 'react'
import PropTypes from 'prop-types'
import iconsList from './svg'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`

function Icon({src, ...props}) {
  const href = src && src.id ? src : iconsList[src]
  if (!href) {
    throw new Error(`No icon with name '${src}'`)
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
  width: PropTypes.string,
}

export default Icon
