import styled from 'styled-components'

const Button = styled.button`
  background-color: #00d1b2;
  border-radius: 48px;
  border: 0;
  box-shadow: 0 2px 4px 0px rgba(129, 141, 163, 0.25);
  font-size: 14px;
  font-weight: 600;
  height: 48px;
  min-width: 48px;

  > svg {
    fill: white;
    height: 20px;
  }

  &:active, &:focus {
    outline: none;
  }

  &:active:not(:disabled) {
    box-shadow: unset;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #f1f2f6;
    box-shadow: unset;
    > svg {
      fill: #818da3;
    }
  }
`

export default Button
