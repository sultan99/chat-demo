import styled from 'styled-components'
import {palette} from 'common/style'

const Pane = styled.div`
  background-color: ${palette(`lace`)};
  border-radius: 9px;
  box-sizing: border-box;
  display: inline-block;
  height: 18px;
  position: relative;
  width: 32px;

  &:after {
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
    content: "";
    height: 14px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: 0.2s;
    width: 14px;
  }
`

export default Pane
