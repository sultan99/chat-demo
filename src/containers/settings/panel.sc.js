import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  background-color: ${palette(`skin`)};
  overflow: hidden;
  padding: 80px 24px;

  > button {
    background-color: ${palette(`danger`)};
    bottom: 20px;
    color: ${palette(`tattoo`)};
    position: fixed;
    right: 24px;

    > svg {
      height: 16px;
    }
  }
`

export default Panel
