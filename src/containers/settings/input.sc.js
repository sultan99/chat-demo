import styled from 'styled-components'
import {palette} from 'common/style'

const Input = styled.input`
  border: 0;
  background-color: ${palette(`skin`)};
  border-bottom: 2px solid ${palette(`skin`)};
  box-sizing: border-box;
  color: ${palette(`text`)};
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  transition: border 0.25s linear;

  &:hover {
    border-bottom: 2px solid ${palette(`balloon`)};
  }

  &::placeholder {
    color: ${palette(`lace`)};
    font-weight: 400;
  }

  &:focus, &:active {
    border-bottom: 2px solid #09afff;
    outline: none;
  }
`

export default Input
