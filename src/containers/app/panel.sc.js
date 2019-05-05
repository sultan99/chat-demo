import styled from 'styled-components'
import {palette} from 'common/style'

const Panel = styled.div`
  background-color: ${palette(`skin`)};
  color: ${palette(`text`)};
  height: 100vh;
  margin: auto;
  max-width: 600px;
`

export default Panel
