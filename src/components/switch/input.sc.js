import Toggle from './toggle.sc'
import styled from 'styled-components'
import {palette} from 'common/style'

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:focus ~ ${Toggle},
  &:active ~ ${Toggle} {
    box-shadow: 0 0 0 3px rgba(9, 175, 255, 0.1);
    outline: none;
  }

  &:checked ~ ${Toggle} {
    background-color: ${palette(`secondary`)};
  }

  &:checked ~ ${Toggle}:after {
    left: 16px;
  }
`

export default Input
