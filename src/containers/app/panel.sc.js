import styled from 'styled-components'
import {palette} from 'common/style'

const Wrapper = styled.div`
  background-color: ${palette(`skin`)};
  color: ${palette(`text`)};
  height: 100vh;
  margin: auto;
  max-width: 600px;
  position: relative;
`

export default Wrapper
