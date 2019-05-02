import styled from 'styled-components'

const Input = styled.input`
  border: 0;
  box-sizing: border-box;
  font-size: 15px;
  height: 100%;
  overflow: hidden;
  padding: 20px 78px 20px 24px;
  width: 100%;

  &::placeholder {
    color: #818da3;
  }
  &:active, &:focus {
    outline: none;
  }
  &:focus {
    &::placeholder {
      color: #c9c9c9;
    }
  }
`

export default Input
