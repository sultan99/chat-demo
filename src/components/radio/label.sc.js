import Spot from './spot.sc'
import styled from 'styled-components'
import {palette, prop} from 'common/style'

const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  user-select: none;
  width: ${prop(`width`, `unset`)};

  &:hover {
    > ${Spot} {
      border: 1px solid ${palette(`secondary`)};
    }
  }
`

export default Label
