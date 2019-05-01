import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp} from 'styled-tools'

const author = css`
  background-color: #09afff;
  border-bottom-right-radius: ${ifProp(`isLast`, `0`, `10px`)};
  color: white;
  float: right;
  margin-right: 48px;
`
const interlocutor = css`
  background-color: #f1f2f6;
  border-bottom-left-radius: ${ifProp(`isLast`, `0`, `10px`)};
  color: #1c2d41;
  float: left;
  margin-left: 48px;
`

const Balloon = styled.div`
  border-radius: 10px;
  clear: both;
  font-size: 15px;
  padding: 14px 18px;
  ${ifProp(`isOwn`, author, interlocutor)};

  & + & {
    margin-top: 10px;
  }
`

Balloon.propTypes = {
  isLast: PropTypes.bool,
  isOwn: PropTypes.bool,
}

export default Balloon
