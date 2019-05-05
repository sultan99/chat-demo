import styled from 'styled-components'
import {palette} from 'common/style'

const Arrow = styled.span`
  border-color: ${palette(`stone`)};
  border-style: solid;
  border-width: 0 2px 2px 0;
  height: 5px;
  position: absolute;
  position: absolute;
  right: 14px;
  top: 13px;
  transform: rotate(45deg);
  transition: transform 0.3s;
  width: 5px;
`

export default Arrow
