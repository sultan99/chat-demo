import styled from 'styled-components'
import {palette} from 'common/style'

const Button = styled.button`
  background-color: ${palette(`primary`)};
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
    background-color:  ${palette(`balloon`)};
    box-shadow: unset;

    > svg {
      fill: ${palette(`stone`)};
    }
  }
`

export default Button
