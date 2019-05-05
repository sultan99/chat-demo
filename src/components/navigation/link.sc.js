import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {palette} from 'common/style'

const Link = styled(NavLink)`
  color: ${palette(`stone`)};
  display: inline-block;
  text-decoration: none;

  > svg {
    fill: ${palette(`stone`)};
  }

  > span {
    display: none;
    margin-left: 6px;
    vertical-align: middle;
  }

  &.active {
    color: ${palette(`text`)};

    > svg {
      fill: ${palette(`text`)};
    }

    > span {
      display: inline-block;
    }
  }
`

export default Link
