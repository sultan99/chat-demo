import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {palette} from 'common/style'

const Link = styled(NavLink)`
  color: ${palette(`stone`)};
  display: inline-block;
  text-decoration: none;

  > span:first-child > svg {
    fill: ${palette(`stone`)};

    &:hover {
      fill: ${palette(`text`)};
    }
  }

  > span:last-child {
    display: none;
    margin-left: 6px;
    vertical-align: middle;
  }

  &.active {
    color: ${palette(`text`)};

    > span:first-child > svg {
      fill: ${palette(`text`)};
    }

    > span:last-child {
      display: inline-block;
    }
  }
`

export default Link
