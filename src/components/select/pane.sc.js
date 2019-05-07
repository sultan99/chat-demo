import styled from 'styled-components'
import {prop} from 'common/style'

const Pane = styled.div`
  position: relative;
  width: ${prop(`width`, `unset`)};
`

export default Pane
