import styled from 'styled-components'
import {palette} from 'common/style'

const Input = styled.input`
  background-color: ${palette(`skin`)};
  border: 0;
  box-sizing: border-box;
  font-size: 15px;
  height: 100%;
  overflow: hidden;
  padding: 20px 78px 20px 24px;
  width: 100%;

  &::placeholder {
    color: ${palette(`stone`)};
  }
  &:active, &:focus {
    outline: none;
  }
  &:focus {
    color: ${palette(`tattoo`)};

    &::placeholder {
      color: ${palette(`lace`)};
    }
  }
`

export default Input
