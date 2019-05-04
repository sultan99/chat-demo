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
    margin-left: 6px;
    display: none;
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
