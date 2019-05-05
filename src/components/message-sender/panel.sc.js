import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  bottom: 0;
  box-shadow: 0 0 20px 0px ${palette(`shadow`)};
  max-width: 600px;
  min-height: 60px;
  position: fixed;
  width: 100%;

  > button {
    position: absolute;
    right: 20px;
    top: 4px;
    transition: top 0.3s, transform 0.3s;

    &:not(:disabled) {
      top: -4px;
      transform: scale(1.15);
    }
  }
`

export default Panel
