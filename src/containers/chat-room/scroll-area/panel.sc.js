import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  background-color: ${palette(`skin`)};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  padding: 80px 24px;

  > :first-child {
    margin-top: auto;
  }

  > div + div {
    margin-top: 24px;
  }
`

export default Panel
