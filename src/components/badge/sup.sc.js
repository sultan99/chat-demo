import styled, {keyframes} from 'styled-components'
import {ifProp, palette} from 'common/style'

const blink = keyframes`
  to {
    background-color: #8bd9ff;
  }
`

const Sup = styled.sup`
  animation: ${blink} 1.1s linear infinite;
  background-color: ${palette(`secondary`)};
  border-radius: 8px;
  color: white;
  display: ${ifProp(`visible`, `inline`, `none`)};
  font-size: 11px;
  font-weight: 600;
  height: 16px;
  line-height: 16px;
  padding: 0 5.5px;
  position: absolute;
  right: -8px;
  text-align: center;
  top: -8px;
`

export default Sup
