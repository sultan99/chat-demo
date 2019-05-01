import styled from 'styled-components'

const Input = styled.p`
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;

  &:empty:not(:focus)::before {
    color: #818da3;
    content: attr(data-placeholder);
  }
  &:active, &:focus {
    outline: none;
  }
`

export default Input
