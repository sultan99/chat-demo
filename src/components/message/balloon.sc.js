import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp, palette} from 'common/style'

const author = css`
  background-color: ${palette(`secondary`)};
  border-bottom-right-radius: ${ifProp(`isLast`, `0`, `10px`)};
  color: white;
  float: right;
  margin-right: 48px;
`

const interlocutor = css`
  background-color: ${palette(`balloon`)};
  border-bottom-left-radius: ${ifProp(`isLast`, `0`, `10px`)};
  color: ${palette(`text`)};
  float: left;
  margin-left: 48px;
`

const Balloon = styled.div`
  border-radius: 10px;
  clear: both;
  font-size: 15px;
  max-width: calc(100% - 84px);
  overflow-wrap: break-word;
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
