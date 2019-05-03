import Spot from './spot.sc'
import styled from 'styled-components'

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:focus ~ ${Spot},
  &:active ~ ${Spot} {
    box-shadow: 0 0 0 3px rgba(9, 175, 255, 0.1);
    outline: none;
  }

  &:checked ~ ${Spot} {
    border: 1px solid #09afff;
  }

  &:checked ~ ${Spot}:after {
    background-color: #09afff;
  }
`

export default Input
