import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Link = styled(NavLink)`
  color: #818da3;
  display: inline-block;
  text-decoration: none;

  > svg {
    fill: #818da3;
  }
  > span {
    margin-left: 8px;
    display: none;
  }

  &.active {
    color: #1c2d41;
    > svg {
      fill: #1c2d41;
    }
    > span {
      display: inline-block;
    }
  }
`

export default Link
