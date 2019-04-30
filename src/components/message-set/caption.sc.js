import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ifProp} from 'styled-tools'

const Caption = styled.h1`
  clear: both;
  display: ${ifProp(`visible`, `inline-block`, `none`)};
  float: left;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 0 48px;
  padding-bottom: 8px;
`

Caption.propTypes = {
  visible: PropTypes.bool,
}

export default Caption
