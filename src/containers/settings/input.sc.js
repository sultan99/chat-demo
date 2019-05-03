import styled from 'styled-components'

const Input = styled.input`
  border: 0;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  color: #1c2d41;
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  transition: border 0.25s linear;

  &:hover {
    border-bottom: 2px solid #f1f2f6;
  }

  &::placeholder {
    color: #c9c9c9;
    font-weight: 400;
  }

  &:focus, &:active {
    border-bottom: 2px solid #09afff;
    outline: none;
  }
`

export default Input
