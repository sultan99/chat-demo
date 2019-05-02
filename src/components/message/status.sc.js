import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp} from 'styled-tools'

const left = css`
  float: left;
  margin-left: 48px;
`

const right = css`
  float: right;
  margin-right: 48px;
  text-align: right;
`

const Status = styled.div`
  clear: both;
  color: #818da3;
  font-size: 13px;
  padding-top: 4px;
  ${ifProp(`isOwn`, right, left)}
`

Status.propTypes = {
  isOwn: PropTypes.bool,
}

export default Status
