import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  background-color: ${palette(`skin`)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  overflow: hidden;
  padding: 80px 24px;

  > div + div {
    margin-top: 24px;
  }
`

export default Panel
