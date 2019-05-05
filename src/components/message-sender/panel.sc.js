import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  bottom: 0;
  box-shadow: 0 0 20px 0px ${palette(`shadow`)};
  max-width: 600px;
  min-height: 60px;
  position: fixed;
  transition: top 0.3s;
  width: 100%;

  > button {
    position: absolute;
    right: 21px;
    top: 4px;

    &:not(:disabled) {
      top: -4px;
    }
  }
`

export default Panel
