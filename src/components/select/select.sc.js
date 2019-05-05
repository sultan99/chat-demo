import Arrow from './arrow.sc'
import styled from 'styled-components'
import {palette} from 'common/style'

const Select = styled.select`
  appearance:none;
  background-color: ${palette(`skin`)};
  border-radius: 3px;
  border: 1px solid ${palette(`lace`)};
  box-sizing: border-box;
  color: ${palette(`text`)};
  font-size: 15px;
  height: 35px;
  padding: 0 10px;
  width: 100%;

  &:focus {
    border-color: ${palette(`secondary`)};
    box-shadow: 0 0 0 3px rgba(9, 175, 255, 0.1);
    outline: none;
  }

  &:focus ~ ${Arrow},
  &:active ~ ${Arrow} {
    transform: rotate(225deg);
  }
`

export default Select
