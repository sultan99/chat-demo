import styled from 'styled-components'
import {palette} from 'common/style'

const Spot = styled.span`
  background-color: ${palette(`skin`)};
  border-radius: 50%;
  border: 1px solid ${palette(`lace`)}
  box-sizing: border-box;
  height: 18px;
  left: 0px;
  position: absolute;
  top: 2px;
  width: 18px;

  &:after {
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 3px;
    position: absolute;
    top: 3px;
    transition: background 0.25s linear;
    width: 10px;
  }
`

export default Spot
