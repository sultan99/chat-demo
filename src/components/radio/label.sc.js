import Spot from './spot.sc'
import styled from 'styled-components'
import {palette} from 'common/style'

const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  user-select: none;

  &:hover {
    > ${Spot} {
      border: 1px solid ${palette(`secondary`)};
    }
  }
`

export default Label
