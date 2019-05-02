import styled from 'styled-components'
import {ifProp} from 'styled-tools'

const Pane = styled.div`
  position: relative;

  > img {
    bottom: 6px;
    position: absolute;
    ${ifProp(`isOwn`, `right`, `left`)}: 0;
  }
`

export default Pane
