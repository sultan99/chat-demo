import Spot from './spot.sc'
import styled from 'styled-components'

const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  user-select: none;

  &:hover {
    > ${Spot} {
      border: 1px solid #09afff;
    }
  }
`

export default Label
