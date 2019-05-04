import styled from 'styled-components'
import {palette} from 'common/style'

const Wrapper = styled.div`
  background-color: ${palette(`skin`)};
  color: ${palette(`text`)};
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  max-width: 500px;
  padding: 0 24px;
  position: relative;
`

export default Wrapper
