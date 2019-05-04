import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 50px;

  > button {
    background-color: ${palette(`danger`)};
    bottom: 20px;
    color: ${palette(`tattoo`)};
    right: 24px;
    position: absolute;

    > svg {
      height: 16px;
    }
  }
`

export default Panel
