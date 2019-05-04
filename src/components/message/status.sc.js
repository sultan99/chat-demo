import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp, palette} from 'common/style'

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
  color: ${palette(`stone`)};
  font-size: 13px;
  padding-top: 4px;
  ${ifProp(`isOwn`, right, left)}
`

Status.propTypes = {
  isOwn: PropTypes.bool,
}

export default Status
