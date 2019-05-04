import Spot from './spot.sc'
import styled from 'styled-components'
import {palette} from 'common/style'

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:focus ~ ${Spot},
  &:active ~ ${Spot} {
    box-shadow: 0 0 0 3px rgba(9, 175, 255, 0.1);
    outline: none;
  }

  &:checked ~ ${Spot} {
    border: 1px solid ${palette(`secondary`)};
  }

  &:checked ~ ${Spot}:after {
    background-color: ${palette(`secondary`)};
  }
`

export default Input
